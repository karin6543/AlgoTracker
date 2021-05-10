import React from 'react'
import { Form, Button, Card, Alert, DropdownMenu, DropdownItem} from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"


function Benchmark() {
  const history = useHistory()
  function handleBack(){
    history.push('/')
  }
    return (
        <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Benchmark Your Progress</h2>
            <Form>
              <Form.Group id="difficulty">
                <Form.Label>Difficulty</Form.Label>
                    <Form.Control as="select" single>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    </Form.Control>
              </Form.Group>
              <Button onClick={handleBack}>Back</Button>
            </Form>
          </Card.Body>
        </Card></>
    )
}

export default Benchmark
