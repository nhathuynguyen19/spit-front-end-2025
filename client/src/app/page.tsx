"use client";

import Header from "@/app//header/page";
// import dynamic from "next/dynamic";
// import Button from "./components/Button";
import NavBar from "./components/NavBar";
import NgheThuat from "./nghe-thuat/page";
// import AnimatedText from "@/app/components/SolganFade";

// const NgoMonModel = dynamic(() => import("./components/NgoMon"), {
//   ssr: false,
//   loading: () => <p>Loading 3D...</p>,
// });

export default function Home() {
  return (
    <main className="sw-full h-[200vh] justify-center overflow-hiden">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <Button /> */}
      {/* <NgoMonModel /> */}
      {/* <img src="/images/tuong-truoc-ngo-mon.png" alt="" /> */}

      {/* <NavBar /> */}
      {/* <Header /> */}
      <NgheThuat />
    </main>
  );
}
