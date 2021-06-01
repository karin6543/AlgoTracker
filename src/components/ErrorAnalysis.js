import React, { useRef } from 'react'
import { FormGroup, Label, Input , Button , Select} from '../GlobalStyles'
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"
import DonutChart from './DonutChart'
import styled from 'styled-components'

function ErrorAnalysis() {
  const dateRef = useRef()
    const qTechRef = useRef()
    const errorRef = useRef()
    const platformRef = useRef()
    const { currentUser } = useAuth()

 
  async function handleSubmit(e) {
    e.preventDefault()
    const date = dateRef.current.value
    const error = errorRef.current.value 
    const source = platformRef.current.value
    console.log('your err', error)
    db.collection('browserError').add({
      date: date,
      email: currentUser.email,
      errMsg: '',
      errType: error,
      website: source
    })
  }
    return (
        <>

            <FormContainer>
              <form onSubmit={handleSubmit}>  
              <h2 style={{"color":"white"}}>Create New Record</h2>
              <FormGroup id="date">
                <Label>Date</Label>
                <div/>
                <Input type="date" ref={dateRef} required />
              </FormGroup>
              <FormGroup id="pass">
                <Label>Type</Label>
               
          
                <Select as="select" ref={errorRef} single>
                    <option value="AttributeError">AttributeError</option>
                    <option value="IndexError">IndexError</option>
                    <option value="IndexOutOfRange">IndexOutOfRange</option>
                    <option value="KeyError">KeyError</option>
                    <option value="MemoryError">MemoryError</option>
                    <option value="OverflowError">OverflowError</option>
                    <option value="ReferenceError">ReferenceError</option>
                    <option value="RecursionError">RecursionError</option>
                    <option value="StopIteration">StopIteration</option>
                    <option value="SyntaxError">SyntaxError</option>
                    <option value="TypeError">TypeError</option>    
                </Select>
              </FormGroup>
              <FormGroup id="qType">
                <Label>Problem Type</Label>
                {'\n'}
                <Select as="select" ref={qTechRef} single>
                <option value="Array Binary Search">Array Binary Search</option>
                    <option value="Pointers">Pointers</option>
                    <option value="String">String</option>
                    <option value="Array Hash Table">Array Hash Table</option>
                    <option value="Stack/Queue">Stack/Queue</option>
                    <option value="BST">BST</option>
                    <option value="Tree BFS">Tree BFS</option>
                    <option value="Tree DFS">Tree DFS</option>
                    <option value="Tree Binary Search">Tree Binary Search</option>
                    <option value="Heap">Heap</option>
                    <option value="Tree Hash Table">Tree Hash Table</option>
                    <option value="Memoization">Memoization</option>
                    <option value="Tabulation">Tabulation</option>
                    <option value="Graph BFS">Graph BFS</option>
                    <option value="Graph DFS">Graph DFS</option>
                    <option value="Graph Hash Table">Graph Hash Table</option>
                    <option value="Singly Linked List">Singly Linked List</option>
                    <option value="Doubly Linked List">Doubly Linked List</option>
                    <option value="Prefix Trie">Prefix Trie</option>
                </Select>
              </FormGroup>
              <FormGroup id="difficulty">
                <Label>Platform</Label>
                    <select as="select" ref={platformRef} single>
                    <option value="LeetCode">LeetCode</option>
                    <option value="AlgoExpert">AlgoExpert</option>
                    <option value="HackerRank">HackerRank</option>
                    <option value="Other">Other</option>   
                    </select>
                    
              </FormGroup>
              <Button type="submit">
                Submit
              </Button>
             
              <Link to='/' style={{"color":"white"}}>Back</Link>
              </form>
            </FormContainer>
        <DonutChart />
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
   }`

export default ErrorAnalysis
