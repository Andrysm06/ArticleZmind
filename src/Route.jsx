import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./components/NotFound";
import Artikel1 from "./Page/Artikel/Artikel1";
import Artikel2 from "./Page/Artikel/Artikel2";
import Artikel3 from "./Page/Artikel/Artikel3";
import Artikel4 from "./Page/Artikel/Artikel4";
import Artikel5 from "./Page/Artikel/Artikel5";
import Artikel6 from "./Page/Artikel/Artikel6";
import Artikel7 from "./Page/Artikel/Artikel7";
import Artikel8 from "./Page/Artikel/Artikel8";
import Artikel9 from "./Page/Artikel/Artikel9";
import Artikel10 from "./Page/Artikel/Artikel10";

import Home from "./Page/Home";
import TentangKami from "./components/Zmind";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "Artikel1",
    element: <Artikel1 />,
  },
  {
    path: "Artikel2",
    element: <Artikel2 />,
  },
  {
    path: "Artikel3",
    element: <Artikel3 />,
  },
  {
    path: "Artikel4",
    element: <Artikel4 />,
  },
  {
    path: "Artikel5",
    element: <Artikel5 />,
  },
  {
    path: "Artikel6",
    element: <Artikel6 />,
  },
  {
    path: "Artikel7",
    element: <Artikel7 />,
  },
  {
    path: "Artikel8",
    element: <Artikel8 />,
  },
  {
    path: "Artikel9",
    element: <Artikel9 />,
  },
  {
    path: "Artikel10",
    element: <Artikel10 />,
  },
  {
    path: "Zmind",
    element: <TentangKami />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
