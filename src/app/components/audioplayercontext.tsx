"use client";
// AudioPlayerContext.js
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AudioPlayerContextType {
  playingAudio: string | null;
  setPlayingAudio: React.Dispatch<React.SetStateAction<string | null>>;
}

// Providing a default value that matches the type
const defaultContextValue: AudioPlayerContextType = {
  playingAudio: null,
  setPlayingAudio: () => {}, // a no-op function as a placeholder
};

const AudioPlayerContext =
  createContext<AudioPlayerContextType>(defaultContextValue);

export const useAudioPlayerContext = () => useContext(AudioPlayerContext);

interface AudioPlayerProviderProps {
  children: ReactNode;
}

export const AudioPlayerProvider = ({ children }: AudioPlayerProviderProps) => {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  return (
    <AudioPlayerContext.Provider value={{ playingAudio, setPlayingAudio }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
