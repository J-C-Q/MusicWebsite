import Link from "next/link";
import Image from "next/image";
export default function Navcontent() {
  return (
    <>
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
    </>
  );
}
