import SpotifyWidget from "@/app/components/SpotifyWidget";
import { Suspense } from "react";
import styles from "@/app/styles/page.module.css";

export default function Home() {
  return (
    <main className={"grid place-content-center min-h-screen " + styles.outer}>
      <Suspense fallback={<div className="text-white">loading...</div>}>
        <SpotifyWidget />
      </Suspense>
    </main>
  );
}
