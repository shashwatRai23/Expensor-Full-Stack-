"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import lottie from "lottie-web";
import myanimation from "@/public/assets/animation5.json";
const Nav = () => {
  useEffect(() => {
    return () => {
      lottie.loadAnimation({
        container: document.querySelector("#logoAnimation"),
        animationData: myanimation,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    };
  }, []);
  const { data: session } = useSession();
  return (
    <nav className="flex justify-between mb-3 w-full p-3 items-center text-white bg-neutral-900	">
      <div>
        <Link href="/" className="logo text-violet-700 flex items-center gap-1 text-xl font-bold">
          <span id="logoAnimation"></span>
          <span>EXPENSOR</span>
        </Link>
      </div>
      <div className="flex gap-3 items-center justify-center">
        {!session && <Link href={"/login"} className="black_btn">Sign In</Link>}
        {session && (
          <button className="black_btn" onClick={() => signOut()}>
            Sign Out
          </button>
        )}
        {session && (
          <Link href={"/addexpense"} className="flex gap-2 items-center btn">
            <span>+</span>
            <span>Add Expenses</span>
          </Link>
        )}
        {session && (
          <Link href={"/monthlyanalysis"} className="btn">
            Monthly Analysis
          </Link>
        )}
        {session && (
          <Link
            href={"/profile"}
            className="border-solid border-2 border-black rounded-full"
          >
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </Link>
        )}
        {/* {session && <div>{session.user.email}</div>} */}
      </div>
    </nav>
  );
};

export default Nav;
