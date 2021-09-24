import axios from 'axios'
import React, { Component, useRef, useState, useEffect } from 'react'
import Problem from './Problem'
import UserSchedule from './UserSchedule'
import { useAuth } from "../contexts/AuthContext"
import Pagination from './Pagination'

function Problems() {
    
    let [arr, setArr] = useState([])
    let [res, setRes] = useState([])
    let [selectId, setId] = useState()
    let [filteredArr, setFilterArr] = useState([])

    const [keywordFilter, setKeywordFilter] = useState([])
    const [diffFilter, setdiffFilter] = useState([])
    const [typeFilter, setTypeFilter] = useState([])
    const [numPerPage, setnumPerPage] = useState(10)
    const [currentPage, setcurrentPage] = useState(1)

    const idRef = useRef()
    const keywordRef = useRef()
    const diffRef = useRef()
    const typeRef = useRef()
    const numRef = useRef()


    const { currentUser, logout, userData, lcProblems } = useAuth()

    const onClickProb = (e) =>{
    
        setId({'id':e.target.id, 
        'title':e.target.title,
        'type':e.target.name})
    }
    
    useEffect(()=>{
        if(lcProblems){
            let temp = []
            let {problems, difficulty, ids, urls, rates, types} = lcProblems
            if(problems){
                for(let i=0;i<problems.length;i++){
                    temp.push({'id':ids[i],'title':problems[i],'difficulty': difficulty[i], 'url': urls[i], 'type': types[i], 'rate': rates[i]})
                }
                setArr(temp)
                setFilterArr(temp)
            }
        }
       
       
    }, [lcProblems])

    function handleChange(e){
        const searchId = idRef.current.value
        const searchTerm = keywordRef.current.value
        const diffTerm = diffRef.current.value 
        const typeTerm = typeRef.current.value

        let filterArr = []
        //1st - filter by keyword
        if(searchId !=''){
            filterArr = fitlerById(arr, searchId)
        }
        else{
            filterArr = arr
        }

        if(searchTerm !==''){
           
            filterArr = filterByKeyword(filterArr, searchTerm)
        }
    
        //2nd - filter by diff
        if(diffTerm !=='-'){
            
            filterArr = filterByDifficulty(filterArr, diffTerm)
        }
        
        if(typeTerm !=='-'){
         
            filterArr = filterByType(filterArr, typeTerm)
        }
    
        setFilterArr(filterArr)
    }
    function fitlerById(a, id){
        return a.filter((ele)=>{return ele.id+1==id})
    }

    function filterByKeyword(a, keyword){
        return a.filter((ele)=>{return ele.title.toLowerCase().indexOf(keyword.toLowerCase())!==-1})
    }

    function filterByDifficulty(a, difficulty){
        return a.filter((ele)=>{return ele.difficulty.toLowerCase().indexOf(difficulty.toLowerCase())!==-1})
    }

    function filterByType(a, t){
        return a.filter((ele)=>{return ele.type.indexOf(t)!==-1})}
    
    function handleNum(){
        setnumPerPage(parseInt(numRef.current.value))
        setcurrentPage(1)
    }
    function paginate(num){
        setcurrentPage(num)
    }

    const endIndex = numPerPage*currentPage
    const startIndex = endIndex - numPerPage
    const problemDisplay = filteredArr.length>0? filteredArr.slice(startIndex, endIndex): []
 
    return (
        <div>
            <div>Filteres: {}</div> 
            <form>
                <div onChange={handleChange}>
                    <label>By ID</label>
                    <input ref={idRef}></input>
                    <label>By Keyword</label>
                    <input ref={keywordRef}></input>
                    
                    <label>By difficulty</label>
                        <select as="select" ref={diffRef} multiple>
                            <option defaultValue="selected">-</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                    </select>
                    <label>By Type</label>
                        <select as="select" ref={typeRef} multiple>
                        <option selected="selected">-</option>
                        <option> Array </option>
                        <option> Backtracking </option>
                        <option> Binary-Indexed-Tree </option>
                        <option> Binary-Search </option>
                        <option> Binary-Search-Tree </option>
                        <option> Binary-Tree </option>
                        <option> Bit-Manipulation </option>
                        <option> Brainteaser </option>
                        <option> Breadth-First-Search </option>
                        <option> Bucket-Sort </option>
                        <option> Combinatorics </option>
                        <option> Concurrency </option>
                        <option> Counting </option>
                        <option> Counting-Sort </option>
                        <option> Data-Stream </option>
                        <option> Depth-First-Search </option>
                        <option> Design </option>
                        <option> Divide-and-Conquer </option>
                        <option> Doubly-Linked-List </option>
                        <option> Dynamic-Programming </option>
                        <option> Enumeration </option>
                        <option> Game-Theory </option>
                        <option> Geometry </option>
                        <option> Graph </option>
                        <option> Greedy </option>
                        <option> Hash-Function </option>
                        <option> Hash-Table </option>
                        <option> Heap-Priority-Queue </option>
                        <option> Interactive </option>
                        <option> Iterator </option>
                        <option> Linked-List </option>
                        <option> Math </option>
                        <option> Matrix </option>
                        <option> Memoization </option>
                        <option> Merge-Sort </option>
                        <option> Minimum-Spanning-Tree </option>
                        <option> Monotonic-Queue </option>
                        <option> Monotonic-Stack </option>
                        <option> Number-Theory </option>
                        <option> Ordered-Set </option>
                        <option> Prefix-Sum </option>
                        <option> Probability-and-Statistics </option>
                        <option> Queue </option>
                        <option> Quickselect </option>
                        <option> Randomized </option>
                        <option> Recursion </option>
                        <option> Rolling-Hash </option>
                        <option> Shortest-Path </option>
                        <option> Simulation </option>
                        <option> Sliding-Window </option>
                        <option> Sorting </option>
                        <option> Stack </option>
                        <option> String </option>
                        <option> String-Matching </option>
                        <option> Strongly-Connected-Component </option>
                        <option> Suffix-Array </option>
                        <option> Topological-Sort </option>
                        <option> Tree </option>
                        <option> Trie </option>
                        <option> Two-Pointers </option>
                        <option> Union-Find </option>
                    </select>
                </div>
                <button type="submit">
               Create</button>
            </form>
            <div onChange={handleNum}>
                <label>Num of problems</label>
                    <select as="select" ref={numRef} single>
                        <option selected="selected">10</option>
                        <option>25</option>
                        <option>50</option>
                        <option >100</option>
                    </select>
            </div>
            <Pagination probPerpage={numPerPage} totalNum={filteredArr.length} paginate={paginate} />
            <UserSchedule props={selectId}/>
            
           
            {problemDisplay.length>0? problemDisplay.map(p=> <div key={p.id}>
            <Problem title={p.title} difficulty={p.difficulty}  url={p.url} rate={p.rate} type={p.type}/>
            <button id={p.id} title={p.title} name={p.type} onClick={onClickProb} >Select</button></div>):''}
   
           
        </div>)
    
}

export default Problems
