import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styled from 'styled-components'
import { FormGroup, Label, Input , Button , Select} from '../GlobalStyles'


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2 style={{"margin-left":"37%", "color":"white"}}>Sign Up</h2>
            <FormGroup id="email">
              <Label>Email</Label>
              <Input type="email" ref={emailRef} required />
            </FormGroup>
            <FormGroup id="password">
              <Label>Password</Label>
              <Input type="password" ref={passwordRef} required />
            </FormGroup>
            <FormGroup id="password-confirm">
              <Label>Confirm Password</Label>
              <Input type="password" ref={passwordConfirmRef} required />
            </FormGroup>
            <Button disabled={loading}  type="submit" style={{"margin-left":"38%", "color":"fcbf49"}}>
              Sign Up
            </Button>
        </form>

      </FormContainer>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login" style={{ color: '#fcbf49' }}>Log In</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Or Sign-In with  <Link to="/google"style={{ color: '#fcbf49' }}>Google</Link>
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