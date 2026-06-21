'use client';
import { useState } from "react"; 
import { doSignInWithGithub, doSignInWithGoogle, credentialSignIn } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await credentialSignIn(email, password);
      if(response?.error) {
        console.error("Error signing in with credentials:", response.error);
      }
      else{
        router.push('/'); // Redirect to home page on successful login
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <form
          className="flex flex-col items-center justify-center w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="email"
            className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
