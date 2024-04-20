/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Landing } from "./pages/Landing.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { CountContext } from "../context.jsx";

const LazyLoad = React.lazy(() => import("./components/LazyLoad.jsx"));
const LazyLoad2 = React.lazy(() => import("./components/LazyLoad2.jsx"));

// * Prop Drilling
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}
function Count({ count, setCount }) {
  return (
    <>
      <CountRender />
      <Buttons setCount={setCount} />
    </>
  );
}

function CountRender() {
  const count = useContext(CountContext);
  return <>{count}</>;
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

// * Routing & lazyLoad
function App2() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
          <Route
            path="/lazyload"
            element={
              <Suspense fallback={"....loading"}>
                <LazyLoad />{" "}
              </Suspense>
            }
          />
          <Route
            path="/lazyload2"
            element={
              <Suspense fallback={"...Loading"}>
                <LazyLoad2 />
              </Suspense>
            }
          />
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
      <button onClick={() => navigate("/lazyload2")}>LazyLoad2</button>
    </div>
  );
}
// ! Client side routing : We dont need to get back tehe HTML and JS bundler we can do all manipulations with that one file came at the start
// * TO be able to do that we should not use the DOM or more preciecely - "window.location.href = "/dashboard";" to change the routes
// * Better way to do, and by doing so we wont see the hard reloading
// * We can implemenet Client side Routing via "useNavigate()" Hook🧭
// * One thing to remember when using the useRouter you can not use the useNavigate outside the BrowserRouter component
// * Lazy load only show what need to be shown - incase have 20 pages instead of loading all the topages at the go, it would be better to load incrementally
// * When we use Lazy load on multiple elements we face an issue called "component suspended while responding to synchronous input"
// * So we use a Suspense API to wrap out lazy loaded elements or components

// ! Prop Drilling
// * Drilling down the props
// * Basically we move prop to the Least commen parent when multiple comp access it
// * By doing so we are creating a problem for ourselves like even though in few components in middle might not need new components but we stil pass them through them.
// * This makes the code extreamly hard to read and complex.
// * chill there is a way to fix it "Context Api"

// ! Context Api's
// * With this we can give prop Rinnegan "teleportation" to other componenets
// * At first, create a context
// * Wrap anyone that want to use the teleported value inside a provider
// * Use it inside the componenets u need

export default App;
