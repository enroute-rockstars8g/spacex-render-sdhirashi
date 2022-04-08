import React, { ChangeEvent, FC, useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {getLaunches, getRockets} from "./Services/Spacex/service";
import {Launches} from "./Components/SpaceX/component";

function App() {

  useEffect(()=>{
    getLaunches();
    getRockets();
  },[]);



  return (
    <div className="App">
      
      <p>Prueba</p>

      <Launches/>

    </div>
  );
}

export default App;
