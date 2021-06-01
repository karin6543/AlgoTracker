import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { FormGroup, Label, Input , Button, Select } from '../GlobalStyles'

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <FormContainer>
      <form  onSubmit={handleSubmit}>
    
          <h2 style={{"margin-left":"13%", "color":"white"}}>Password Reset</h2>
            <FormGroup id="email">
              <Label>Email</Label>
              <Input type="email" ref={emailRef} required />
            </FormGroup>
            <Button disabled={loading} type="submit" style={{"margin-left":"25%", "color":"fcbf49"}}>
              Reset Password

          </Button>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
          </form>
      </FormContainer>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup" style={{ color: '#FFF' }} >Sign Up</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Or Sign-In with  <Link to="/google" style={{ color: '#FFF' }} >Google</Link>
      </div>
    </>
  )
}

const FormContainer = styled.div`
  border-radius: 5px;
  background-color:#fcbf49;
  justify-content: center;
  margin: 50px auto;
  padding: 20px;
  width: fit-content;
   @media screen and (max-width:600px){
     width: 90vw
   }
`