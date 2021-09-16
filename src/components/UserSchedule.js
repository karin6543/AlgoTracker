import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"

function UserSchedule(id) {
   
  const defaultNumDay = 3
  const defaultEmail = 'iris.shi@gmail.com'

  const dateRef = useRef()
  const emailRef = useRef()


  const [showCustomDate, setShowCustomDate] = useState(false)
  const [showCustomEmail, setShowCustomEmail] = useState(false)


  async function handleSubmit(e) {
      
      e.preventDefault()
      const today = new Date()
      today.setDate(today.getDate() + defaultNumDay)
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      let y = today.getFullYear();
      let formattedDate = y + '-'+ mm + '-'+ dd;
      const pID = id.props
      const dateSubmit = dateRef.current?dateRef.current.value:formattedDate; 
      const emailSubmit = emailRef.current?emailRef.current.value: defaultEmail

      console.log('submit', dateSubmit, pID, emailSubmit)
      db.collection('userSchedule').add({
        noticeDate: today,
        problemId: parseInt(pID),
        email: emailSubmit
      })
      
      
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
      console.log('show custom option?')
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
             
            <button type="submit">
              Create</button>
            </form>
      </div>
  )
}
export default UserSchedule
