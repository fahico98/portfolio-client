import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Routes } from "@/router/Routes.jsx"
import ReactDOM from "react-dom/client"
import "@/styles/index.css"
import React from "react"

const router = createBrowserRouter(Routes())

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
