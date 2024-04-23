import { useState } from "react";

/* eslint-disable no-unused-vars */
function Input() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [interests, setInterests] = useState("");

  return (
    <div className="input-container">
      <form>
        <input placeholder="Name..." type="text"></input>
        <input placeholder="Tell me about you..." type="text"></input>
        <input placeholder="Linkedin" type="text"></input>
        <input placeholder="twitter" type="text"></input>
        <input placeholder="Github" type="text"></input>
        <input type="text" placeholder="interests"></input>
        <input placeholder="interests" type="text"></input>
        <input placeholder="interests" type="text"></input>
        <input type="button" value="submit" />
      </form>
    </div>
  );
}
export { Input };
