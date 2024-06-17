"use client";
import { signup } from "@/app/actions/user";
import axios from "axios";
import { useState } from "react";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col gap-6 border rounded-lg p-6">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="p-2"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2"
        />
        <button
          onClick={() => {
            // axios.post("http://localhost:3000/api/user", {
            //   email,
            //   password,
            // });
            signup(email, password);
          }}
          className="p-2 bg-black text-white"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
