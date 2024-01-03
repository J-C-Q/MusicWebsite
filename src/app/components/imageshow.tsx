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
import { useEffect, useRef } from "react";

export default function ImageShow() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const images = [
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        let newScrollLeft = scrollRef.current.scrollLeft + 1;
        if (
          newScrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          newScrollLeft = 0;
        }
        scrollRef.current.scrollLeft = newScrollLeft;
      }
    }, 40); // Adjust scrolling speed by changing the interval time

    return () => clearInterval(interval);
  }, []);

  return (
    // Images in a flexbox
    <div
      ref={scrollRef}
      className="flex flex-row gap-2 mt-20 xl:w-[100vw] overflow-hidden scrollbar-hide gradient-mask-r-90-d h-fit"
    >
      {images.concat(images).map((image, index) => (
        <Image
          src={image}
          alt="image"
          className="rounded-xl h-[30vh] w-auto"
          placeholder="blur"
          key={index}
        />
      ))}
    </div>
  );
}
