import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { db } from "../firebase"
import Chart from "./Chart"
import styled from 'styled-components'
import { FormGroup, Label, Input , Button, Select } from '../GlobalStyles'
// const Knex = require('knex');

function NewRecord() {
    const dateRef = useRef()
    const qTypeRef = useRef()
    const qTechRef = useRef()
    const passRef = useRef()
    const difficultyRef = useRef()
    const { currentUser, logout, userData } = useAuth()
    const [field, setField] = useState([]);
    const [display, setDisplay] = useState('Array')

    const status = {
      'Array':true, 
      'Linked List':true, 
      'Dynamic Programming':true, 
      'Trie':true, 
      'Graph':true, 
      'Tree':true}

    useEffect(()=>{
      console.log('')
    },[])
    
    async function handleSubmit(e) {
        e.preventDefault()
        const date = dateRef.current.value
        const difficulty = difficultyRef.current.value
        const pass = passRef.current.value 
        const qType = qTypeRef.current.value
        const qTechnique = qTechRef.current.value
    
        db.collection('tracker').add({
            date: date,
            userId: currentUser.email,
            qType: qType, 
            qTechnique: qTechnique,
            pass: pass === 'Yay' ? true : false,
            difficulty: difficulty
          })
      }

      async function handleChange(e){
       
        const types = Object.keys(status)

        const selectOption = e.target.value

        setDisplay(selectOption)
     
    }
    status[display]=false
    return (
        <>
        <div className='d-flex justify-content-around'>
     
        <FormContainer >
         <form onSubmit={handleSubmit}>
            <h4 style={{"color":"white"}}>Create New Record</h4>
        
              <FormGroup id="date">
                <Label>Date</Label>
                <Input type="date" ref={dateRef} required />
              </FormGroup>
              <FormGroup id="pass">
                <Label>Pass/Fail</Label>
                <Select as="select" ref={passRef} single>
                    <option>Yay</option>
                    <option>Nay</option>
                </Select>
              </FormGroup>
              <FormGroup id="qType" onChange={handleChange}>
                <Label>Problem Type</Label>
                <Select as="select" ref={qTypeRef} single>
                    <option>Array</option>
                    <option>Dynamic Programming</option>
                    <option>Graph</option>
                    <option>Linked List</option>
                    <option>Tree</option>
                    <option>Trie</option>
                </Select>
              </FormGroup>
              <FormGroup id="qTechnique">
                <Label>Technique Used</Label>
                <Select as="select" ref={qTechRef} single>
                    <option value="Array Binary Search" disabled={status["Array"]}>Array Binary Search</option>
                    <option value="Pointers" disabled={status["Array"]}>Pointers</option>
                    <option value="String" disabled={status["Array"]}>String</option>
                    <option value="Array Hash Table" disabled={status["Array"]}>Array Hash Table</option>
                    <option value="Stack/Queue" disabled={status["Array"]}>Stack/Queue</option>
                    <option value="BST" disabled={status['Tree']}>BST</option>
                    <option value="Tree BFS" disabled={status['Tree']}>Tree BFS</option>
                    <option value="Tree DFS" disabled={status['Tree']}>Tree DFS</option>
                    <option value="Tree Binary Search" disabled={status['Tree']}>Tree Binary Search</option>
                    <option value="Heap" disabled={status['Tree']}>Heap</option>
                    <option value="Tree Hash Table" disabled={status['Tree']}>Tree Hash Table</option>
                    <option value="Memoization" disabled={status['Dynamic Programming']}>Memoization</option>
                    <option value="Tabulation" disabled={status['Dynamic Programming']}>Tabulation</option>
                    <option value="Graph BFS" disabled={status['Graph']}>Graph BFS</option>
                    <option value="Graph DFS" disabled={status['Graph']}>Graph DFS</option>
                    <option value="Graph Hash Table" disabled={status['Graph']}>Graph Hash Table</option>
                    <option value="Singly Linked List" disabled={status['Linked List']}>Singly Linked List</option>
                    <option value="Doubly Linked List" disabled={status['Linked List']}>Doubly Linked List</option>
                    <option value="Prefix Trie" disabled={status['Trie']}>Prefix Trie</option>
                </Select>
              </FormGroup>
              <FormGroup id="difficulty">
                <Label>Difficulty</Label>
                  <div>
                  {"\n"}
                    <Select as="select" ref={difficultyRef} single>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    </Select>
                    </div>
                
              </FormGroup>
              <Button type="submit">
                Create
              </Button>
              </form>
        </FormContainer>
        {userData? <Chart/>: <h4>Dude, Add Your First Practice Data</h4>}
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
export default NewRecord
