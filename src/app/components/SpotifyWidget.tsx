import { getSpotifyPlayer } from "@/app/Actions";
import ProgressBar from "./ProgressBar";
import styles from "./spotify.module.css";

interface SpotifyProgress {
  progrss_ms: number;
  duration_ms: number;
}

export default async function SpotifyWidget() {
  let data = await getSpotifyPlayer();
  data.song = data.song.toLowerCase();
  data.artist = data.artist.toLowerCase();
  data.album = data.album.toLowerCase();

  // max artists: 2
  let artists = data.artist.split(", ");
  if (artists.length > 2) {
    data.artist = artists[0] + ", " + artists[1];
  }

  return (
    <div className="flex flex-col p-4 bg-gray-800 text-white rounded-md max-w-120 min-w-80">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-xs">listening to spotify</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify"
          className="w-5 h-5"
        />
      </div>
      <div className="flex items-start mb-2">
        <img src={data.cover} alt="Album Cover" className="w-16 h-16 mr-4" />
        <div>
          <div className="font-semibold">{data.song}</div>
          <div className="text-sm">by {data.artist} </div>
          <div className="text-xs text-gray-400">on {data.album}</div>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <ProgressBar
          progress_ms={data.progress_ms}
          duration_ms={3 * 60 * 1000}
        />
      </div>
      <button className="flex items-center justify-center bg-purple-700 hover:bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify Logo"
          className="w-4 h-4 mr-2"
        />
        play on spotify
      </button>
    </div>
  );
}
