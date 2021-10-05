import React from 'react'

function Problem(props) {
    
    let {title, difficulty, url, type, rate} = props

    return (
        <div>
           
            <h4>Title: {title}</h4>
            <h4>difficulty: {difficulty}</h4>
            <a href={url}> link </a>
            <div><span>Type:{"  "} {type}</span><span>Rate:{rate}</span></div>
        </div>
    )
}

export default Problem