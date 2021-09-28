import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styled, { createGlobalStyle } from 'styled-components';
import { FormGroup, Label, Input , Button , Select} from '../GlobalStyles'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2 style={{"margin-left":"37%", "color":"white"}}>Log In</h2>
         
            <FormGroup id="email">
              <Label>Email</Label>
              <Input type="email" ref={emailRef} required />
            </FormGroup>
            <FormGroup id="password">
              <Label>Password</Label>
              <Input type="password" ref={passwordRef} required />
            </FormGroup>
            <Button disabled={loading} type="submit" style={{"margin-left":"38%", "color":"fcbf49"}}>
              Log In
            </Button>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" style={{ color: '#FFF' }} >Forgot Password?</Link>
          </div>
          </form>
      </FormContainer>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup"style={{ color: '#fcbf49' }} >Sign Up</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Or Sign-In with  <Link to="/google"style={{ color: '#fcbf49' }} >Google</Link>
      </div>
    </>
  )
}
const FormContainer = styled.div`
  border-radius: 5px;

  justify-content: center;
  margin: 50px auto;
  padding: 20px;
  width: fit-content;
   @media screen and (max-width:600px){
     width: 90vw
   }
`