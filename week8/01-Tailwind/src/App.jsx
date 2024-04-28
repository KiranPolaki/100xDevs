/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <>
      <RevenueCard title={"Amount pending"} amount={50000} orderCount={13} />
    </>
  );
}

export default App;
