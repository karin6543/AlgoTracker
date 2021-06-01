import React from "react";
import { signInWithGoogle } from "../firebase";
import { NavLink as Link} from "react-router-dom"
import styled from 'styled-components'
import { FormGroup, Label, Input , Button, Container } from '../GlobalStyles'

export default function Google() {
  return (
    <Container>
      <div className="login-buttons">
        <Button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Continue With Google</span>
       </Button>
       <br/>
      <Link to='/' style={{"margin-left":"44%", "color":"#FFF"}}>Back</Link>
      </div></Container>
  );
}