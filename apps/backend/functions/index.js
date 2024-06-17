const admin = require('firebase-admin');
const functions = require("firebase-functions");
const cors = require('cors');
const express = require('express');
const firebase = require("firebase/app");
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } = require("firebase/auth");
const { getFirestore } = require("firebase-admin/firestore");
const { user } = require('firebase-functions/v1/auth');
require('dotenv').config();

const app = express();
const appPublic = express();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIN_SENDERID,
  appId: process.env.APP_ID
};

// Initialize Firebase app at the top (for client-side interactions)
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Admin app at the top (for server-side interactions)
const serviceAccount = {
  type: process.env.SERVICE_ACCOUNT_TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = getAuth()
const firestore = getFirestore();

app.use(cors({ origin: true }));
appPublic.use(cors({ origin: true }));

const validateFirebaseIdToken = async (req, res, next) => {
    console.log("Check if request is authorized with Firebase ID token");
  
    if (
      (!req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer ")) &&
      !(req.cookies && req.cookies.__session)
    ) {
      console.error(
        "No Firebase ID token was passed as a Bearer token in the Authorization header.",
        "Make sure you authorize your request by providing the following HTTP header:",
        "Authorization: Bearer <Firebase ID Token>",
        'or by passing a "__session" cookie.'
      );
      res.status(403).send("Unauthorized");
      return;
    }
  
    let idToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      console.log('Found "Authorization" header');
      // Read the ID Token from the Authorization header.
      idToken = req.headers.authorization.split("Bearer ")[1];
    } else if (req.cookies) {
      console.log('Found "__session" cookie');
      // Read the ID Token from cookie.
      idToken = req.cookies.__session;
    } else {
      // No cookie
      res.status(403).send("Unauthorized");
      return;
    }
  
    try {
      const decodedIdToken = await admin.auth().verifyIdToken(idToken);
      console.log("ID Token correctly decoded", decodedIdToken);
      req.user = decodedIdToken;
      next();
      return;
    } catch (error) {
      console.error("Error while verifying Firebase ID token:", error);
      res.status(403).send("Unauthorized");
      return;
    }
};

app.use(validateFirebaseIdToken);

//#region Endpoins Privados

//------------------ Mascotas --------------------------
app.post("/pets", async (req, res) => {
  // Validate pet data
  const { nombre, especie, edad } = req.body;
  if (!nombre || !especie || !edad) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  // Get user ID
  const userID = req.user.uid; // Assuming you have user authentication in place

  // Create pet document in the "pets" collection
  try {
    const petRef = firestore.collection("pets").doc();
    await petRef.set({
      nombre: nombre,
      especie: especie,
      edad: edad,
      userID: userID, // Link pet to user
    });

    const petID = petRef.id; // Get the pet ID

    // Update user document to add pet ID to idPets array
    const userRef = firestore.collection("users").doc(userID);
    const userDoc = await userRef.get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      const idPets = userData.idPets || []; // Initialize idPets if not present
      idPets.push(petID); // Add pet ID to the array

      await userRef.update({ idPets }); // Update user document

      // Send success response with pet ID
      res.status(201).json({ message: "Felicitaciones, tu mascota se ha registrado exitosamente", id: petID });
    } else {
      console.error("Error al obtener documento de usuario", error);
      res.status(500).json({ error: "Ocurrio un error al crear tu mascota" });
    }
  } catch (error) {
    console.error("Error al crear tu mascota", error);
    res.status(500).json({ error: "Ocurrio un error al crear tu mascota" });
  }
})

app.get("/pets/:idUser", async (req, res) => {

  const userID = req.params.idUser;

  // Retrieve user document
  try {
    const userRef = firestore.collection("users").doc(userID);
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      const userData = userDoc.data();
      const idPets = userData.idPets || []; // Get the idPets array

      // Fetch pet data for each pet ID in the array
      const pets = [];
      for (const petID of idPets) {
        const petRef = firestore.collection("pets").doc(petID);
        const petDoc = await petRef.get();

        if (petDoc.exists) {
          const petData = petDoc.data();
          pets.push(petData); // Add pet data to the array
        }
      }

      // Send success response with pets data
      res.status(200).json({ message: "Tus mascotas", pets });
    } else {
      console.error("Error al obtener documento de usuario", error);
      res.status(500).json({ error: "Ocurrio un error al obtener tus mascotas" });
    }
  } catch (error) {
    console.error("Error al obtener tus mascotas", error);
    res.status(500).json({ error: "Ocurrio un error al obtener tus mascotas" });
  }
});

app.put("/pets/:petId", async (req, res) => {
  const petId = req.params.petId;
  const { nombre, especie, edad } = req.body;
  if (!nombre || !especie || !edad) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }
  try {
    const petDocRef = firestore.collection("mascotas").doc(petId);
    await petDocRef.update({
      nombre: nombre,
      especie: especie,
      edad: edad
    });
    res.status(200).json({
      message: "Tu mascota se actualizo correctamente"
    });
  } catch (error) {
    console.error("Errror al actualizar tu mascota ", error);
    res.status(500).json({ error: "Ocurrio un error al actualizar la mascota" });
  }
}

)
app.delete("/pets/:petId", async (req, res) => {
  const petId = req.params.petId;
  try {
    const petDocRef = firestore.collection("mascotas").doc(petId);
    const petDoc = await petDocRef.get();
    if (!petDoc.exists) {
      return res.status(404).json({ Error: "Error la mascota no existe" });
    }
    await petDocRef.delete();
    res.status(200).json({ message: "Tu mascota ha sido eliminada correctamente" })
  } catch (error) {
    console.error("error al eliminar la mascota", error);
    res.status(500).json({ Error: "ocurrio un error al eliminar la mascota" });
  }
});

//------------------ Cuidadores ------------------------
app.post("/registroCuidadores", async (req, res) =>{
  const { nombre, correo, contraseña } = req.body;

  // Validar la entrada
  if (!nombre || !correo || !contraseña) {
    return res.status(400).send({ message: "Error, Faltan datos del nombre, correo o contraseña", status: false });
  }else if (contraseña.length < 6 ) {
    return res.status(400).send({ message: "Error, la contraseña debe contener más de 6 caracteres", status: false });
  }

  // Crear el usuario en Firebase
  try {

    const usersRef = firestore.collection("petSitters");
    const query = usersRef.where('email', '==', correo);
    const querySnapshot = await query.get();

    if (querySnapshot.size > 0) {
      // El usuario existe
      res.status(400).send({ message: "Error, el usuario ya existe", status: false });
    } else {
      // El usuario no existe se procese a crearlo
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);

      // actualizacion de perfil del usuario en auth
      await updateProfile(auth.currentUser,{
        displayName: nombre
      });

      // creacion y guardado de datos en firestore
      await firestore
        .collection("petSitters")
        .doc(userCredential.user.uid)
        .set({
          name: nombre,
          email: correo,
          photo: '',
        });

      await firestore
        .collection("petSitters")
        .doc(userCredential.user.uid + '/' + "information" + '/private')
        .set({
          address: "",
          phone: "",
          location: {},
          bookings:{}
        })

      await firestore
        .collection("petSitters")
        .doc(userCredential.user.uid + '/' + "information" + '/public')
        .set({
          services:{
            housing: false,
            walks: false
          },
          rates:{
            housing: 0,
            walks: 0
          },
          aboutMe:{
            aboutMe: "Agregar información sobre mi",
            experience: 0,
            certifications: []
          },
          petAccepted: {
            dogs: false,
            cats: false
          },
          gallery:[],
          availability: {
            datesOccupied: []
          },
          availableQuotas: 0,
          approximateLocation:{}
        })

      // Enviar respuesta de éxito
      return res.status(201).send({ message: "Usuario registrado correctamente", status: true, userId:userCredential.user.uid, email:correo, name:nombre, token: userCredential.user.accessToken});  
    }
  } catch (error) {
    // Manejar errores de Firebase
    console.error("Error al registrar usuario:", error);
    return res.status(400).send({ message: "Error al registrar usuario", status: false });
  }
})

app.get("/cuidadores/:idCuidador", async (req, res) =>{
  const { idCuidador } = req.params;

  if (!idCuidador) {
    return res.status(400).send({ message: "Error, falta el ID del cuidador", status: false });
  }

  try {
    const cuidadorRef = firestore.collection("petSitters").doc(idCuidador);
    const cuidadorDoc = await cuidadorRef.get();

    if (!cuidadorDoc.exists) {
      return res.status(404).send({ message: "Error, el cuidador no existe", status: false });
    }

    const data = cuidadorDoc.data(); 

    const nestedCollectionsRef = cuidadorRef.collection("information");
    const nestedCollectionsSnapshot = await nestedCollectionsRef.get();

    const nestedData = {};
    for (const doc of nestedCollectionsSnapshot.docs) {
      const collectionPath = doc.id; 
      nestedData[collectionPath] = doc.data(); 
    }

    data.information = nestedData; 


    return res.status(200).send({ message: "Datos completos del cuidador", status: true, data });
  } catch (error) {

    console.error("Error al obtener datos del cuidador:", error);
    return res.status(500).send({ message: "Error al obtener datos del cuidador", status: false });
  }
})

app.put("/editar/cuidador/:idCuidador", async (req,res) =>{
  const { idCuidador } = req.params;
  const dataToUpdate = req.body; // Data to be updated

  // Validate ID and data
  if (!idCuidador || !dataToUpdate) {
    return res.status(400).send({ message: "Error, faltan datos del ID o datos de actualización", status: false });
  }

  // Update data in Firebase
  try {
    const cuidadorRef = firestore.collection("petSitters").doc(idCuidador);
    const cuidadorDoc = await cuidadorRef.get();

    if (!cuidadorDoc.exists) {
      return res.status(404).send({ message: "Error, el cuidador no existe", status: false });
    }

    // Update specific fields (avoid overwriting everything)
    await cuidadorRef.update(dataToUpdate);

    // Enviar respuesta de éxito
    return res.status(200).send({ message: "Datos del cuidador actualizados", status: true });
  } catch (error) {
    // Manejar errores de Firebase
    console.error("Error al actualizar datos del cuidador:", error);
    return res.status(500).send({ message: "Error al actualizar datos del cuidador", status: false });
  }
})

app.post("/reservations", async (req, res) => {
  // Validate reservation data
  const { userID, petID, sitterID, startDate, endDate } = req.body;
  if (!petID || !sitterID || !startDate || !endDate) {
    return res.status(400).json({ error: "Faltan datos obligatorios para la reserva" });
  }

  // Check if user owns the pet
  try {
    const petRef = firestore.collection("pets").doc(petID);
    const petDoc = await petRef.get();

    if (!petDoc.exists) {
      return res.status(404).json({ error: "La mascota no existe" });
    }

    const petData = petDoc.data();
    if (petData.userID !== userID) {
      return res.status(403).json({ error: "No tienes permiso para reservar esta mascota" });
    }
  } catch (error) {
    console.error("Error al obtener la mascota:", error);
    return res.status(500).json({ error: "Ocurrio un error al crear la reserva" });
  }

  // Check sitter availability for requested dates
  try {
    const sitterRef = firestore.collection("petSitters").doc(sitterID);
    const sitterDoc = await sitterRef.get();

    if (!sitterDoc.exists) {
      return res.status(404).json({ error: "El cuidador no existe" });
    }

    const nestedCollectionsRef = sitterRef.collection("information").doc("public");
    const nestedCollectionsSnapshot = await nestedCollectionsRef.get();

    const isAvailable = nestedCollectionsSnapshot.data().availability.datesOccupied.every(
      (occupiedDate) => !(occupiedDate >= startDate && occupiedDate <= endDate)
    );
    if (!isAvailable) {
      return res.status(409).json({ error: "El cuidador no está disponible en las fechas solicitadas" });
    }

    const reservationData = {
      petID:petID,
      sitterID:sitterID,
      userID:userID,
      startDate:startDate,
      endDate:endDate,
      status: "pending", 
    }

    const updatedDatesOccupied = [...nestedCollectionsSnapshot.data().availability.datesOccupied, reservationData];

    await sitterRef.update({
      "information.public.availability.datesOccupied": updatedDatesOccupied,
    });

  } catch (error) {
    console.error("Error al obtener datos del cuidador:", error);
    return res.status(500).json({ error: "Ocurrio un error al crear la reserva" });
  }

  // Create reservation document in "reservations" collection
  try {
    const reservationRef = firestore.collection("reservations").doc();
    await reservationRef.set({
      petID:petID,
      sitterID:sitterID,
      userID:userID,
      startDate:startDate,
      endDate:endDate,
      status: "pending", // Initial reservation status (can be pending, confirmed, cancelled)
    });

    await firestore.collection("users").doc(userID).collection("public").doc

     

    // Send success response with reservation ID
    res.status(201).json({ message: "Reserva creada exitosamente", id: reservationRef.id });
  } catch (error) {
    console.error("Error al crear la reserva:", error);
    return res.status(500).json({ error: "Ocurrio un error al crear la reserva" });
  }
});

exports.app = functions.https.onRequest(app);

//#region Endpoins Publicos

// Registro de Usuario
appPublic.post("/registro", async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  // Validar la entrada
  if (!nombre || !correo || !contraseña) {
    return res.status(400).send({ message: "Error, Faltan datos del nombre, correo o contraseña", status: false });
  }else if (contraseña.length < 6 ) {
    return res.status(400).send({ message: "Error, la contraseña debe contener más de 6 caracteres", status: false });
  }

  // Crear el usuario en Firebase
  try {

    const usersRef = firestore.collection("users");
    const query = usersRef.where('email', '==', correo);
    const querySnapshot = await query.get();

    if (querySnapshot.size > 0) {
      // El usuario existe
      res.status(400).send({ message: "Error, el usuario ya existe", status: false });
    } else {
      // El usuario no existe se procese a crearlo
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);

      // actualizacion de perfil del usuario en auth
      await updateProfile(auth.currentUser,{
        displayName: nombre
      });

      // creacion y guardado de datos en firestore
      await firestore
        .collection("users")
        .doc(userCredential.user.uid)
        .set({
          name: nombre,
          email: correo,
          photo: '',
          idPets: [],
        });
      // Enviar respuesta de éxito
      return res.status(201).send({ message: "Usuario registrado correctamente", status: true, userId:userCredential.user.uid, email:correo, name:nombre, token: userCredential.user.accessToken});  
    }
  } catch (error) {
    // Manejar errores de Firebase
    console.error("Error al registrar usuario:", error);
    return res.status(400).send({ message: "Error al registrar usuario", status: false });
  }
});

// Login de Usuario
appPublic.post("/login", async (req, res) => {
  const { correo, contraseña } = req.body;

  // Validate input
  if (!correo || !contraseña) {
    return res.status(400).send({ message: "Faltan datos obligatorios (correo y contraseña)", status: false });
  }

  try {

    // login de usuario
    const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
    // respuesta de login exitoso
    res.status(200).send({ message: "Usuario autenticado correctamente", status: true, status: true, userId:userCredential.user.uid, email:correo, name: userCredential.user.displayName, token: userCredential.user.accessToken });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(401).send({ message: "Correo o contraseña incorrecta", status: false}); 
  }
});

appPublic.get("/cuidadores", async (req, res) => {
  // Obtener todos los cuidadores de Firebase
  try {
    const cuidadoresRef = firestore.collection("petSitters");
    const cuidadoresSnapshot = await cuidadoresRef.get();

    // Procesar cada documento de cuidador
    const dataPublicos = [];
    for (const doc of cuidadoresSnapshot.docs) {
      const idCuidador = doc.id;
      const name = doc.data().name;
      const photo = doc.data().photo;
      const cuidadorRef = doc.ref.collection("information").doc("public");
      const cuidadorDoc = await cuidadorRef.get();

      if (cuidadorDoc.exists) {
        const dataPublica = cuidadorDoc.data();
        dataPublicos.push({ idCuidador: idCuidador, name:name, photo:photo, ...dataPublica }); // Añadir ID del cuidador
      }
    }

    // Enviar respuesta con los datos públicos de todos los cuidadores
    return res.status(200).send({ message: "Datos públicos de todos los cuidadores", status: true, data: dataPublicos });
  } catch (error) {
    // Manejar errores de Firebase
    console.error("Error al obtener datos públicos de cuidadores:", error);
    return res.status(500).send({ message: "Error al obtener datos públicos de cuidadores", status: false });
  }
})

exports.appPublic = functions.https.onRequest(appPublic);
