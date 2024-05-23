import SpotifyWidget from "@/app/components/SpotifyWidget";
import { getSpotifyPlayer } from "@/app/Actions";
import { Suspense } from "react";
import styles from "@/app/styles/page.module.css";

export default async function Home() {
  const data = await getSpotifyPlayer();

  return (
    <main className={"grid place-content-center min-h-screen " + styles.outer}>
      <div className={`place-content-center`}>
        <Suspense fallback={<div className="text-[#afafaf]">loading...</div>}>
          <SpotifyWidget {...data} />
        </Suspense>
      </div>
      <div className={`text-right max-w-50 ${styles.gradient}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit
        repellat quas, amet cupiditate repudiandae cum dolor eligendi aspernatur
        ad quidem doloribus harum perspiciatis, ratione hic soluta vero neque
        libero!
      </div>
    </main>
  );
}
