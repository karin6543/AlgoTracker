import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "firebase/app"
import Chart from "./Chart"
import NewRecord from "./NewRecord"
const db = firebase.firestore();

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout, userData } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  let placeholder = null
  userData? placeholder=userData[0].data() : placeholder=null

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <li><Link to='/newRecord'>Create New</Link></li>
          <li><Link to='/analyzeError'>Analyze Error</Link></li>
          <li><Link to='/benchmark'>Benchmark</Link></li>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
  
      </div>
    </>
  )
}
