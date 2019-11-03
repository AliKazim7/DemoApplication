import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import routes from '../routes'
// import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Main from "../containers/Main";

export default class App extends React.Component{
  render(){
    return(
      <Main />
    )
  }
}
