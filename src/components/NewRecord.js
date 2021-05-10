import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Card, Alert, DropdownMenu, DropdownItem, Col} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { auth, db } from "../firebase"
import Chart from "./Chart"

function NewRecord() {
    const dateRef = useRef()
    const qTypeRef = useRef()
    const qTechRef = useRef()
    const passRef = useRef()
    const difficultyRef = useRef()
    const { currentUser, logout, userData } = useAuth()
    const [field, setField] = useState([]);

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
        console.log('here', [date, difficulty, pass, qType])
        db.collection('tracker').add({
            date: date,
            userId: currentUser.email,
            qType: qType, 
            qTechnique: qTechnique,
            pass: pass === 'Yay' ? true : false,
            difficulty: difficulty
          })
      }

    return (
        <>
        <Card>
          <Card.Body>
         
            <h2 className="text-center mb-4">Create New Record</h2>
          
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
              <Form.Group id="qType">
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
              <Button className="w-100" type="submit" color="warning">
                Create
              </Button>
              <Link to='/'>Back</Link>
            </Form>
          </Card.Body>
        </Card>
        <Chart /></>
    )
}

export default NewRecord
