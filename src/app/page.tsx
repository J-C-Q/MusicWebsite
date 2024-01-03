import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MusicPlayer from "./components/musicplayer";
import { AudioPlayerProvider } from "./components/audioplayercontext";
import Footer from "./components/footer";
import { Suspense } from "react";
import LoadingScaleton from "./components/loadingmusic";

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <main className="rounded-b-xl">
        <Navbar />
        <Hero />
        <AudioPlayerProvider>
          <div className="flex flex-wrap gap-10 justify-evenly mx-10 py-12 max-h-[120vw] overflow-y-scroll snap-mandatory snap-y sm:max-h-auto scrollbar-hide sm:gradient-mask-b-90-d scroll-smooth">
            <MusicPlayer title="There's You" color="#783038" />
            <MusicPlayer title="Lay With Me" color="#183050" />
            <MusicPlayer title="Change of Character" color="#C83858" />
            <MusicPlayer title="I Do" color="#984808" />
          </div>
        </AudioPlayerProvider>
        <div className=" text-md sm:text-4xl px-5 sm:px-20 bg-gradient-to-b from-[#ffffff] to-[#302c2a] inline-block text-transparent bg-clip-text font-bold">
          <FaQuoteRight className="text-white mt-10" />
          <p>
            When I was 15, I moved away from home to chase my child&shy;hood
            dream of be&shy;com&shy;ing a pop star. Be&shy;fore I turned 21 I
            lived in Lon&shy;don, Los An&shy;ge&shy;les and Boston to write /
            record / per&shy;form my songs. Long dis&shy;tance
            re&shy;la&shy;tion&shy;ships that turned in&shy;to heart&shy;breaks
            shaped my teenage years. My mu&shy;sic com&shy;bines ev&shy;ery
            stage of falling in love that in&shy;cludes dis&shy;tance.
            Cre&shy;at&shy;ing an orig&shy;i&shy;nal sound in&shy;spired by
            Olivia Ro&shy;dri&shy;go & The1975. I pro&shy;duced my first 4
            sin&shy;gles in Los An&shy;ge&shy;les which quick&shy;ly gained
            their grip on the Ger&shy;man mu&shy;sic mar&shy;ket. Earn&shy;ing
            love from high-pro&shy;file fans in&shy;clud&shy;ing Zac Poor,
            Fran&shy;cis Karel, Thomas Gottschalk and two time Gram&shy;my
            win&shy;ning artist Shea Rose.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
