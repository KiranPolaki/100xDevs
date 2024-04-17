import { useState } from "react";

/* eslint-disable no-unused-vars */
function Input() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <form>
        <h1>Add all the values</h1>
        <input placeholder="Name..."></input>
        <input placeholder="Tell me about you..."></input>
      </form>
    </>
  );
}
export { Input };
