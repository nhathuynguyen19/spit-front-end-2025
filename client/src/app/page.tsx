"use client";

import Header from "@/components/Header";
import dynamic from "next/dynamic";

const NgoMonModel = dynamic(() => import("@/components/NgoMon"), {
  ssr: false,
  loading: () => <p>Loading 3D...</p>,
});

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <NgoMonModel />
    </main>
  );
}
