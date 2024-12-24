import React from "react";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routers/MainRouter";

function App() {
  return (
    <div className="App">
      <RouterProvider router={MainRouter} />
    </div>
  );
}

export default App;
