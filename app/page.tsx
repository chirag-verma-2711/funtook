// import Image from "next/image";
import BirthdayDeco from "./components/Home/birthday_deco";
import Explore from "./components/Home/explore";
import ImageSlider from "./components/imageslider/ImageSlider";


export default function Home() {
  return (
        <main>
          <ImageSlider/>
          <Explore />
          <BirthdayDeco />
        </main>
  );
}
