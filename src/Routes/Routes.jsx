import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import InstalledApps from "../pages/InstalledApps/InstalledApps";

const appsLoader = async () => {
  const response = await fetch("/appsData.json");
  
  return response.json(); 
};


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: appsLoader,
        Component: Home,
      },
      {
        path: "/apps",
        loader: appsLoader,
        Component: AllApps,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
        loader: appsLoader,
      },
      {
        path: "/installation",
        element: <InstalledApps />, 
      },
    ],
  },
]);