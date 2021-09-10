import React from 'react'

function Problem(props) {

    const pData = props.prop.data()
    return (
        <div>
            <h4>Name: {pData.problemName}</h4>
            <h4>id:  {pData.prblemId}</h4>
            <h4>Difficulty</h4>
            <h4>DS</h4>
            <h4>Rate</h4>
        </div>
    )
}

export default Problem
