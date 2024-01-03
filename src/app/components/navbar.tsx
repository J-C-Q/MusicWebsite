"use client";
import React, { useState, useEffect } from "react";
import Navcontent from "./navcontent";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
export default function Navbar() {
  const [transparentBackground, setTransparentBackground] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    if (!showMenu) {
      setTransparentBackground(false);
    } else if (window.scrollY < 100) {
      setTransparentBackground(true);
    } else {
      setTransparentBackground(false);
    }
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (showMenu) {
        setShowMenu(false);
      }
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
  }, [showMenu]);
  return (
    <div
      className={
        "w-full flex px-5 text-4xl sm:text-sm sm:px-10 fixed top-0 z-20 transition-all ease-in-out shadow-[0_10px_20px_rgba(0,0,0,1)]" +
        (transparentBackground
          ? "bg-transparent duration-500"
          : " bg-black duration-500") +
        (showMenu
          ? " h-[100vh] flex-col items-center gap-10 justify-start pb-[80vh] pt-[20vh] "
          : " h-12 sm:h-16 flex-row gap-10 justify-end")
      }
    >
      <Navcontent showMenu={showMenu} />
      <button
        onClick={handleButtonClick}
        className="absolute right-3 top-2 block sm:hidden"
      >
        {showMenu ? (
          <IoClose className="text-[#A19F9E]" />
        ) : (
          <HiOutlineMenuAlt3 className="text-[#A19F9E]" />
        )}
      </button>
    </div>
  );
}
