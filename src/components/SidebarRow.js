import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../sidebarrow.css"

function SidebarRow({src, Icon, title}) {
    return (
        <div className='sidebarRow'>
            {src && <AccountCircleIcon src={src}/>}
            {Icon && <Icon />}
            <span>{"_"}</span>
            <span> <h4>{title}</h4>  </span>
        </div>
    )
}

export default SidebarRow 
