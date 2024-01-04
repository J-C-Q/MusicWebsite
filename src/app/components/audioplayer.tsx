"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { useAudioPlayerContext } from "./audioplayercontext";
import Image from "next/image";
import WaveSurfer from "wavesurfer.js";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";

type Song = {
  title: string;
  color: string;
  peaks?: (number[] | Float32Array)[] | undefined;
  duration?: number;
};
export default function AudioPlayer(song: Song) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const { playingAudio, setPlayingAudio } = useAudioPlayerContext();
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (waveformRef.current) {
      //   console.log(wavesurfer.current?.exportPeaks());
      //   console.log(wavesurfer.current?.getDuration());
      if (playingAudio !== song.title && playingAudio !== null) {
        // Pause the currently playing audio
        wavesurfer.current?.pause();
      }

      if (wavesurfer.current?.isPlaying()) {
        wavesurfer.current?.pause();
        setPlayingAudio(null);
      } else {
        wavesurfer.current?.play();
        setPlayingAudio(song.title); // Set this player as the currently playing one
      }
    }
  };

  // Pause this player if another player starts playing
  useEffect(() => {
    if (waveformRef.current) {
      if (playingAudio !== song.title && wavesurfer.current?.isPlaying) {
        wavesurfer.current.pause();
      }
    }
  }, [playingAudio, song.title]);

  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");
  //   canvas.height = 100;
  //   const gradient = context?.createLinearGradient(0, 0, 0, canvas.height);
  //   gradient?.addColorStop(0, song.color); // Start color
  //   gradient?.addColorStop(0, "black"); // End color

  // Update isPlaying state when audio plays or pauses
  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "gray",
        progressColor: song.color,
        cursorColor: "transparent",
        cursorWidth: 0,
        dragToSeek: true,
        barWidth: 0,
        barRadius: 3,
        normalize: false,
        fillParent: true,
        height: "auto",
        barHeight: 0.6,
        peaks: song.peaks,
        duration: song.duration,
      });

      wavesurfer.current.load("/music/" + song.title + ".m4a");
    }

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    wavesurfer.current?.on("play", onPlay);
    wavesurfer.current?.on("pause", onPause);

    return () => {
      wavesurfer.current?.destroy();
    };
  }, [song]);

  return (
    <div className="grid grid-rows-1 grid-cols-[1fr_3fr] pr-2 h-[100%]">
      <button
        onClick={togglePlayPause}
        className="row-start-1 row-end-1 col-start-1 col-end-1 relative text-5xl sm:text-7xl flex justify-center items-center text-black"
      >
        {isPlaying ? (
          //   <Image
          //     src="/images/pause.webp"
          //     alt="pause"
          //     fill={true}
          //     className="p-2"
          //   />
          <FaCirclePause />
        ) : (
          //   <Image
          //     src="/images/play.webp"
          //     alt="play"
          //     fill={true}
          //     className="p-2"
          //   />
          <FaCirclePlay />
        )}
      </button>
      <div className="row-start-1 row-end-1 col-start-2 col-end-2">
        <div ref={waveformRef} className="cursor-pointer h-[100%]" />
      </div>
    </div>
  );
}
