import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

function App() {
  const [JWT, setJWT] = useState("");

  const handleRegister = async (userData) => {
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Successful registration
      } else {
        // Handle failed registration
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogin = async (userData) => {
    try {
      const response = await fetch("/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        response.text().then(function (data) {
          setJWT(data);
        });
      } else {
        // Handle failed login
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            JWT !== "" ? (
              <Product JWT={JWT} />
            ) : (
              <Navigate replace to={"/login"} />
            )
          }
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/register"
          element={<Register handleRegister={handleRegister} />}
        />
      </Routes>

      <Home />
    </div>
  );
}

export default App;
