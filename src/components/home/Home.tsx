import { Suspense } from "react";
import styles from "@/styles/home.module.css";
import { getLastFM } from "@/Actions";

export default async function Home() {
  const data = await getLastFM();
  console.log(data);

  return (
    <section className={`${styles.outer}`}>
      <div className="place-content-center">
        <Suspense
          fallback={
            <div className="text-[#afafaf] text-center">loading...</div>
          }
        >
          {/* <SpotifyWidget simple /> */}
        </Suspense>
      </div>
      <div
        className={`text-right max-w-50 ${styles.gradient} place-content-center`}
      ></div>
    </section>
  );
}
