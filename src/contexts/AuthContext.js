import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"
import axios from 'axios'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState()
  const [userError, setUserError] = useState()
  const [lcProblems, setProblems] = useState()
  const [res, setRes] = useState([])

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  const fetchData = async ()=>{
    await axios.get('https://us-east1-algo-tracker-dev.cloudfunctions.net/getProblems').then((r)=>{
      
        setProblems(r.data)
 
    })
}

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {

      if(user){
        fetchData()
        setCurrentUser(user)
        setLoading(false)
           db.collection('tracker').where("userId", "==", user.email)
      .onSnapshot(snapshot => {
        setUserData(snapshot.docs)
    },(err) => {
        console.log(err.message)
        })

        db.collection('browserError').where("email", "==", user.email)
        .onSnapshot(snapshot => {
     
          setUserError(snapshot.docs)
      },(err) => {
          console.log(err.message)
          })

      }
   
      else{
        console.log('sign out')
        setCurrentUser(user)
        setLoading(false)
      }
   
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    userData,
    userError,
    lcProblems,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
