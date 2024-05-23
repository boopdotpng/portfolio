import { getSpotifyPlayer } from "@/Actions";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";

export default async function Main() {
  const data = await getSpotifyPlayer();

  return (
    <main className={`bg-[#121212] p-[0.75rem] g-[2rem] text-[#afafaf]`}>
      <Home />
      <Projects />
    </main>
  );
}
