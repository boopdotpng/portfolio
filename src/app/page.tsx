import { getSpotifyPlayer } from "@/Actions";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";
import Intro from "@/components/intro/Intro";

export default async function Main() {
  const data = await getSpotifyPlayer();

  return (
    <main className={`bg-[#121212] p-[0.75rem] g-[2rem] text-[#afafaf]`}>
      <Home />
      <Intro />
      <Projects />
    </main>
  );
}
