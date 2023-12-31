import Image from "next/image";
import heroImage from "../../../public/hero.jpg";

export default function Hero() {
  const text = "musician • songwriter • performer • producer";
  return (
    <div className="w-full h-[100svh] relative grid grid-rows-[5fr_1fr_1fr_3fr_1fr_1fr] grid-cols-[4fr_1fr_4fr] snap-center">
      <Image
        className="object-cover object-[10%_10%]  row-start-1 row-end-8 col-start-1 col-end-4"
        src={heroImage}
        fill={true}
        placeholder="blur"
        alt="hero"
      ></Image>
      <div className="absolute top-[30svh] left-0 w-full h-[70svh] xl:top-[70svh] xl:h-[30svh] bg-gradient-to-b from-transparent to-black z-10"></div>
      <h1
        className="text-[#fafafa]  font-bold 
        row-start-5 xl:row-start-2 
        row-end-6 xl:row-end-3 
      col-start-1  md:col-start-1 xl:col-start-3
      col-end-4  md:col-end-3 xl:col-end-4  
      text-4xl md:text-4xl xl:text-5xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl
      z-10 text-center
      bg-gradient-to-r from-[#ffffff] to-[#302c2a] inline-block text-transparent bg-clip-text
      whitespace-nowrap
      "
      >
        Jonathan Henrich
      </h1>
      <p
        className="text-[#fafafa]  font-bold 
        text-sm md:text-sm lg:text-md xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-3xl
        row-start-6 xl:row-start-3 
        row-end-7 xl:row-end-4 
        col-start-1 md:col-start-1 xl:col-start-3 
        col-end-4 md:col-end-3 xl:col-end-4  
        z-10 text-center
        bg-gradient-to-r from-[#ffffff] to-[#302c2a] inline-block text-transparent bg-clip-text
        whitespace-nowrap
        overflow-hidden
        h-fit
        leading-6"
      >
        {text.match(/./gu)!.map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>
    </div>
  );
}
