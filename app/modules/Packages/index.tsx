"use client";
import { styled } from "@/stitches.config";
import Image, { StaticImageData } from "next/image";
import Carousel from "@/app/components/carousel";
import PinkGlow from "@/app/assets/Rectangle.png";
interface ICard {
  title: string;
  img: StaticImageData;
  text: string;
}
interface IProps {
  data: ICard[];
}
const Wrap = styled("div", {
  // p: "$6",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  ".center-img": {
    position: "absolute",
    width: "40%",
    height: "auto",
    bottom: "-13%",
    left: "29%",
  },
  h3: {
    fontSize: "$7",
    "@maxlg": {
      fontSize: "$5",
    },
    "@maxsm": {
      fontSize: "$1",
    },
    span: {
      color: "$primary",
    },
  },
  ".bg": {
    display: "flex",
    justifyContent: "center",
    img: {
      position: "absolute",
      bottom: "-125px",
      transform: "rotate(-110deg)",
    },
  },
});
const View = ({ data = [] }: IProps) => {
  return (
    <Wrap id="packages">
      <Image className="center-img" src={PinkGlow} alt="pink-glow" />
      <h3>
        Our <span>Packages</span>
      </h3>
      <div>
        <Carousel data={data} />
      </div>
    </Wrap>
  );
};

export default View;
