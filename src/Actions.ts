"use server";
import { SpotifyPlayer } from "@/app/types";

export async function getSpotifyPlayer() {
  const req = await fetch(
    "https://prominent-color.vercel.app/api/getplayer?user=0",
    { next: { revalidate: 100 } }
  );
  const json = await req.json();

  console.log(json);

  return json as SpotifyPlayer;
}
