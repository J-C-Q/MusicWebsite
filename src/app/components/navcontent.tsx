import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

interface Props {
  showMenu: boolean;
}
export default function Navcontent({ showMenu }: Props) {
  return (
    <>
      <a
        href="https://www.instagram.com/jonathan.henrich/"
        className={
          "text-[#A19F9E] my-auto sm:block" + (showMenu ? " block" : " hidden")
        }
        target="_blank"
      >
        <FaInstagram />
      </a>
      <a
        href="https://open.spotify.com/intl-de/artist/139HzhvBYPiCmliF0jkjEl?si=6MP4SqF6RVyyQqEpE7o9rw"
        className={
          "text-[#A19F9E] my-auto sm:block" + (showMenu ? " block" : " hidden")
        }
        target="_blank"
      >
        <FaSpotify />
      </a>
      <Link
        href="./"
        className={
          "text-[#A19F9E] my-auto sm:block" + (showMenu ? " block" : " hidden")
        }
      >
        <span>HOME</span>
      </Link>
      <Link
        href="./"
        className={
          "text-[#A19F9E] my-auto sm:block" + (showMenu ? " block" : " hidden")
        }
      >
        <span>MUSIC</span>
      </Link>
      <Link
        href="./"
        className={
          "text-[#A19F9E] my-auto sm:block" + (showMenu ? " block" : " hidden")
        }
      >
        <span>EPK</span>
      </Link>
    </>
  );
}
