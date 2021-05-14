import React, { useState , PropTypes} from "react"
import { Button, Navbar } from "react-bootstrap"
import { FaBars } from 'react-icons/fa';
import { useAuth } from "../contexts/AuthContext"
import { NavLink as Link, useHistory, Switch , BrowserRouter as Router} from "react-router-dom"
import styled from 'styled-components';
import UpdateProfile from "./UpdateProfile"
import NewRecord from './NewRecord'
import ErrorAnalysis from './ErrorAnalysis'
import Benchmark from './Benchmark'
import PrivateRoute from "./PrivateRoute"
import { AuthProvider } from "../contexts/AuthContext"

// export const Nav = styled.nav`
//   background:rgba(0, 0, 0, 0);
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
  
// `;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fdef1d;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout, userData } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <Router>
      <Navbar color="light" light expand="md">
      <Bars />
      <NavMenu>
          <NavLink to='/newRecord' >Create New</NavLink>
          <NavLink to='/analyzeError' >Analyze Error</NavLink>
          <NavLink to='/benchmark' >Benchmark</NavLink>
          <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
  
      </div> 
          </NavMenu>
      </Navbar>
      <AuthProvider>
    
            <Switch> 
              <PrivateRoute exact path="/" component={NewRecord} />
              <PrivateRoute exact path="/newRecord" component={NewRecord} />
              <PrivateRoute exact path="/analyzeError" component={ErrorAnalysis} />
              <PrivateRoute exact path="/benchmark" component={Benchmark} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
            </Switch>
          </AuthProvider>

          </Router>
      </>
  )
}
