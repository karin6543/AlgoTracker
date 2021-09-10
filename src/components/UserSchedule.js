import React from 'react'
import { useAuth } from "../contexts/AuthContext"

function UserSchedule() {
    const { currentUser, logout, userData, problems } = useAuth()
   
    return (
        <div>
            <h3>User Name: {currentUser.displayName}</h3>
            <h3>Your Schedule Below</h3>
        </div>
    )
}

export default UserSchedule
