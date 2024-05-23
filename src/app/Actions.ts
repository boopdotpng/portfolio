"use server";
import { SpotifyPlayer } from "@/app/types";

export async function getSpotifyPlayer() {
  const req = await fetch(
    "https://spotify-now-playing-alpha.vercel.app/api/1",
    { cache: "no-store" },
  );
  const json = await req.json();

  return json as SpotifyPlayer;
}
