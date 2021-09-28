import React from 'react'
import SidebarRow from './SidebarRow'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddchartIcon from '@mui/icons-material/Addchart';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import "../sidebarrow.css"

function SideBar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__accountCirlce'>
                <AccountCircleIcon />
            </div>
            <SidebarRow Icon={AddchartIcon} title='performance'/>
            <SidebarRow Icon={HistoryIcon} title='history'/>  
            <SidebarRow Icon={SettingsIcon} title='setting'/>            
        </div>
    )
}

export default SideBar
