import { createBrowserRouter } from "react-router-dom";
import Home from "../../../pages/Home/Home";
import MainLayout from "../../layouts/MainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      //   {
      //     path: "login",
      //     element: <></>,
      //   },
      //   {
      //     path: "*",
      //     element: <Navigate to="error"></Navigate>,
      //   },
    ],
  },

  {
    path: "error",
    // element: <ErrorPage></ErrorPage>,
  },
]);
