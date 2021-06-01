import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Card} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { db } from "../firebase"
import Chart from "./Chart"


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
     
        <Card>
          <Card.Body>
 
            <h4 className="text-center mb-4">Create New Record</h4>
          
            <Form onSubmit={handleSubmit}>
              <Form.Group id="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" ref={dateRef} required />
              </Form.Group>
              <Form.Group id="pass">
                <Form.Label>Pass/Fail</Form.Label>
                <Form.Control as="select" ref={passRef} single>
                    <option>Yay</option>
                    <option>Nay</option>
                </Form.Control>
              </Form.Group>
              <Form.Group id="qType" onChange={handleChange}>
                <Form.Label>Problem Type</Form.Label>
                <Form.Control as="select" ref={qTypeRef} single>
                    <option>Array</option>
                    <option>Dynamic Programming</option>
                    <option>Graph</option>
                    <option>Linked List</option>
                    <option>Tree</option>
                    <option>Trie</option>
                </Form.Control>
              </Form.Group>
              <Form.Group id="qTechnique">
                <Form.Label>Technique Used</Form.Label>
                <Form.Control as="select" ref={qTechRef} single>
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
                </Form.Control>
              </Form.Group>
              <Form.Group id="difficulty">
                <Form.Label>Difficulty</Form.Label>
                    <Form.Control as="select" ref={difficultyRef} single>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    </Form.Control>
              </Form.Group>
              <button type="submit">
                Create
              </button>
        
            </Form>
          </Card.Body>
        </Card>
        {userData? <Chart/>: <h4>Dude, Add Your First Practice Data</h4>}
        </div>
        </>
    )
}

export default NewRecord
