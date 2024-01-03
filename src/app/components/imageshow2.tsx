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
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ImageShow2() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    Autoplay(),
  ]);
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
  let sizes = [20, 20, 20, 20, 10, 20, 20, 20, 20];
  return (
    <div className="overflow-hidden h-96" ref={emblaRef}>
      <div className="flex gap-2">
        {images.map((image, index) => (
          <div
            className={`min-w-0 flex-[0_0_${sizes[index]}%] flex-[0_0_15%]`}
            key={index}
          >
            <Image
              src={image}
              alt="image"
              sizes="100"
              className="w-full h-96 object-cover rounded-xl"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
