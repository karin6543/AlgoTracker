import axios from 'axios'
import React, { Component, useRef, useState, useEffect } from 'react'
import Problem from './Problem'
import UserSchedule from './UserSchedule'
import { useAuth } from "../contexts/AuthContext"
import BasicPagination from './BasicPagination'
import Chart from "./Chart"
import "../header.css"
import SearchIcon from '@mui/icons-material/Add'; 
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import Pagination from '@mui/material/Pagination';
import { DataGrid } from '@mui/x-data-grid';

import {columns, arrayType} from './ProblemMap'


const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
function Problems() {
    
    let [arr, setArr] = useState([])
    let [res, setRes] = useState([])
    let [selectId, setId] = useState()
    let [filteredArr, setFilterArr] = useState([])

    const a = [{'title':'happy'}, {'title':'ending'}]
    const [keywordFilter, setKeywordFilter] = useState([])
    const [diffFilter, setdiffFilter] = useState([])
    const [typeFilter, setTypeFilter] = useState([])
    const [numPerPage, setnumPerPage] = useState(10)
    const [currentPage, setcurrentPage] = useState(1)
    const [selectionModel, setSelectionModel] = useState([])

    console.log('model: ', selectionModel)
    const idRef = useRef()
    const keywordRef = useRef()
    const diffRef = useRef()
    const typeRef = useRef()
    const numRef = useRef()


    const { currentUser, logout, userData, lcProblems } = useAuth()

    const onClickProb = (e) =>{
        
        console.log('here...', e)
        setId({'id':e.target.id, 
        'title':e.target.title,
        'type':e.target.name,
        'difficulty':e.target.value})
    }
    
    const handleSelect = (e)=>{
        const selected = filteredArr[e[0]]
        setId({'id':selected.id, 
        'title':selected.title,
        'type':selected.type,
        'difficulty':selected.difficulty})

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
        setcurrentPage(1)
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
    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.textContent.replace('submit','').split('*'))
    }
    

    const endIndex = numPerPage*currentPage
    const startIndex = endIndex - numPerPage
    const problemDisplay = filteredArr.length>0? filteredArr.slice(startIndex, endIndex): []

    return (
        
        <div>
          
            
            {userData? <div className="main_chart"><Chart/> </div>: <h4>Add Your First Practice Data !</h4>}
            
            <div >Filteres: {}</div> 
            <form > 
                <div onChange={handleChange}>
                    
                    <div className="filters">
                    <span>
                        <input ref={idRef} placeholder="By ID"></input>
                    </span>
                    <span>
                        <input ref={keywordRef} placeholder="By Keyword"></input>
                    </span>
                    
                    <span>
                        <select as="select" ref={diffRef} multiple>
                            <option defaultValue="selected">-</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </span>
                    <span>
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
                    </span>
                    
                    <Button variant="contained" endIcon={<AddIcon />}>Create</Button>
                    </div>
                </div>
              
            </form>
        
           
            <div className="select_problem">
                <UserSchedule props={selectId}/>
                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid
                    rows={filteredArr}
                    columns={columns}
                    pageSize={numPerPage}
                    rowsPerPageOptions={[numPerPage]}

                    onSelectionModelChange={handleSelect}
                    // disableMultipleSelection={true}
                    />
                    </div>
                {/* <div className="problems">
                    {problemDisplay.length>0? problemDisplay.map(p=> <div key={p.id}>
                    <Problem title={p.title} difficulty={p.difficulty}  url={p.url} rate={p.rate} type={p.type}/>
                    <button id={p.id} title={p.title} name={p.type} value={p.difficulty} onClick={onClickProb} >Select</button></div>):''}
                </div> */}
            </div>
            {/* <Pagination count={10} /> */}
            {/* <Pagination probPerpage={numPerPage} totalNum={filteredArr.length} paginate={paginate} /> */}
            {/* <BasicPagination probPerpage={numPerPage} totalNum={filteredArr.length} paginate={paginate} /> */}
                <div onChange={handleNum}>
                <label>Num of problems</label>
                    <select as="select" ref={numRef} single>
                        <option selected="selected">10</option>
                        <option>25</option>
                        <option>50</option>
                        <option >100</option>
                    </select>
            </div>
            
            
           
        </div>)
    
}

export default Problems
