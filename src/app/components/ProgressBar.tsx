"use client";
import React, { useEffect, useState } from "react";

interface SpotifyProgress {
  progress_ms: number;
  duration_ms: number;
}

const ProgressBar: React.FC<SpotifyProgress> = ({
  progress_ms,
  duration_ms,
}) => {
  const [progress, setProgress] = useState(progress_ms);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= duration_ms) {
          clearInterval(interval);
          return duration_ms;
        }
        return prevProgress + 1000; // update every second
      });
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [duration_ms]);

  const progressPercentage = (progress / duration_ms) * 100;

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full h-1 bg-gray-600 rounded-full">
        <div
          className="absolute top-0 left-0 h-1 bg-white rounded-full"
          style={{
            width: `${progressPercentage}%`,
            transition: "width 0.1s linear",
          }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{formatTime(progress)}</span>
        <span>{formatTime(duration_ms)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
