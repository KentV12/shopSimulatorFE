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
import Subnav from "./components/Subnav";
import CartCanvas from "./components/CartCanvas";
import Account from "./components/Account";

function App() {
  const [JWT, setJWT] = useState("");
  const [displayCart, setDisplayCart] = useState(false);

  const handleLogout = () => {
    setJWT("");
  };

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

  const handleCart = () => {
    setDisplayCart(!displayCart);
  };

  return (
    <div className="container">
      <Navbar
        JWT={JWT}
        handleCart={handleCart}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />
      <Subnav />

      <CartCanvas displayCart={displayCart} handleClose={handleCart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account handleLogout={handleLogout}/>} />
        {/* product page route */}
      </Routes>

      {/* <Routes>
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
        <Route path="/login" element={<Home />} />
        <Route
          path="/register"
          element={<Register handleRegister={handleRegister} />}
        />
        <Route path="/account" element={<Account />} />
      </Routes> */}
    </div>
  );
}

export default App;
