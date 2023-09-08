import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Kakao from "./components/Kakao";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kakao" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
