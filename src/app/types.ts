export interface Track {
  name: string;
  artist: string;
  currentlyPlaying?: boolean;
}

export interface ProjectCard {
  name: string;
  url: string;
  desc: string;
  languages: string[];
}
