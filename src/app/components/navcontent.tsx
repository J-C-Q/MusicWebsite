import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
export default function Navcontent() {
  return (
    <>
      <a
        href="https://www.instagram.com/jonathan.henrich/"
        className="text-white my-auto z-20 hidden sm:block"
        target="_blank"
      >
        <FaInstagram />
      </a>
      <a
        href="https://open.spotify.com/intl-de/artist/139HzhvBYPiCmliF0jkjEl?si=6MP4SqF6RVyyQqEpE7o9rw"
        className="text-white my-auto hidden sm:block"
        target="_blank"
      >
        <FaSpotify />
      </a>
      <Link href="./" className="text-white my-auto hidden sm:block">
        <span>HOME</span>
      </Link>
      <Link href="./" className="text-white my-auto hidden sm:block">
        <span>MUSIC</span>
      </Link>
      <Link href="./" className="text-white  my-auto hidden sm:block">
        <span>EPK</span>
      </Link>
    </>
  );
}
