import { FormGroup, Label, Input , Button , Select} from '../GlobalStyles'
import styled from 'styled-components'
import React, { useRef, useState } from "react"
import { db } from "../firebase"
import { useAuth } from "../contexts/AuthContext"
import Problem from './Problem'

function UserPractice() {

    const pId = useRef()
    const result = useRef()
    const schedule = useRef()
    const dateRef = useRef()
    const { currentUser, logout, userData, problems } = useAuth()



    async function handleSubmit(e) {
        e.preventDefault()
        const date1 = new Date();
   
        db.collection('userPractice').add({
            date:date1,
            email:currentUser.email,
            pass: result.current.value,
            problemId:pId.current.value
          })
      }
    
    return (
     <>
     {/* {problems.map(p=><Problem prop={p}/>)} */}
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2 style={{ "color":"white"}}>Add To Record</h2>
          <FormGroup id="pId">
              <Label>Problem Id</Label>
              <Input type="pId" ref={pId} required />
            </FormGroup>
         <FormGroup id="qType">
            <Label>Solved </Label>
            <Select as="select" ref={result} single>
                <option>Yes</option>
                <option>No</option>
            </Select>
         </FormGroup>
         <FormGroup id="schedule">
            <Label>Schedule</Label>
            <Select as="select" ref={schedule} single>
                <option>Yes</option>
                <option>No</option>
            </Select>
         </FormGroup>
         <FormGroup id="date">
                <Label>Date</Label>
                <Input type="date" ref={dateRef} required />
              </FormGroup> 
            <Button  type="submit" style={{"margin-left":"38%", "color":"fcbf49"}}>
              Submit
            </Button>
            
        </form>

      </FormContainer>

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
export default UserPractice
