import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
,
  document.getElementById("root")
)
