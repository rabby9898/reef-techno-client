import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          duration: 4000,
          style: {
            padding: "20px 30px",
            background: "#363636",
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "18px",
          },
        }}
        position="top-center"
        reverseOrder={true}
      />
    </AuthProvider>
  </React.StrictMode>
);
