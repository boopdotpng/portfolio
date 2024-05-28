import { getLastFM } from "@/Actions";
import { Track } from "@/app/types";
import { MdOutlineMusicNote } from "react-icons/md";

export default async function LastFM() {
  const data: Track = await getLastFM();
  console.log(data);

  return (
    <div>
      <p className="flex gap-1 items-center">
        {data.currentlyPlaying ? "now playing: " : "last played: "}
        <span className="font-semibold text-amber-700">
          {`${data.name.toLowerCase()} - ${data.artist.toLowerCase()}`}
        </span>
        <MdOutlineMusicNote />
      </p>
    </div>
  );
}
