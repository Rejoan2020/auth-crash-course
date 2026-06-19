'use client';
import { useState } from "react";
import Link from "next/link";
import { doSignInWithGithub, doSignInWithGoogle } from "@/app/actions";
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <form
          className="flex flex-col items-center justify-center w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >Login
          </button>
        </form>
        <button
          className="px-4 py-2 my-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={doSignInWithGoogle}
        >
          Sign in with Google
        </button>
        <button
          className="px-4 py-2 my-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={doSignInWithGithub}
        >
          Sign in with Github
        </button>
      </div>
    </>
  );
}
