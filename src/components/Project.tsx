import { ProjectCard } from "@/app/types";
import { FiGithub } from "react-icons/fi";

const languageColors: { [key: string]: string } = {
  javascript: "bg-yellow-300 text-gray-700",
  typescript: "bg-blue-300 text-gray-700",
  python: "bg-blue-500 text-white",
  rust: "bg-orange-700 text-white",
  assembly: "bg-gray-700 text-white",
  "c++": "bg-blue-800 text-white",
};

export default function Project({ project }: { project: ProjectCard }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <div className="flex items-center justify-between mb-2">
        <a href={project.url} className="font-bold text-lg hover:underline">
          {project.name}
        </a>
        <a
          href={project.url}
          className="inline-block text-gray-700 hover:text-gray-900"
        >
          <FiGithub className="inline" color="gray" size={20} />
        </a>
      </div>
      <div className="flex flex-wrap mb-2">
        {project.languages.map((language, index) => (
          <span
            key={index}
            className={`inline-block rounded px-2 py-1 text-xs font-semibold mr-2 mb-2 ${
              languageColors[language] || "bg-gray-200 text-gray-700"
            }`}
          >
            {language}
          </span>
        ))}
      </div>
      <p className="text-[#999898] text-sm">{project.desc}</p>
    </div>
  );
}
