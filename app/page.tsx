// import Image from "next/image";
import BirthdayDeco from "./components/Home/birthday_deco";
import Explore from "./components/Home/explore";
import HeroSlider from "./components/Home/HeroSlider";

export default function Home() {
  return (
        <main>
          <HeroSlider />
          <Explore />
          <BirthdayDeco />
        </main>
  );
}
