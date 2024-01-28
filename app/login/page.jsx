"use client"

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import {signIn, useSession} from "next-auth/react"
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router=useRouter();
  const {data:session}=useSession();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    try{
      const res=await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if(res.error){
        toast.error(res.error);
        return;
      }
      toast.success("Logged in successfully");
      router.replace("/");
    }catch(err){
      toast.error("Error logging in");
    }
  };

  if(session){
    router.replace("/");
  }

  return (
    <section className="form_container">
      <h1 className="text-xl font-bold my-4">Login</h1>
      <form className="flex flex-col gap-3">
        <input
          className="inp"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inp"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="black_btn" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <Link href="/register" className="text-sm mt-3 text-right">
        Don't have an account ? <span className="underline">Register</span>
      </Link>
    </section>
  );
};

export default Login;
