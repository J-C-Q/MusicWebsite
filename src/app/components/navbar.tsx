"use client";
import React, { useState, useEffect } from "react";
import Navcontent from "./navcontent";
export default function Navbar() {
  const [transparentBackground, setTransparentBackground] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100; // Change 100 to the amount of scrolling you need
      if (show) {
        setTransparentBackground(false);
      } else {
        setTransparentBackground(true);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        transparentBackground
          ? "w-full h-16 flex flex-row gap-10 justify-end px-10 fixed top-0 z-20 transition-all ease-in-out duration-0"
          : " w-full bg-black h-16 flex flex-row gap-10 justify-end px-10 fixed top-0 z-20 transition-all ease-in-out duration-700"
      }
    >
      <Navcontent />
    </div>
  );
}
