import { Suspense } from "react";
import SpotifyWidget from "./SpotifyWidget";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <section className={`${styles.outer} min-h-screen`}>
        <div className="place-content-center">
          <Suspense
            fallback={
              <div className="text-[#afafaf] text-center">loading...</div>
            }
          >
            <SpotifyWidget />
          </Suspense>
        </div>
      <div
        className={`text-right max-w-50 ${styles.gradient} place-content-center`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit
        repellat quas, amet cupiditate repudiandae cum dolor eligendi aspernatur
        ad quidem doloribus harum perspiciatis, ratione hic soluta vero neque
        libero!
      </div>
    </section>
  );
}
