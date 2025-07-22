"use client";

import Header from "@/app//header/page";
// import NavBar from "./components/NavBar";
import LangNghe from "./lang-nghe/page";
// import NgoMonModel from "./components/NgoMon";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <LangNghe />
      {/* <NgoMonModel /> */}
    </main>
  );
}
