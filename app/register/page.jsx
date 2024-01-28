"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const router=useRouter();
  const [currState, setCurrState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const initialState = currState;
  const handleChange = (e) => {
    setCurrState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!currState.username || !currState.email || !currState.password || !currState.confirmPassword){
      toast.error("Please fill all the fields");
      return;
    }
    if(currState.password !== currState.confirmPassword){
      toast.error("Passwords do not match");
      return;
    }
    try {

      const userexists=await fetch("/api/userexists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currState.email,
        }),
      });

      if(userexists.ok){
        toast.error("User already exists");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: currState.username,
          email: currState.email,
          password: currState.password,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setCurrState(initialState);
        toast.success("User Registration Successful");
        router.push("/login");
      } else {
        console.log("User Registration Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form_container">
      <h1 className="text-xl font-bold my-4">Register</h1>
      <form className="flex flex-col gap-3">
        <input
          className="inp"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="inp"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="inp"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          className="inp"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <button className="black_btn" onClick={handleSubmit}>
          Register
        </button>
      </form>
      <Link href="/login" className="text-sm mt-3 text-right">
        Already have an account ? <span className="underline">SignIn</span>
      </Link>
    </div>
  );
};

export default Register;
