"use client";

import dynamic from "next/dynamic";
import Button from "@/components/Button";

const NgoMonModel = dynamic(() => import("@/components/NgoMon"), {
  ssr: false,
  loading: () => <p>Loading 3D...</p>,
});

export default function Home() {
  return (
    <main className="w-full h-screen">
      <section id="hero">
        {/*<Button onClick={() => console.log('HELLO')}>*/}
        {/*      Hello*/}
        {/*</Button>*/}
      </section>

      <NgoMonModel />
    </main>
  );
}
