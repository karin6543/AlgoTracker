import React from 'react'

function Problem(props) {
    
    let {title, difficulty, url, type, rate} = props
    // console.log([title, difficulty, url, type, rate])

    return (
        <div>
           
            <h3>Title: {title}</h3>
            <h4>difficulty: {difficulty}</h4>
            <a href={url}> link </a>
            <div><span>Type:{"  "} {type}</span><span>Rate:{rate}</span></div>
        </div>
    )
}

export default Problem