"use client";
import React, { useState, useEffect, useRef } from "react";
import { useAudioPlayerContext } from "./audioplayercontext";
import Image from "next/image";
type Song = {
  title: string;
};
export default function AudioPlayer(song: Song) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { playingAudio, setPlayingAudio } = useAudioPlayerContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSliderPosition, setCurrentSliderPosition] = useState(0);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (playingAudio !== song.title && playingAudio !== null) {
        // Pause the currently playing audio
        audioRef.current.pause();
      }

      if (audioRef.current.paused) {
        audioRef.current.play();
        setPlayingAudio(song.title); // Set this player as the currently playing one
      } else {
        audioRef.current.pause();
        setPlayingAudio(null);
      }
    }
  };

  // Pause this player if another player starts playing
  useEffect(() => {
    if (audioRef.current) {
      if (playingAudio !== song.title && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    }
  }, [playingAudio, song.title]);

  // Update isPlaying state when audio plays or pauses
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const onPlay = () => setIsPlaying(true);
      const onPause = () => setIsPlaying(false);

      audio.addEventListener("play", onPlay);
      audio.addEventListener("pause", onPause);

      return () => {
        audio.removeEventListener("play", onPlay);
        audio.removeEventListener("pause", onPause);
      };
    }
  }, []);

  // Update current time
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const onTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
        setCurrentSliderPosition(audio.currentTime / audio.duration);
      };

      audio.addEventListener("timeupdate", onTimeUpdate);

      return () => {
        audio.removeEventListener("timeupdate", onTimeUpdate);
      };
    }
  }, []);

  // Change position
  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = e.target.value;
      audioRef.current.currentTime =
        Number(newTime) * audioRef.current.duration;
      setCurrentTime(Number(newTime) * audioRef.current.duration);
    }
  };

  // Set the duration
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener("loadedmetadata", setAudioData);

      return () => {
        audio.removeEventListener("loadedmetadata", setAudioData);
      };
    }
  }, []);

  return (
    <div className="grid grid-rows-1 grid-cols-[100px_400px]">
      <audio
        ref={audioRef}
        src={"/music/" + song.title + ".m4a"}
        preload="metadata"
      />
      <button
        onClick={togglePlayPause}
        className="text-5xl row-start-1 row-end-1 col-start-1 col-end-1"
      >
        {isPlaying ? (
          <Image
            src={"/images/pause.webp"}
            alt="pause"
            width="90"
            height="90"
            className="p-0.5"
          />
        ) : (
          <Image
            src={"/images/play.webp"}
            alt="play"
            width="90"
            height="90"
            className="p-0.5"
          />
        )}
      </button>
      <input
        type="range"
        value={currentSliderPosition}
        step="0.001"
        min="0"
        max="1"
        onInput={onSliderChange}
        className="w-full cursor-pointer h-[100px] row-start-1 row-end-1 col-start-2 col-end-2 opacity-10"
      />
    </div>
  );
}
