"use server";

export async function getSpotifyPlayer() {
  const req = await fetch(
    "https://prominent-color.vercel.app/api/getplayer?user=0",
    { cache: "no-store" },
  );
  // const json = await req.json();

  // return json as SpotifyPlayer;
}

export async function getLastFM() {
  const apiKey = "a0a067dccca9d8c169ca65f3f6713abc";
  const userName = "boop_png";
  const url = "http://ws.audioscrobbler.com/2.0/";
  const limit = 3;
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

    if (!response.ok || !data.recenttracks || !data.recenttracks.track) {
      console.error("Error fetching recent tracks:", response.statusText);
      return { name: "", artist: "", currentlyPlaying: false };
    }

    const tracks = data.recenttracks.track.map((track) => ({
      name: track.name,
      artist: track.artist["#text"],
      currentlyPlaying: track["@attr"] && track["@attr"].nowplaying === "true",
    }));

    const currentlyPlayingTrack = tracks.find(
      (track) => track.currentlyPlaying,
    );

    return currentlyPlayingTrack || { ...tracks[0], currentlyPlaying: false };
  } catch (error) {
    console.error("Error fetching recent tracks:", error);
    return { name: "", artist: "", currentlyPlaying: false };
  }
}
