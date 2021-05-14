import React from "react";
import { signInWithGoogle } from "../firebase";
import { NavLink as Link} from "react-router-dom"

export default function Google() {
  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Continue with Google</span>
       </button>
       <br/>
      <Link to='/'>Back</Link>
      </div>
  );
}