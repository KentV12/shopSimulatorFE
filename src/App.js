import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Register from "./components/Register";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegister = async (userData) => {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Successful login
        // onLogin(); // Call the callback to update the logged-in state
      } else {
        // Handle failed login
        // You can display an error message to the user
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return (
    <div>
      <div>
        <Navbar />

        <div className="container">
          {loggedIn ? (
            <Product />
          ) : (
            <Register handleRegister={handleRegister} />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
