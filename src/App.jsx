import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dashboard from "./layout/dashboard";
import Homer from "./pages/Home/Index";
import Login from "./components/login/sing-in";
import Register from "./components/login/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homer />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
