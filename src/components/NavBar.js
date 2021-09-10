import React, { useState } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link, useHistory, Switch , BrowserRouter as Router} from "react-router-dom"
import { Button, Container } from '../GlobalStyles';
import { useAuth } from "../contexts/AuthContext"

const Navbar = () => {

  const [error, setError] = useState("")
  const { currentUser, logout, userData } = useAuth()
  const history = useHistory()
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
  <Nav>
    <NavbarContainer>
      
      <NavMenu>
          <NavLink to='/UserPractice' style={{ color: 'white'}}>User Practice</NavLink>
          <NavLink to='/UserSchedule' style={{ color: 'white'}}>Schedule</NavLink>
          <NavLink to='/newRecord' style={{ color: 'white' }}>Create New?</NavLink>
          <NavLink to='/analyzeError' style={{ color: 'white' }}>Analyze Error</NavLink>
          <NavLink to='/benchmark' style={{ color: 'white' }}>Benchmark</NavLink>
 
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
  
          </NavMenu>
    </NavbarContainer>
  </Nav>
 )}

const Nav = styled.nav` 
  margin: 0px;
  position: sticky;
  top: 0;
  height: 80px;
  background-color: #fcbf49;
  z-index: 3;
  // box-shadow: 0px 5px 20px rgb(48,181,204, 0.5); 
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:600px){
    overflow: hidden;
    position: relative;
  }
`;
 const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:600px){
    display: flex;
    justify-content: space-between;
  }
  ${Container};
`;
const NavLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  // font-weight: bold;
  font-size: 18px;
  color: white;
  transition: all .2s ease;
  &:hover {
    color: white;
  }
  &:active {
      transform: traslateY(3rem);
      color: #fcbf49;
  }
  @media screen and (max-width:600px){
    text-decoration: none;
    font-size: 17px;
    width: 100%;
    // &:hover { 
    //   background-color: #fff;
    // }
  }
`;
const NavMenu = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

`;
const StyledBurger = styled.div`
  width: 4rem;
  height: 4rem;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    margin-top: 0.5rem;
    width: 4rem;
    height: 1rem;
    background-color: ${({ open }) => open ? '#ccc' : '#0f3057'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
const ProfilePhoto = styled.img`
  border: solid 1px #0f3057;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-left: 20px;
  margin-right: 20px;
  @media screen and (max-width:600px){
    height: 50px;
    width: 50px;
    // display: none;
  }
`
const Name = styled.h1`
  border: solid 1px white;
  text-align:center;
  padding-top: 35%;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: #faf1e6;
`
export default Navbar