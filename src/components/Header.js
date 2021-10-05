import React, { useState } from 'react'
import "../header.css"
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import { NavLink as Link, useHistory, Switch , BrowserRouter as Router} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
function Header() {
    const [error, setError] = useState("")
    const history = useHistory()
    const { currentUser, logout, userData } = useAuth()
    async function handleLogOut() {
        setError("")
    
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }
    return (
        <div className="header">
            <div className="header__left">
                <img src='https://firebasestorage.googleapis.com/v0/b/algo-tracker-dev.appspot.com/o/logo.png?alt=media&token=0b463016-9adb-4e3a-9710-c8fe6df6cc8d'></img>
            </div>
        
            <div className="header__right">
                <Link to='/'><div className="header__addicon"> 
                    <AddIcon />
                </div></Link>
                <div className="header__logouticon"> 
                <LogoutIcon onClick={handleLogOut}/>
                </div>
            </div>
     
            
        </div>
    )
}

export default Header
