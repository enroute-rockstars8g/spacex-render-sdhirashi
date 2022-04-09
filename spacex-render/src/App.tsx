import React, { ChangeEvent, FC, useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {getLaunches, getRockets} from "./Services/Spacex/service";
import {Launches, Rockets} from "./Components/SpaceX/component";
import headerimage from "../src/assets/header.webp";
import logoimage from "../src/assets/logo.jpg";

function App() {

  useEffect(()=>{
    getLaunches();
    getRockets();
  },[]);


  return (
    <div className="App">

      <nav className="navbar navbar-dark ">
        <div className="container d-flex justify-content-center">
            <img src={logoimage} alt="" width="180" height="40"/>
        </div>
      </nav>

      <div className="row  animate__animated animate__fadeInUp">
      <img className="img-responsive" src={headerimage} alt="" />
      </div>
      <br />
      <h1 className="headers">Rockets</h1>

      <Rockets/>

      <br />
      <br />
      <h1 className="headers">Launches</h1>

      <Launches/>

      <br />
      <footer className="text-center text-lg-start">
      <div className="text-center p-3">
      <p className="text-light"> © 2022 Copyright SpaceX</p>
      </div>
      </footer>

    </div>
  );
}

export default App;
