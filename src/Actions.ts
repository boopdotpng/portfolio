"use server";

export async function getSpotifyPlayer() {
  const req = await fetch(
    "https://prominent-color.vercel.app/api/getplayer?user=0",
    { cache: "no-store" }
  );
  // const json = await req.json();

  // return json as SpotifyPlayer;
}

export async function getLastFM() {
  const apiKey = process.env.lastfm_key as string;
  const userName = process.env.lastfm_username as string;
  const url = "http://ws.audioscrobbler.com/2.0/";
  const limit = 3;
  const maxTitleLength = 20;
  const params = new URLSearchParams({
    method: "user.getrecenttracks",
    user: userName,
    api_key: apiKey,
    format: "json",
    limit: limit.toString(),
  });

  try {
    const response = await fetch(`${url}?${params}`, { cache: "no-store" });
    const data = await response.json();
    if (!response.ok) throw new Error(response.statusText);
    if (!data.recenttracks || !data.recenttracks.track)
      throw new Error("No tracks found");

    const tracks = data.recenttracks.track.map((track) => ({
      name: track.name.substring(0, maxTitleLength),
      artist: track.artist["#text"],
      currentlyPlaying:
        !!track["@attr"] && track["@attr"].nowplaying === "true",
    }));

    const currentlyPlayingTrack = tracks.find(
      (track) => track.currentlyPlaying
    );
    return currentlyPlayingTrack || tracks[0]; // returns the first track if no track is currently playing
  } catch (error) {
    console.error("Error fetching recent tracks:", error);
    return { name: "", artist: "", currentlyPlaying: false };
  }
}
