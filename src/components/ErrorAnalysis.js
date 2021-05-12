import React, { useRef } from 'react'
import { Form, Button, Card} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"
import DonutChart from './DonutChart'


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

        <div className='d-flex justify-content-start'>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Create New Record</h2>
          
            <Form onSubmit={handleSubmit}>  
              <Form.Group id="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" ref={dateRef} required />
              </Form.Group>
              <Form.Group id="pass">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" ref={errorRef} single>
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
                </Form.Control>
              </Form.Group>
              <Form.Group id="qType">
                <Form.Label>Problem Type</Form.Label>
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
                <Form.Label>Platform</Form.Label>
                    <Form.Control as="select" ref={platformRef} single>
                    <option value="LeetCode">LeetCode</option>
                    <option value="AlgoExpert">AlgoExpert</option>
                    <option value="HackerRank">HackerRank</option>
                    <option value="Other">Other</option>   
                    </Form.Control>
              </Form.Group>
              <Button className="w-100" type="submit" color="warning">
                Submit
              </Button>
             
              <Link to='/'>Back</Link>
            </Form>
          </Card.Body>
        </Card>
        <DonutChart />
        </div></>
        
    )
}

export default ErrorAnalysis
