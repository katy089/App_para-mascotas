import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import * as React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

const ModalUser = (props) => {
  const { isOpen, onOpen, onClose } = props;
  const [toggle, setToggle] = React.useState(true);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  function handleDataFromChild(data) {
    setToggle(data);
  }
  function closeModal() {
    onClose();
  }

  return (
    <div>
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="xl" // sets the size of the modal
          isCentered // centers the modal on the screen
        >
          <ModalOverlay />
          <ModalContent
            w="100%" // sets the width of the modal content
            maxW="500px" // sets the maximum width of the modal content
            mx="auto" // centers the modal content horizontally
            bg="gray.100"
          >
            {/* <ModalHeader>Create your account</ModalHeader> */}
            <ModalCloseButton />
            {/* <ModalBody> */}
            {toggle ? (
              <Login
                sendDataToParent={handleDataFromChild}
                ModalParent={closeModal}
              />
            ) : (
              <Register sendDataToParent={handleDataFromChild} />
            )}
            {/* </ModalBody> */}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default ModalUser;
