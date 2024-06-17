import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import theme from "./theme.js";

import { UserProvider } from "./utils/context/UserContext.jsx";

//react-query para controlar las api con backend
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
//Tengo que investigar sobre estos parametros para queryClient
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//       retry: 1,
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <App />
        </UserProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
