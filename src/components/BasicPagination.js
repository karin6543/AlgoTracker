import React, { Component, useRef, useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination';

const BasicPagination = ({probPerpage, totalNum, paginate}) => {

    const probNumbers = [];
    const pgRef = useRef()

    for (let i = 1; i <= Math.ceil(totalNum / probPerpage); i++){
        probNumbers.push(i)
    }

    function handleClick(e){
        e.preventDefault()
        paginate(parseInt(e.target.textContent))
    }
    return (

        <div >
                <Pagination count={probNumbers.length} onClick={handleClick} ref={pgRef}>
                    {/* <button onClick={() => paginate(number)}></button> */}
                </Pagination>
    
       {/* <nav>
            <ul>
            Pages
            {probNumbers.map(number => (
                <Pagination count={number}>
                    <button onClick={() => paginate(number)}>
                   
                    </button></Pagination>
          
            ))}
            </ul>

       </nav> */}
        </div>
    )
}

export default BasicPagination;