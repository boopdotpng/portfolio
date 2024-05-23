import ProgressBar from "./ProgressBar";
import { getSpotifyPlayer } from "@/Actions";

export default async function SpotifyWidget() {
  const data = await getSpotifyPlayer();

  const NoSongPlaying = () => (
    <div className="text-[#afafaf] text-center">
      i'm not currently listening to anything!
    </div>
  );

  if (!data.is_playing) {
    return <NoSongPlaying />;
  }
  const averageColor = `rgba(${data.colors.rgb.dominant_color[0]}, ${data.colors.rgb.dominant_color[1]}, ${data.colors.rgb.dominant_color[2]}, 0.6)`;
  return (
    <div
      className="flex flex-col p-4 rounded-md"
      style={{
        background: `linear-gradient(${averageColor}, #242526 80%)`,
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
        <img
          src={data.cover}
          alt="Album Cover"
          className="mr-2 w-16 h-16"
        />
        <div>
          <div className="font-semibold text-[0.85rem]">{data.song}</div>
          <div className="text-[0.85rem]">by {data.artist}</div>
          <div className="text-[0.85rem] text-gray-400">on {data.album}</div>
        </div>
      </div>
      <div className="flex items-center">
        <ProgressBar
          progress_ms={data.progress_ms}
          duration_ms={data.duration_ms}
        />
      </div>
    </div>
  );
}
