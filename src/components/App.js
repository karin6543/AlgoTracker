import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import NewRecord from './NewRecord'
import ErrorAnalysis from './ErrorAnalysis'
import Benchmark from './Benchmark'
import Google from './Google'


function App() {
  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div >
        <Router>
     
          <AuthProvider>
          <Dashboard />
            <Switch>
            
              <PrivateRoute exact path="/" component={NewRecord} />
              <PrivateRoute exact path="/newRecord" component={NewRecord} />
              <PrivateRoute exact path="/analyzeError" component={ErrorAnalysis} />
              <PrivateRoute exact path="/benchmark" component={Benchmark} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/google" component={Google} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
   
  )
}

export default App
