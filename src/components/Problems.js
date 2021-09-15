import axios from 'axios'
import React, { Component, useRef, useState, useEffect } from 'react'
import Problem from './Problem'


function Problems() {
    let [problems, setProblems] = useState([])
    let [difficulty, setDiff] = useState([])
    let [id, setId] = useState([])
    let [url, setUrl] = useState([])
    let [arr, setArr] = useState([])
    let [res, setRes] = useState([])

    const fetchData = async ()=>{
        await axios.get('https://us-east1-algo-tracker-dev.cloudfunctions.net/getProblems').then((r)=>{
            setRes(r.data)
        //     setProblems(res.data.problems)
        //     setDiff(res.data.difficulty)
        //     setUrl(res.data.urls)
        //     setId(res.data.ids)
        })
    }

    useEffect(()=>{
        let {problems, difficulty, ids, urls, rates, types} = res
        // console.log(problems)
        if(problems){
            for(let i=0;i<problems.length;i++){
                arr.push({'id':ids[i],'title':problems[i],'difficulty': difficulty[i], 'url': urls[i], 'type': types[i], 'rate': rates[i]})
            }

            setArr(arr)
        }
       
    }, [res])

    return (
        <div>
            <button onClick={fetchData}>Load Problems</button>
           
            {arr.length>0? arr.map(p=> <div><Problem title={p.title} difficulty={p.difficulty} key={p.id} url={p.url} rate={p.rate} type={p.type}/><button>Select</button></div>):''}
   
           
        </div>
    )
}

export default Problems