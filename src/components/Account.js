import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const Account = ({handleLogout, JWT}) => {
  const [problem, setProblem] = useState(false);
  const [loading, setLoading] = useState(true);

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
          // Successful
          setLoading(false)
          console.log(JWT);
        } else {
          // Handle failed
          setProblem(true);
        }
      } catch (error) {
        console.log("Error during JWT authentication");
        setProblem(true);
      }
    };

    handleRequest();
  }, [JWT]);

  if (problem) {
    return <div>error</div>
  }

  if (loading) { // prevents flashes account content below since UseEffect() takes non-zero time to fetch
    return <div>loading...</div>
  }

  return (
    <div>
      <h1>User Account</h1>
      <Button variant='primary' onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Account