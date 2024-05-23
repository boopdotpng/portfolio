import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";

export default async function Main() {
  return (
    <main className={`bg-[#121212] p-[0.75rem] g-[2rem] ${styles.main} `}>
      <Home />
      <Projects />
    </main>
  );
}
