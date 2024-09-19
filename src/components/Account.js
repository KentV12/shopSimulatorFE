import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'

const Account = ({handleLogout, JWT}) => {

  useEffect(() => {
    const handleRequest = async () => {
      try {
        const response = await fetch("/account", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${JWT}`,
            "Content-Type": "application/json",
          }
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

    handleRequest();
  }, []);

  return (
    <div>
        <h1>User Account</h1>
        <Button variant='primary' onSubmit={handleLogout}>Logout</Button>
    </div>
  )
}

export default Account