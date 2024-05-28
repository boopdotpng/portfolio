import { IoLocationOutline } from "react-icons/io5";
import LastFM from "@/components/LastFM";

export default async function Main() {
  return (
    <main className="bg-[#121212] p-[0.5rem] text-[#afafaf] main flex flex-col justify-center items-center min-h-screen">
      <section className="w-1/2 h-3/4 flex flex-col items-center">
        <h1 className="font-extrabold text-3xl">anuraag</h1>
        <div className="text-center flex gap-1 items-center ">
          charlotte, usa
          <span>
            <IoLocationOutline />
          </span>
        </div>
        <div>
          <LastFM />
        </div>
      </section>

      <section className="w-1/2 mt-4">
        <div className="flex justify-around mb-4">
          <button className="p-2 border-b-2 border-transparent hover:border-[#afafaf] focus:outline-none">
            projects
          </button>
          <button className="p-2 border-b-2 border-transparent hover:border-[#afafaf] focus:outline-none">
            about
          </button>
        </div>
        <div className="p-4 bg-[#1f1f1f] rounded-lg">{}</div>
      </section>
    </main>
  );
}
