"use client";

import { useEffect } from "react";
import myanimation from "@/public/assets/animation.json";
import lottie from "lottie-web";

const Home = () => {
  useEffect(() => {
    return () => {
      lottie.loadAnimation({
        container: document.querySelector("#animation"),
        animationData: myanimation,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    };
  }, []);

  return (
    <div className="flex gap-3 justify-around">
      <div className="flex flex-col gap-4 ">
        <h1 className="heading">
          The{" "}
          <span className="text-cyan-400 underline decoration-solid">
            Expense Tracker
            <br />
          </span>{" "}
          that works for you
        </h1>
        <p className="teat-gray-300">Track all expenses here...</p>
      </div>
      <div id="animation"></div>
    </div>
  );
};

export default Home;
