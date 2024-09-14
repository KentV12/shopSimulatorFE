import React from 'react'
import { Button } from 'react-bootstrap'

const Account = ({handleLogout}) => {
  return (
    <div>
        <h1>User Account</h1>
        <Button variant='primary' onSubmit={handleLogout}>Logout</Button>
    </div>
  )
}

export default Account