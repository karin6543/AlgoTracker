import React, { useRef, useState } from 'react'
// import { Form, Button, Card} from "react-bootstrap"
import { FormGroup, Label, Input , Button } from '../GlobalStyles'
import {useHistory } from "react-router-dom"
import BChart from './BChart'
import styled from 'styled-components'

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
        
            <FormContainer onSubmit={handleSubmit}>
          
              <h4>Benchmark Your Progress</h4><br />
              <div> 🧤User Passing Rate</div> <div> 🙂LeetCode Users Avg. Passing Rate</div> 
              <div className='d-flex justify-content-start'>
              <FormGroup id="difficulty">
                <Label>Difficulty</Label>
                    <select as="select" ref={difficultyRef} onChange={handleChange} single>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    </select>
              </FormGroup>
              <button>
                Filter
              </button>
              <button onClick={handleBack} >Back</button>
              </div>
            
              </FormContainer>
              <BChart diff={diff}/>
       
        
        </>
    )
}

const FormContainer = styled.div`
  border-radius: 5px;
  background-color:#41adcf;
  justify-content: center;
  margin: 50px auto;
  padding: 20px;
  width: fit-content;
   @media screen and (max-width:600px){
     width: 90vw
   }
`
export default Benchmark
