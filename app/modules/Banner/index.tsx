"use client";
import { styled } from "@/stitches.config";
import Image from "next/image";
import Banner from "@/app/assets/banner/banner";
import PinkGlow from "@/app/assets/particle/pink-glow.png";
import Glow from "@/app/assets/particle/glow.png";
import Sparkle from "@/app/assets/particle/sparkle.svg";
// import BannerImg from "@/app/assets/banner/banner-img.svg"
import Text from "@/app/components/text";
interface IProps {}
const Wrap = styled("div", {
  minHeight: 642,
  display: "flex",
  "@maxlg": { minHeight: 372, mt: 50, mb: 100 },
  "@maxsm": { minHeight: 172 },

  ".post-wrap": {
    display: "flex",
    alignItems: "center",
    maxWidth: 1304,
    px: 32,
    position: "relative",
    zIndex: 2,
    margin: "0 auto",
    "@maxsm": {
      px: 16,
    },
  },
  h1: {
    color: "$primary",
    fontSize: "$7",
    mb: "$3",
    "@maxlg": {
      fontSize: "$6",
    },
    "@maxsm": {
      fontSize: "$4",
    },
  },
  h3: {
    fontSize: "$6",
    "@maxlg": {
      fontSize: "$4",
    },
    "@maxsm": {
      fontSize: "$1",
    },
    span: {
      color: "$highlight",
    },
  },
  ".layback": {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    ".right-img": {
      position: "absolute",
      left: 0,
      bottom: "28%",
      width: "10%",
      height: "auto",
      "@maxlg": { bottom: "48%" },
      "@maxsm": { bottom: "64%" },
    },
    ".left-img": {
      position: "absolute",
      right: 0,
      top: "16%",
      width: "32%",
      height: "auto",
      "@maxlg": { top: "15%" },
    },
  },
  ".item": {
    flex: 1,
    ".banner-img-wrapper": {
      svg: {
        width: "100%",
        height: "100%",
      },
    },
  },
  ".text-group": {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap>
      <div className="post-wrap">
        <div className="item text-group">
          <Text style={{ position: "relative" }}>
            <h1>KOLNECT</h1>
            <h3>
              is End-To-End{" "}
              <span>
                Strategic <br />
                Influencer
              </span>{" "}
              Marketing Services
            </h3>
            <Image
              src={Sparkle}
              alt="sparkle"
              style={{
                position: "absolute",
                left: "20%",
                bottom: "-45%",
                width: "11.24%",
                height: "auto",
              }}
            />
          </Text>
        </div>
        <div className="item">
          <div className="banner-img-wrapper">
            <Banner />
          </div>
        </div>
      </div>
      <div className="layback">
        <Image className="right-img" src={Glow} alt="glow" />
        <Image className="left-img" src={PinkGlow} alt="pink-glow" />
      </div>
    </Wrap>
  );
};

export default View;
