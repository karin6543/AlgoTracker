import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../sidebarrow.css"

function SidebarRow({src, Icon, title}) {
    return (
        <div className='sidebarRow'>
            {src && <AccountCircleIcon src={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow 
