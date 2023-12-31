import Image from "next/image";
export default function Hero() {
  return (
    <div className="w-full h-screen relative overflow-hidden ">
      <Image
        className="object-cover object-[10%_10%]  "
        src="/hero.jpg"
        fill={true}
        alt="hero"
      ></Image>
      <div className="absolute top-[50vh] left-0 w-full h-[50vh] bg-gradient-to-b from-transparent to-black">
        <div className="w-full h-full flex flex-col justify-start items-end px-24">
          <h1 className="text-white text-md sm:text-8xl font-bold animate-text-reveal">
            Jonathan Henrich
          </h1>
          <p className="text-white text-2xl font-bold">
            musician • songwriter • performer • producer
          </p>
        </div>
      </div>
    </div>
  );
}
