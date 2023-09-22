import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Main from "./pages/Main";
import Callback from "./pages/Callback";
import SelectIntro from "./pages/SelectIntro";
import Login from "./pages/Login";
import Parents from "./pages/Parents";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/Intro" element={<SelectIntro/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/parents" element={<Parents/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
