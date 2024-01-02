import Image from "next/image";
export default function Hero() {
  return (
    <div className="w-full h-screen relative grid grid-rows-[5fr_1fr_1fr_3fr_1fr_1fr] grid-cols-[4fr_1fr_4fr]">
      <Image
        className="object-cover object-[10%_10%]  row-start-1 row-end-8 col-start-1 col-end-4"
        src="/hero.jpg"
        fill={true}
        alt="hero"
      ></Image>
      <div className="absolute top-[70vh] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent to-black z-10"></div>
      <h1
        className="text-[#fafafa]  font-bold 
        row-start-5 xl:row-start-2 
        row-end-6 xl:row-end-3 
      col-start-1 md:col-start-1 xl:col-start-3 
      col-end-4 md:col-end-3   xl:col-end-4  
      text-5xl md:text-6xl xl:text-8xl 
      z-10 text-center"
      >
        Jonathan Henrich
      </h1>
      <p
        className="text-[#fafafa]  font-bold 
        text-xl md:text-2xl xl:text-4xl
        row-start-6 xl:row-start-3 
        row-end-7 xl:row-end-4 
        col-start-1 md:col-start-1 xl:col-start-3 
        col-end-4 md:col-end-3 xl:col-end-4  
        z-10 text-center"
      >
        musician • songwriter • performer • producer
      </p>
    </div>
  );
}
