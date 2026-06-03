import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext";


createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="200655930741-ot2g3jo98ejqna9fac1unkecqq46fuj2.apps.googleusercontent.com">
    <AuthProvider>
      <App />
    </AuthProvider>
  </GoogleOAuthProvider>
);