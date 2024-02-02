"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { useState } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  return (
    <nav className="flex justify-between mb-3 w-full p-3 items-center text-white bg-neutral-900	">
      <div>
        <Link
          href="/"
          className="logo underline text-violet-500 flex items-center gap-1 text-xl font-bold"
        >
          ＥＸＰＥＮＳＯＲ
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="mobileNav">
        <Button className="rounded-full text-violet-500 mobileBtn" onClick={() => setActive((prevState) => !prevState)}>
          <MenuIcon className="text-violet-500" />
        </Button>
        {active && (
          <div className="flex flex-col gap-3 container">
            {!session && (
              <Link href={"/login"} className="black_btn">
                Sign In
              </Link>
            )}
            {session && (
              <button className="black_btn" onClick={() => signOut()}>
                Sign Out
              </button>
            )}
            {session && (
              <Link
                href={"/addexpense"}
                className="flex gap-2 items-center btn"
              >
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
          </div>
        )}
      </div>

      {/* Desktop Navigation */}

      <div className="flex gap-3 items-center justify-center nav">
        {!session && (
          <Link href={"/login"} className="black_btn">
            Sign In
          </Link>
        )}
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
