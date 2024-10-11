import { useEffect, useState } from "react";
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
import ProtectedRoutes from "./components/ProtectedRoutes";
import Toast, { showToast } from "./components/Toast";

function App() {
  const [JWT, setJWT] = useState("");
  const [displayCart, setDisplayCart] = useState(false);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  const handleLogout = () => {
    setJWT("");
  };

  const addToCart = (newItem) => {
    setItems([...items, newItem]);
    // console.log(items);
    showToast("Added to cart");
  }

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products", {
          method: "GET",
          headers: {},
        });

        if (!response.ok) {
          throw new Error("response not ok");
        }

        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error("error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // need to include the dependency array [] or this will cause a loop to server
  // as useEffect will run after every re-render, which is the case after updating setProduct

  return (
    <div className="container">
      <Navbar
        JWT={JWT}
        handleCart={handleCart}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />

      <Subnav />
      <CartCanvas displayCart={displayCart} handleClose={handleCart} JWT={JWT} cartItems={items}/>
      <Toast />

      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route element={<ProtectedRoutes JWT={JWT} />}>
          <Route path="/account" element={<Account handleLogout={handleLogout} JWT={JWT}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
