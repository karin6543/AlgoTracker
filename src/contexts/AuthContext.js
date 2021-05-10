import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState()
  const [userError, setUserError] = useState()


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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {

      if(user){
        setCurrentUser(user)
        setLoading(false)
        console.log('sign in', user)
           db.collection('tracker').where("userId", "==", user.email)
      .onSnapshot(snapshot => {
        console.log('fetch success')
        setUserData(snapshot.docs)
    },(err) => {
        console.log(err.message)
        })

        db.collection('browserError').where("email", "==", user.email)
        .onSnapshot(snapshot => {
          console.log('setting error', snapshot.docs)
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
