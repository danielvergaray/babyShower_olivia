import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import Home from "./components/jsx-pages/Home.jsx";
import LoginContainer from "./components/login/LoginContainer.jsx";
import AdministradorContainer from "./components/administrador/AdministradorContainer.jsx";
import ListaRegalosContainer from "./components/lista-regalos/ListaRegalosContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <LoginContainer /> },
      { path: "/administrador", element: <AdministradorContainer /> },
      {
        path: "/lista-regalos",
        element: <ListaRegalosContainer />,
        children: [
          {
            path: "/lista-regalos/:regalosId",
            element: <ListaRegalosContainer />,

            children: [
              {
                path: "confirmacionRegalo",
                element: <ListaRegalosContainer />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
