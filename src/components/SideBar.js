import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import SidebarRow from './SidebarRow'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import AddchartIcon from '@mui/icons-material/Addchart';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import "../sidebarrow.css"
import { AuthProvider } from "../contexts/AuthContext"

function SideBar() {
    const { currentUser, logout, userData } = useAuth()
    return (
        <div className='sidebar'>
            <div className='sidebar__accountCirlce'>
                <Avatar src={currentUser.photoURL} sx={{ width: 70, height: 70 }}/>
            </div>
            <SidebarRow Icon={AddchartIcon} title='Performance'/>
            <SidebarRow Icon={HistoryIcon} title='History'/>  
            <SidebarRow Icon={SettingsIcon} title='Setting'/>            
        </div>
    )
}

export default SideBar
