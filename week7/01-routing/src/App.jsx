/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
const Lazyload = React.lazy(() => import("./components/LazyLoad.jsx"));

// * Routing
function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
          <Route path="/lazyload" element={<Lazyload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <button onClick={() => navigate("/")}>LandingPage</button>
      <button onClick={() => navigate("/dashboard")}>DashBoard</button>
      <button onClick={() => navigate("/lazyload")}>LazyLoad</button>
    </div>
  );
}
// ! Client side routing : We dont need to get back tehe HTML and JS bundler we can do all manipulations with that one file came at the start
// * TO be able to do that we should not use the DOM or more preciecely - "window.location.href = "/dashboard";" to change the routes
// * Better way to do, and by doing so we wont see the hard reloading
// * We can implemenet Client side Routing via "useNavigate()" Hook🧭
// * One thing to remember when using the useRouter you can not use the useNavigate outside the BrowserRouter component
export default App;
