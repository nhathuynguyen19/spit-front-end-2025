"use client";

<<<<<<< HEAD
import dynamic from "next/dynamic";
// import Button from "@/components/Button";
=======
import Header from "@/components/Header";
import dynamic from "next/dynamic";
>>>>>>> dev

const NgoMonModel = dynamic(() => import("@/components/NgoMon"), {
  ssr: false,
  loading: () => <p>Loading 3D...</p>,
});

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="w-full h-screen">
      <section id="hero">
        {/*<Button onClick={() => console.log('HELLO')}>*/}
        {/*      Hello*/}
        {/*</Button>*/}
      </section>

=======
    <main>
      {/* <Header /> */}
>>>>>>> dev
      <NgoMonModel />
    </main>
  );
}
