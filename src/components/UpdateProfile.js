import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styled from 'styled-components'
import { FormGroup, Label, Input , Button, Select } from '../GlobalStyles'

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <FormContainer>
      <form onSubmit={handleSubmit}>
          <h2>Update Profile</h2>
            <FormGroup id="email">
              <Label>Email</Label>
              <Select
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </FormGroup>
            <FormGroup id="password">
              <Label>Password</Label>
              <Select
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </FormGroup>
            <FormGroup id="password-confirm">
              <Label>Password Confirmation</Label>
              <Select
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </FormGroup>
            <Button disabled={loading} type="submit">
              Update
            </Button>
        </form>
      </FormContainer>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
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