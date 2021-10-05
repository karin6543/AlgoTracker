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
import { NavLink as Link, useHistory, Switch , BrowserRouter as Router} from "react-router-dom"

function SideBar() {
    const { currentUser, logout, userData } = useAuth()
    return (
        <div className='sidebar'>
            <div className='sidebar__accountCirlce'>
                <Avatar src={currentUser.photoURL} sx={{ width: 70, height: 70 }}/>
            </div>
            <Link to='/' style={{ color: "grey"}}><SidebarRow Icon={AddchartIcon} title='Performance'/></Link>
            <Link to='/history' style={{ color: "grey" }}><SidebarRow Icon={HistoryIcon} title='History'/>  </Link>
            <Link to='/setting' style={{ color: "grey"}}><SidebarRow Icon={SettingsIcon} title='Setting'/> </Link>           
        </div>
    )
}

export default SideBar
