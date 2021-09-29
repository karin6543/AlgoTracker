import React, { useState , PropTypes} from "react"
// import { Button, Navbar } from "react-bootstrap"
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
import { Button, Container } from '../GlobalStyles';
import NavBar from './NavBar'
import Problems from './Problems'
import Header from "./Header"
import SideBar from "./SideBar"
import '../dashboard.css'
import '../sidebarrow.css'
export const NavLink = styled(Link)`

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
      <Header />
      <div className="dbContainer">
          {/* <NavBar /> */}
          <SideBar />
          <AuthProvider>
            <Switch> 
              <PrivateRoute exact path="/" component={NewRecord} />
              <PrivateRoute exact path="/UserPractice" component={Problems} />
              <PrivateRoute exact path="/newRecord" component={NewRecord} />
              <PrivateRoute exact path="/analyzeError" component={ErrorAnalysis} />
              <PrivateRoute exact path="/benchmark" component={Benchmark} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
            </Switch>
          </AuthProvider>
      </div>
      

          </Router>
      </>
  )
}
