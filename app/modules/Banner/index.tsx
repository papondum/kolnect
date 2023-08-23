import { styled } from "@/stitches.config"
import Image from "next/image";
import Banner from "@/app/assets/banner/banner"
import PinkGlow from "@/app/assets/particle/pink-glow.png"
import Glow from "@/app/assets/particle/glow.png"
import Sparkle from "@/app/assets/particle/sparkle.svg"
// import BannerImg from "@/app/assets/banner/banner-img.svg"

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  height: 550,
  display: "flex",
  maxWidth: 1440,
  bc: "$basebg",
  margin: "0 auto",
  "h1": {
    color: "$primary",
    fontSize: "$7"
  },
  "h3": {
    fontSize: "$6",
    "span": {
      color: "$highlight"
    }
  }
});
const View = ({}: IProps) => {
  return <Wrap>
    <div style={{ padding: "80px" }}>
      <h1>KOLNECT</h1>
      <h3>
        is End-To-End <span>Strategic <br/>Influencer</span> Marketing Services
      </h3>
      <div style={{ display: "flex", position: "absolute", left: 0, marginTop: "-55px" }}>
        <Image src={Glow} alt="glow" />
        <Image src={Sparkle} alt="sparkle" style={{ margin: "80px 10px" }}/>
      </div>
    </div>
    <div>
      <Image src={PinkGlow} alt="pink-glow" style={{ position: "absolute", right: 0 }}/>
      <div style={{ position: "absolute" }}>
        {/* <Image src={BannerImg} alt="banner-img" /> */}
        <Banner />  
      </div>
    </div>
  </Wrap>
};

export default View;
