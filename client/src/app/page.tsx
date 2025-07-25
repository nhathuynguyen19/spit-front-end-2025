import Header from "@/app//header/page";
import LangNghe from "./lang-nghe/page";
import FestivalInfo from "./festival-info/page";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <LangNghe />
      <FestivalInfo />
    </main>
  );
}
