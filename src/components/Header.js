import React from 'react'
import "../header.css"
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src='https://firebasestorage.googleapis.com/v0/b/algo-tracker-dev.appspot.com/o/logo.png?alt=media&token=0b463016-9adb-4e3a-9710-c8fe6df6cc8d'></img>
            </div>
        
            <div className="header__right">
                <div className="header__addicon"> 
                    <AddIcon />
                </div>
                <div className="header__logouticon"> 
                    <LogoutIcon />
                </div>
            </div>
     
            
        </div>
    )
}

export default Header
