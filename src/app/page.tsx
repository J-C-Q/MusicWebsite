import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MusicPlayer from "./components/musicplayer";
import { AudioPlayerProvider } from "./components/audioplayercontext";
import Footer from "./components/footer";
import { Suspense } from "react";
import LoadingScaleton from "./components/loadingmusic";
export default function Home() {
  return (
    <>
      <main className="">
        <Navbar />
        <Hero />
        <AudioPlayerProvider>
          <div className="flex gap-10 flex-wrap justify-center items-center m-10">
            <Suspense fallback={<LoadingScaleton />}>
              <MusicPlayer title="There's You" />
            </Suspense>
            <MusicPlayer title="Lay With Me" />
            <MusicPlayer title="Change of Character" />
            <MusicPlayer title="I Do" />
          </div>
        </AudioPlayerProvider>
        <div className=" text-4xl px-20 bg-gradient-to-t from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
          <span className="text-4xl">&quot;</span>When I was 15, I moved away
          from home to chase my child&shy;hood dream of be&shy;com&shy;ing a pop
          star. Be&shy;fore I turned 21 I lived in Lon&shy;don, Los
          An&shy;ge&shy;les and Boston to write / record / per&shy;form my
          songs. Long dis&shy;tance re&shy;la&shy;tion&shy;ships that turned
          in&shy;to heart&shy;breaks shaped my teenage years. My mu&shy;sic
          com&shy;bines ev&shy;ery stage of falling in love that in&shy;cludes
          dis&shy;tance. Cre&shy;at&shy;ing an orig&shy;i&shy;nal sound
          in&shy;spired by Olivia Ro&shy;dri&shy;go & The1975. I pro&shy;duced
          my first 4 sin&shy;gles in Los An&shy;ge&shy;les which quick&shy;ly
          gained their grip on the Ger&shy;man mu&shy;sic mar&shy;ket.
          Earn&shy;ing love from high-pro&shy;file fans in&shy;clud&shy;ing Zac
          Poor, Fran&shy;cis Karel, Thomas Gottschalk and two time Gram&shy;my
          win&shy;ning artist Shea Rose.{" "}
          <span className="text-4xl">&quot;</span>
        </div>
      </main>
      <Footer />
    </>
  );
}
