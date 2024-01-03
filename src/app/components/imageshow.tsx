"use client";
import Image from "next/image";
import image1 from "../../../public/images/imageshow/Bild1.webp";
import image2 from "../../../public/images/imageshow/Bild2.webp";
import image3 from "../../../public/images/imageshow/Bild3.webp";
import image4 from "../../../public/images/imageshow/Bild4.webp";
import image5 from "../../../public/images/imageshow/Bild5.webp";
import image6 from "../../../public/images/imageshow/Bild6.webp";
import image7 from "../../../public/images/imageshow/Bild7.webp";
import image8 from "../../../public/images/imageshow/Bild8.webp";
import image9 from "../../../public/images/imageshow/Bild9.webp";
import { useEffect, useRef, useState } from "react";

export default function ImageShow() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [maximize, setMaximizse] = useState(false);
  let images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  images = images.concat(images);

  const handleMaximize = () => {
    setMaximizse(!maximize);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        let newScrollLeft = scrollRef.current.scrollLeft;
        if (!maximize) {
          newScrollLeft += 1;
        }
        if (
          newScrollLeft >=
          (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) * 0.56
        ) {
          newScrollLeft = 0;
        }
        if (!maximize) {
          scrollRef.current.scrollLeft = newScrollLeft;
        }
      }
    }, 40); // Adjust scrolling speed by changing the interval time

    return () => clearInterval(interval);
  }, [maximize]);

  return (
    <div
      ref={scrollRef}
      className={
        "flex flex-row gap-2 bg-black overflow-scroll scrollbar-hide  w-[100vw]  " +
        (maximize
          ? "fixed top-0 h-[100vh] items-center snap-mandatory snap-x z-20"
          : "relative mt-20 h-[30vh] gradient-mask-r-90-d")
      }
      onClick={handleMaximize}
    >
      {images.map((image, index) => (
        <Image
          src={image}
          alt="image"
          className={
            "rounded-xl  object-cover relative " +
            (maximize ? "h-auto w-[100vw] snap-center" : "h-[30vh] w-fit")
          }
          placeholder="blur"
          key={index}
        />
      ))}
    </div>
  );
}
