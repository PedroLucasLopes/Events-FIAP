import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login/Login.tsx";
import Main from "./pages/Main/Main.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import FavoriteEvent from "./pages/FavoriteEvent/FavoriteEvent.tsx";
import "./index.css";
import Create from "./pages/Create/Create.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/favorite",
    element: <FavoriteEvent />,
  },
  {
    path: "/createEvent",
    element: <Create />,
  },
  {
    path: "/createTalk",
    element: <Create />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
