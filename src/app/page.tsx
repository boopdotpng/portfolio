import { IoLocationOutline } from "react-icons/io5";
import LastFM from "@/components/LastFM";
import { Suspense } from "react";
import { ProjectCard } from "./types";
import Project from "@/components/Project";

const projects: ProjectCard[] = [
  {
    name: "intro to machine learning",
    url: "https://github.com/boopdotpng/machine-learning-hw-uncc",
    desc: "a repository of classic machine learning problems, along with reinforcement learning.",
    languages: ["python"],
  },
  {
    name: "senior design 2023-2024",
    url: "https://github.com/boopdotpng/senior-design-23to24",
    desc: "my senior design project at uncc involved writing embedded code for a device that rewarms and vitrifies cell samples.",
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
    <main className="bg-[#121212] p-[0.5rem] text-[#afafaf] main flex flex-col justify-between items-center min-h-screen">
      <section className="w-1/2 h-3/4 flex flex-col items-center">
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

      <section className="w-3/4 mt-2 grid sm:grid-cols-1 lg:grid-cols-2 gap-2 place-items-center">
        {projects.map((p) => (
          <Project project={p} />
        ))}
      </section>
      <section>
        want to do: 
      </section>
      <footer className="w-full text-center text-xs text-gray-500 mt-4">
        © 2024 anuraag. all rights reserved.&nbsp;
        <a href="mailto::anuraag.warudkar@gmail.com" className="underline">
          contact
        </a>
        &nbsp;|&nbsp;
        <a href="mailto::anuraag.warudkar@gmail.com" className="underline">
          résumé
        </a>
      </footer>
    </main>
  );
}
