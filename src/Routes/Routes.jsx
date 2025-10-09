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
  if (!response.ok) throw new Error("Failed to fetch apps data");
  return response.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: appsLoader,
        element: <Home />,
      },
      {
        path: "apps",
        loader: appsLoader,
        element: <AllApps />,
      },
      {
        path: "app/:id",
        loader: appsLoader,
        element: <AppDetails />,
      },
      {
        path: "installation",
        element: <InstalledApps />,
      },
    ],
  },
]);
