import React from 'react';
// import {useEffect, useState} from "react";

// import secretRouter from "./routes/secretRouter.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
// import { ReactDOM } from "react-router-dom";
// import * as ReactDOM from 'react-dom';
import CreateSecret from './components/CreateSecret.js';
// import ShowSecret from './components/ShowSecret.js';
 import Home from "./components/Home";
//const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route exact path='/' element={<ShowSecret />} /> */}
          {/* <Route path='/create-secret' element={<CreateSecret />} /> */}
          {/* <Route exact path='/' element={<ShowSecret />} /> */}
          <Route path="/" element={<CreateSecret />}/>


        </Routes>
    </BrowserRouter>
    // root.render(<CreateSecret />)
    // <Home />
    //<CreateSecret /> 
  );
}

export default App;
