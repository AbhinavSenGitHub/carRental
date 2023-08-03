import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Login from "./Components/Login";
import Host from "./Components/Host";
import Myride from "./Components/Myride";

// css
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/signIn.scss"
import "./styles/host.scss"
import "./styles/myride.scss"
function App() {
  return (
    <Router>
    <Header />
      <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/signin" element= {<SignIn/>} /> 
      <Route path="/login" element= {<Login/>} />  
      <Route path="/host" element= {<Host/>} />  
      <Route path="/myride" element= {<Myride/>} />       
      </Routes>
    </Router>
  );
}

export default App;
