import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const ROOT = '/personal-portfolio';

const MainRouter = createBrowserRouter([
  {
    path: `${ROOT}`,
    element: <Navigate to={`${ROOT}/home`} />
  },
  {
    path: `${ROOT}`,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "404",
        element: <NotFound />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default MainRouter;
