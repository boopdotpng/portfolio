import { IoLocationOutline } from "react-icons/io5";
import LastFM from "@/components/LastFM";
import { Suspense } from "react";
import { ProjectCard } from "./types";
import Project from "@/components/Project";

const projects: ProjectCard[] = [
  {
    name: "intro to machine learning",
    url: "https://github.com/boopdotpng/machine-learning-hw-uncc",
    desc: "a repository of classic machine learning problems, along with reinforcement learning. includes a semi-decent usa geoguessr ai!",
    languages: ["python"],
  },
  {
    name: "senior design 2023-2024",
    url: "https://github.com/boopdotpng/senior-design-23to24",
    desc: "wrote embedded python software on a raspberry pi for a machine to rewarm vitrified organoids. it controlled heating, motors, a custom lcd menu, and more.",
    languages: ["python", "c++", "typescript"],
  },
  {
    name: "booplang",
    url: "https://github.com/boopdotpng/booplang",
    desc: "a work-in-progress compiler that allows you to write code in english??",
    languages: ["rust", "assembly"],
  },
];

export default async function Main() {
  return (
    <main className="bg-[#121212] p-[0.5rem] text-[#afafaf] flex flex-col md:justify-between lg:justify-between  items-center min-h-screen">
      <section className="md:w-1/2 sm:w-full flex flex-col items-center">
        <h1 className="font-extrabold text-3xl">anuraag</h1>
        <div className="text-center flex gap-1 items-center ">
          charlotte, usa
          <span>
            <IoLocationOutline />
          </span>
        </div>
        <div>
          <Suspense fallback={<div>...</div>}>
            <LastFM />
          </Suspense>
        </div>
      </section>

      <section className="md:w-3/4 sm:w-full grid sm:grid-cols-1 lg:grid-cols-2 place-items-center">
        {projects.map((p) => (
          <Project key={p.name} project={p} />
        ))}
      </section>
      <section className="w-3/4">
        <h3 className="text-lg font-bold mb-2 text-center">misc. links</h3>
        <ol className="flex space-x-4">
          <li>learn ml from scratch - all the way to gpu programming</li>
          <li></li>
          <li></li>
          <li>master rust programming</li>
        </ol>
      </section>

      <footer className="w-full text-center text-xs text-gray-500 mb-2">
        © 2024 anuraag. all rights reserved.&nbsp;
        <a href="mailto::anuraag.warudkar@gmail.com" className="underline">
          contact
        </a>
        &nbsp;|&nbsp;
        <a href="/anuraag_warudkar_resume.pdf" download className="underline">
          résumé
        </a>
        &nbsp;|&nbsp;
        <a href="https://twitter.com/boopdotpng" className="underline">
          twitter
        </a>
        &nbsp;|&nbsp;
        <a href="https://www.last.fm/user/boop_png" className="underline">
          lastfm
        </a>
      </footer>
    </main>
  );
}
