import Image from "next/image";
import AudioPlayer from "./audioplayer";
type Song = {
  title: string;
};
export default function MusicPlayer(song: Song) {
  return (
    <div className=" text-white w-[500px] grid grid-rows-[500px_100px] grid-cols-1 hover:scale-[101%] transition-all ease-in-out duration-40">
      <div className="row-start-1 row-end-1 col-start-1 col-end-1 text-5xl text-center m-auto">
        {song.title}
      </div>
      <div className="row-start-1 row-end-1 col-start-1 col-end-1 relative">
        <Image
          src={"/images/" + song.title + ".webp"}
          alt={song.title + " cover"}
          fill={true}
          sizes="500px"
          className="object-cover rounded-t-xl"
        ></Image>
      </div>
      <div className="row-start-2 row-end-2 col-start-1 col-end-1 bg-gradient-to-b from-gray-300  via-gray-700 to-black">
        <AudioPlayer title={song.title} />
      </div>
    </div>
  );
}
