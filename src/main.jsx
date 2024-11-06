import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./Route.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="443614597722-8qru3iioo8gvf4g6i0hvcogthpgd9gg9.apps.googleusercontent.com">
      <Route />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
