import Image from "next/image";

import HeaderNav from "@/app/modules/HeaderNav";
import Banner from "@/app/modules/Banner";
import SubBanner from "@/app/modules/SubBanner";
import Approach from "@/app/modules/Approach";
import WorkingPhase from "@/app/modules/WorkingPhase";
import PlatformData from "@/app/modules/PlatformData";
import Credential from "@/app/modules/Credential";
import Clients from "@/app/modules/Clients";
import Trending from "@/app/modules/Trending";
import Packages from "@/app/modules/Packages";
import Contact from "@/app/modules/Contact";

import Footer from "@/app/modules/Footer";

import { styled, getCssText } from "@/stitches.config";
const Main = styled("main", {
  m: 0,
  bc: "$basebg",
  width: "100%",
  height: "auto",
  color: "white",
});

export default function Home() {
  return (
    <>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <Main>
        <HeaderNav />
        <Banner />
        <SubBanner />
        <Approach />
        <WorkingPhase />
        <PlatformData />
        <Credential />
        <Clients />
        <Trending />
        <Packages />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}
