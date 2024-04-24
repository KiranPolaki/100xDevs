/* eslint-disable react/prop-types */
import { useState } from "react";

/* eslint-disable no-unused-vars */
function Input({ refetchData }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [interests, setInterests] = useState("");

  async function postData() {
    const res = await fetch("http://localhost:3000/card", {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
        linkedin,
        github,
        twitter,
        interests,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    refetchData();
    alert("Card Added");
  }

  return (
    <div className="input-container">
      <form>
        <input
          placeholder="Name..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Tell me about you..."
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <input
          placeholder="Linkedin"
          type="text"
          value={linkedin}
          onChange={(e) => {
            setLinkedin(e.target.value);
          }}
        ></input>
        <input
          placeholder="twitter"
          type="text"
          value={twitter}
          onChange={(e) => {
            setTwitter(e.target.value);
          }}
        ></input>
        <input
          placeholder="Github"
          type="text"
          value={github}
          onChange={(e) => {
            setGithub(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="interests"
          value={interests}
          onChange={(e) => {
            setInterests(e.target.value);
          }}
        ></input>
        <input type="button" value="submit" onClick={postData} />
      </form>
    </div>
  );
}
export { Input };
