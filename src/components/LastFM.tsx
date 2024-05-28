import { getLastFM } from "@/Actions";
import { Track } from "@/app/types";

export default async function LastFM() {
  const data: Track = await getLastFM();

  return (
    <div>
      <p>
        {data.currentlyPlaying ? "currently listening to " : "last listened to"}
        <span className="font-semibold text-cyan-800">
          {data.currentlyPlaying
            ? `${data.name.toLowerCase()} by ${data.artist.toLowerCase()}`
            : ""}
        </span>
      </p>
    </div>
  );
}
