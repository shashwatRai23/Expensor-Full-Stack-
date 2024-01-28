"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex justify-between mb-3 w-full p-3 items-center">
      <Link href="/" className="logo">
        Logo
      </Link>
      <div className="flex justify-center">
        {session && <Link href={"/addexpense"}>Add Expense</Link>}
      </div>
      <div className="flex gap-3 items-center justify-center">
        {!session && <Link href={"/login"}>Sign In</Link>}
        {session && (
          <button className="black_btn" onClick={() => signOut()}>
            Sign Out
          </button>
        )}
        {session && (
          <Link href={"/profile"} className="border-solid border-2 border-black rounded-full">
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
