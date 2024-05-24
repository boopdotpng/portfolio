import { Suspense } from "react";
import SpotifyWidget from "./SpotifyWidget";
import styles from "@/styles/home.module.css";
import { getSpotifyPlayer } from "@/Actions";

export default async function Home() {
  const data = await getSpotifyPlayer();
  let textGrad;
  if (data.is_playing) {
    textGrad = {
      backgroundImage: `linear-gradient(${data.colors.hex.dominant_color}, #c0c4c4 80%)`,
    };
  } else {
    textGrad = {
      backgroundImage: `linear-gradient(lightblue, lightpink 80%)`,
    };
  }
  return (
    <section className={`${styles.outer}`}>
      <div className="place-content-center">
        <Suspense
          fallback={
            <div className="text-[#afafaf] text-center">loading...</div>
          }
        >
          <SpotifyWidget {...data} />
        </Suspense>
      </div>
      <div
        className={`text-right max-w-50 ${styles.gradient} place-content-center`}
        style={textGrad}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit
        repellat quas, amet cupiditate repudiandae cum dolor eligendi aspernatur
        ad quidem doloribus harum perspiciatis, ratione hic soluta vero neque
        libero!
      </div>
    </section>
  );
}
