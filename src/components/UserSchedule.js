import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"
import {pMap} from "./ProblemMap"

function UserSchedule(fromParent) {
  
  const defaultNumDay = 3
  const defaultEmail = 'iris.shi@gmail.com'

  const dateRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()

  const [showCustomDate, setShowCustomDate] = useState(false)
  const [showCustomEmail, setShowCustomEmail] = useState(false)
  const [t, setType] = useState()

  let pId = null
  let pTitle = null
  let pTypes = []
  let dsDisplay = []
  let techniqueDisplay = []
  let typeDisplay = []

  if(fromParent.props){
      pId = fromParent.props.id
      pTitle = fromParent.props.title
      pTypes = fromParent.props.type.replaceAll("'",'').replaceAll(' ','').replace('[', '').replace(']', '').split(',')
    
      for(let i = 0; i<pTypes.length; i++){
          const key = pTypes[i]
          const val = pMap[key.toLowerCase()]
          if(val === 'technique'){
              techniqueDisplay.push(key)
          }
          else{
              typeDisplay.push(key)
          }
      }
  }

  async function handleSubmit(e) {
      
    e.preventDefault()

    // const today = new Date()
    // today.setDate(today.getDate() + defaultNumDay)
    // let dd = today.getDate();
    // let mm = today.getMonth() + 1;
    // let y = today.getFullYear();
    // let formattedDate = y + '-'+ mm + '-'+ dd;

    // const dateSubmit = dateRef.current?dateRef.current.value:formattedDate; 
    // const emailSubmit = emailRef.current?emailRef.current.value: defaultEmail
    // const passSubmit = passRef.current? passRef.current.value: 'No'

    // db.collection('userSchedule').add({
    //     noticeDate: dateSubmit,
    //     problemId: parseInt(pId),
    //     email: emailSubmit
    //     })
    // for(let i=0; i<pTypes.length; i++){
    //     db.collection('userSchedule').add({
    //     noticeDate: today,
    //     problemId: parseInt(pId),
    //     email: emailSubmit
    //     })}


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
    <div>
    <form onSubmit={handleSubmit}>
    
     <div onChange={handleChangeDate}>
         <label>Notification Schedule</label>
         <select as="select" single>
             <option>Use Default</option>
             <option>Custom Now</option>
         </select>
     </div>
     {showCustomDate?<div> <label>Notification Date</label>
         <input type="date" ref={dateRef} required /></div>:''}

     <div onChange={handleChangeEmail}>
     <label>Send Email Reminder To</label>
         <select as="select" single>
             <option>Use Default</option>
             <option>Custom Now</option>
     </select>
     </div>
     
     {showCustomEmail?<div> <label>Email</label>
         <input type="email" ref={emailRef} required />
     </div>:''}

     <div>Problem Selected: {pTitle} </div>
     <div> Problem Type: {typeDisplay.toString(',')}</div>

     <label>Technique Used:</label>
         <select as="select" ref={passRef} single>    
             {techniqueDisplay.map(e=><option>{e}</option>)}
             <option>Others</option>
     </select>  

     <label>Pass this problem:</label>
         <select as="select" ref={passRef} single>
             <option>Yes</option>
             <option>No</option>
     </select>  

       <button type="submit">
         Create</button>
       </form>
 </div>)}

export default UserSchedule
