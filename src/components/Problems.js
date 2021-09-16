import axios from 'axios'
import React, { Component, useRef, useState, useEffect } from 'react'
import Problem from './Problem'
import UserSchedule from './UserSchedule'
import { useAuth } from "../contexts/AuthContext"


function Problems() {
    
    let [arr, setArr] = useState([])
    let [res, setRes] = useState([])
    let [selectId, setId] = useState()
    const idRef = useRef()
    const { currentUser, logout, userData, lcProblems } = useAuth()

    const onClickProb = (e) =>{
        setId(e.target.id)
    }
    

    useEffect(()=>{
        if(lcProblems){
            let temp = []
            let {problems, difficulty, ids, urls, rates, types} = lcProblems
            // console.log(problems)
            if(problems){
                for(let i=0;i<problems.length;i++){
                    temp.push({'id':ids[i],'title':problems[i],'difficulty': difficulty[i], 'url': urls[i], 'type': types[i], 'rate': rates[i]})
                }
                setArr(temp)
            }
        }
       
       
    }, [lcProblems])


    return (
        <div>
            <UserSchedule props={selectId}/>
            
           
            {arr.length>0? arr.map(p=> <div><Problem title={p.title} difficulty={p.difficulty} key={p.id} url={p.url} rate={p.rate} type={p.type}/><button onClick={onClickProb} id={p.id}>Select</button></div>):''}
   
           
        </div>
    )
}

export default Problems
