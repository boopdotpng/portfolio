export interface SpotifyPlayer {
  song: string;
  artist: string;
  album: string;
  cover: string;
  is_playing: boolean;
  progress_ms: number;
  duration_ms: number;
  explicit: boolean;
  track_url: string;
  colors: {
    rgb: {
      dominant_color: number[];
      complimentary_color: number[];
    };
    hex: {
      dominant_color: number[];
      complimentary_color: number[];
    };
  };
}

export interface Track {
  name: string;
  artist: string;
  currentlyPlaying?: boolean;
}
