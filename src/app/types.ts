export interface SpotifyPlayer {
  song: string;
  album: string;
  is_playing: boolean;
  progress_ms: number;
  average_color: number[];
  cover: string;
  artist: string;
}
