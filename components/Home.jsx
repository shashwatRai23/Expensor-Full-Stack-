"use client";

import { useEffect } from "react";
import myanimation2 from "@/public/assets/animation2.json";
import lottie from "lottie-web";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    return () => {
      lottie.loadAnimation({
        container: document.querySelector("#animation"),
        animationData: myanimation2,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    };
  }, []);

  return (
    <div className="flex px-5 items-center home">
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="heading">
          The{" "}
          <span className="text-violet-700 underline decoration-solid">
            Expense Tracker
            <br />
          </span>{" "}
          that works for you
        </h1>
        <p className="teat-gray-300">Track all expenses here...</p>
        <Link
          href={"/login"}
          className="mt-5 black_btn  text-center font-bold signin"
        >
          Get Started {`->`}
        </Link>
      </div>
      <div className="flex-1" id="animation"></div>
    </div>
  );
};

export default Home;
