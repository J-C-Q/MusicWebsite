"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [transparentBackground, setTransparentBackground] = useState(true);
  window.onscroll = () => {
    if (window.scrollY > 10) {
      setTransparentBackground(false);
    } else {
      setTransparentBackground(true);
    }
  };
  return (
    <div
      className={
        transparentBackground
          ? "w-full h-16 flex flex-row gap-10 justify-end px-10 fixed top-0 z-20"
          : "w-full bg-black h-16 flex flex-row gap-10 justify-end px-10 fixed top-0 z-20"
      }
    >
      <Link
        href="https://www.instagram.com/jonathan.henrich/"
        className="text-white my-auto z-20"
      >
        <Image
          className="filter-invert"
          src="/instagram.png"
          width="16"
          height="16"
          alt="instagram"
        ></Image>
      </Link>
      <Link
        href="https://open.spotify.com/intl-de/artist/139HzhvBYPiCmliF0jkjEl?si=6MP4SqF6RVyyQqEpE7o9rw"
        className="text-black my-auto"
      >
        <Image src="/spotify.png" width="16" height="16" alt="spotify"></Image>
      </Link>
      <Link href="./" className="text-white my-auto">
        <span>HOME</span>
      </Link>
      <Link href="./" className="text-white my-auto">
        <span>MUSIC</span>
      </Link>
      <Link href="./" className="text-white  my-auto">
        <span>EPK</span>
      </Link>
    </div>
  );
}
