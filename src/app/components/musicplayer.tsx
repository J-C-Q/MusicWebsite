import Image from "next/image";
import AudioPlayer from "./audioplayer";
type Song = {
  title: string;
  color: string;
};
export default function MusicPlayer(song: Song) {
  return (
    <div className=" text-white max-w-[400px] w-full grid grid-rows-[4fr_1fr] grid-cols-1 sm:hover:scale-[100%] transition-all ease-in-out duration-40 aspect-[4/5] relative snap-center snap-always">
      <div className="row-start-1 row-end-1 col-start-1 col-end-1 relative ">
        <Image
          src={"/images/" + song.title + ".webp"}
          alt={song.title + " cover"}
          fill={true}
          sizes="400px"
          className="object-cover rounded-t-lg aspect-square"
        ></Image>
      </div>
      <div className="row-start-2 row-end-2 col-start-1 col-end-3 bg-[#A19F9E] shadow-[inset_0_5px_10px_-5px_rgba(0,0,0,1)] rounded-b-lg relative">
        <AudioPlayer title={song.title} color={song.color} />
      </div>
    </div>
  );
}
