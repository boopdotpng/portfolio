import ProgressBar from "./ProgressBar";
import styles from "./spotify.module.css";
import { SpotifyPlayer } from "../types";

export default async function SpotifyWidget(data: SpotifyPlayer) {
  const averageColor = `rgba(${data.average_color[0]}, ${data.average_color[1]}, ${data.average_color[2]}, 0.6)`;

  return (
    <div
      className="flex flex-col p-4 rounded-md"
      style={{
        background: `linear-gradient(${averageColor}, #121212 80%)`,
        color: "#afafaf",
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-xs">
          currently listening to spotify
        </span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify"
          className="w-5 h-5"
        />
      </div>
      <div className="flex items-start mb-3">
        <img src={data.cover} alt="Album Cover" className="mr-2 w-16 h-16" />
        <div>
          <div className="font-semibold text-sm">{data.song}</div>
          <div className="text-sm">by {data.artist}</div>
          <div className="text-xs text-gray-400">on {data.album}</div>
        </div>
      </div>
      <div className="flex items-center">
        <ProgressBar
          progress_ms={data.progress_ms}
          duration_ms={3 * 60 * 1000}
        />
      </div>
    </div>
  );
}
