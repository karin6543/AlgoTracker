import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Card, Alert, DropdownMenu, DropdownItem} from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import BChart from './BChart'

function Benchmark() {
  const difficultyRef = useRef()
  const [diff, setDiff] = useState('Easy')
  const history = useHistory()
  function handleBack(){
    history.push('/')
  }
  async function handleSubmit(e) {
    e.preventDefault()
   
    console.log(difficultyRef.current.value)
  }

  function handleChange(e){
    setDiff(e.target.value)
  }
    return (
        <>
      <div className='d-flex justify-content-start'>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Benchmark Your Progress</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="difficulty">
                <Form.Label>Difficulty</Form.Label>
                    <Form.Control as="select" ref={difficultyRef} onChange={handleChange} single>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    </Form.Control>
              </Form.Group>
              <Button className="w-100" type="submit">
                Filter
              </Button>
              <Button onClick={handleBack} className="w-100">Back</Button>
            </Form>
          </Card.Body>
        </Card>
        <BChart diff={diff}/>
        </div>
        </>
    )
}

export default Benchmark
