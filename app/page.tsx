import Image from "next/image";

import HeaderNav from "@/modules/HeaderNav";
import Banner from "@/modules/Banner";
import SubBanner from "@/modules/SubBanner";
import Approach from "@/modules/Approach";
import WorkingPhase from "@/modules/WorkingPhase";
import PlatformData from "@/modules/PlatformData";
import Credential from "@/modules/Credential";
import Clients from "@/modules/Clients";
import Trending from "@/modules/Trending";
import Packages from "@/modules/Packages";
import Contact from "@/modules/Contact";

import Footer from "@/modules/Footer";

import { styled, getCssText } from "@/stitches.config";
const Main = styled("main", {
  m: 0,
  bc: "$basebg",
  width: "100%",
  height: "100dvh",
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
