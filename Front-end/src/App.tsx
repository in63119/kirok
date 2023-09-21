import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Main from "./pages/Main";
import Callback from "./pages/Callback";
import SelectIntro from "./pages/SelectIntro";
import Institution from "./pages/Institution";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/Intro" element={<SelectIntro />} />
        <Route path="/institution" element={<Institution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
