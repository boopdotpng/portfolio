import { IoLocationOutline } from "react-icons/io5";
import LastFM from "@/components/LastFM";
import { Suspense } from "react";

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
          <Suspense fallback={<div>...</div>}>
            <LastFM />
          </Suspense>
        </div>
      </section>

      <section className="w-1/2 mt-4">
        <h2> projects </h2>
      </section>
    </main>
  );
}
