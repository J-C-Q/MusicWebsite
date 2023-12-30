import React, { useEffect, useRef, useState, Suspense } from "react";
import WaveSurfer from "wavesurfer.js";

interface WaveformProps {
  url: string;
}

export default function Waveform(url: WaveformProps) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "gray",
        progressColor: "purple",
        cursorColor: "transparent",
        dragToSeek: true,
        barWidth: 2,
        barRadius: 3,
        normalize: true,
      });

      wavesurfer.current.load(url.url);
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    wavesurfer.current?.on("play", handlePlay);
    wavesurfer.current?.on("pause", handlePause);

    return () => {
      wavesurfer.current?.destroy();
    };
  }, [url]);

  const handlePlayPause = () => {
    wavesurfer.current?.playPause();
  };

  return (
    <div>
      <div ref={waveformRef} />
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}
