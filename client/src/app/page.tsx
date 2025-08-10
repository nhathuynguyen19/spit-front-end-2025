import Header from "@/app//header/page";
import LangNghe from "./lang-nghe/page";
import FestivalInfo from "./festival-info/page";
import Footer from "./footer/page";
import AmThuc from "./am-thuc/page";

export default function Home() {
  return (
    <main className="w-full overflow-hidden h-full">
      <Header />
      <LangNghe />
      <AmThuc />
      <FestivalInfo />
      <Footer />
    </main>
  );
}
