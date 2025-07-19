"use client";

import Header from "@/app//header/page";
import NavBar from "./components/NavBar";
import LangNghe from "./lang-nghe/page";

export default function Home() {
  return (
    <main className="sw-full w-full h-[200vh] justify-center overflow-hiden box-border">
      <Header />
      <LangNghe />
    </main>
  );
}
