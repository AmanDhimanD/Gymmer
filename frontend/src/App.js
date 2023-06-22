import React from "react";
import UserForm from "../src/Components/UserForm";
import Success from "../src/Components/Success";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AlertData from "../src/Components/AlertData";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/alert" element={<AlertData />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
