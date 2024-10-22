import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

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
      <div className='d-flex my-5'>
        <h1>Order History</h1>
        <Button style={{ fontWeight: 'bold' }} className='ms-auto fixed-button' variant='primary' onClick={handleLogout}>Logout</Button>
      </div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#11231</td>
            <td>11/12/2024</td>
            <td>$12.52</td>
          </tr>
          <tr>
            <td>#24512</td>
            <td>11/12/2024</td>
            <td>$25.12</td>
          </tr>
          <tr>
            <td>#41233</td>
            <td>11/12/2024</td>
            <td>$117.03</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Account