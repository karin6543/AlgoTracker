import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"
import {pMap} from "./ProblemMap"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

function UserSchedule(fromParent) {
  
  const { currentUser, logout, userData } = useAuth()
  const defaultNumDay = 3
  const defaultEmail = currentUser.email

  const dateRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()
  const techRef = useRef()

  const [showCustomDate, setShowCustomDate] = useState(false)
  const [showCustomEmail, setShowCustomEmail] = useState(false)
  const [t, setType] = useState()

  let pId = null
  let pTitle = null
  let pTypes = []
  let pDiff = null
  let dsDisplay = []
  let techniqueDisplay = []
  let typeDisplay = []

  if(fromParent.props){
      
      pId = fromParent.props.id
      pTitle = fromParent.props.title
      pTypes = fromParent.props.type.replaceAll("'",'').replaceAll(' ','').replace('[', '').replace(']', '').split(',')
      pDiff = fromParent.props.difficulty

      for(let i = 0; i<pTypes.length; i++){
          const key = pTypes[i]
          const val = pMap[key.toLowerCase()]
          if(val === 'technique'){
              techniqueDisplay.push(key)
          }
          else if(val === 'ds'){
              dsDisplay.push(key)
          }
          else{
            typeDisplay.push(key)
        }
      }
  }

  async function handleSubmit(e) {
    console.log('click!')
      
    e.preventDefault()
    
    const today = new Date()
    today.setDate(today.getDate() + defaultNumDay)
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let y = today.getFullYear();
    let formattedDate = y + '-'+ mm + '-'+ dd;
    let formattedDate2 = y + '/'+ mm + '/'+ dd;

    const dateSubmit = dateRef.current?dateRef.current.value:formattedDate; 
    const emailSubmit = emailRef.current?emailRef.current.value: defaultEmail
    const passSubmit = passRef.current? passRef.current.value: 'No'
    

    db.collection('userSchedule').add({
        noticeDate: dateSubmit,
        problemId: parseInt(pId),
        email: emailSubmit
        })
    for(let i = 0; i<dsDisplay.length;i++){
        db.collection('tracker').add({
            date: formattedDate2 ,
            pass: passRef.current.value === "Yes"?true:false,
            qType: dsDisplay[i],
            qTechnique: techRef.current.value,
            userId: emailSubmit,
            qDiff: pDiff})}
    
      
        }
      
  async function handleChangeDate(e){
  
      const selectOption = e.target.value
      
      if(selectOption==='Custom Now'){
          
          setShowCustomDate(true)
         

      }
      else{
          setShowCustomDate(false)
         
      }}
  async function handleChangeEmail(e){

      const selectOption = e.target.value
      
      if(selectOption==='Custom Now'){
          
          setShowCustomEmail(true)
        
      }
      else{
          setShowCustomEmail(false)
     
      }}

  useEffect(()=>{
      
      },[showCustomDate])

  return (
    <div className='createRecord'>
    <form onSubmit={handleSubmit}>
    
     <div onChange={handleChangeDate}>
        <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Notification Schedule
            </InputLabel>
            <NativeSelect
                defaultValue={'Use Default'}
                inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
                }}
            >
                <option>Use Default</option>
                <option>Custom Now</option>
         
            </NativeSelect>
            </FormControl>
        </Box>
     </div>
     {showCustomDate?<div> <label>Notification Date</label>
         <input type="date" ref={dateRef} required /></div>:''}

     <div onChange={handleChangeEmail}>

     <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Send Email Reminder To
            </InputLabel>
            <NativeSelect
                defaultValue={'Use Default'}
                inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
                }}>
                <option>Use Default</option>
                <option>Custom Now</option>
         
            </NativeSelect>
            </FormControl>
        </Box>
     </div>
     
     {showCustomEmail?<div> <label>Email</label>
         <input type="email" ref={emailRef} required />
     </div>:''}

     <div>Problem Selected: {pTitle} </div>
     <div> Data Structure: {dsDisplay.toString(',')}</div>
     <div> Type: {typeDisplay.toString(',')}</div>
     <div>
     <label>Technique Used:</label>
         <select as="select" ref={techRef} single>    
             {techniqueDisplay.map(e=><option>{e}</option>)}
             <option>Others</option>
     </select>  
     
     </div>
     <div>
     <label>Pass this problem:</label>
         <select as="select" ref={passRef} single>
             <option>Yes</option>
             <option>No</option>
     </select> 
      
     </div>
       <Button variant="contained" endIcon={<SendIcon />} type="submit">
         Create
        </Button>
       </form>
 </div>)}

export default UserSchedule
