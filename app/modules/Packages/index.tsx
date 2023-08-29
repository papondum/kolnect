import { styled } from "@/stitches.config";
import Image, { StaticImageData } from "next/image";
import PinkGlow from "@/app/assets/particle/pink-glow.png";
import Carousel from "@/app/components/carousel";
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
  textAlign: "center",
  position: "relative",
  pb: 100,
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
      transform: "rotate(-110deg)"
    },
  },
});
const View = ({ data = [] }: IProps) => {
  return (
    <Wrap id="packages">
      <div className="bg">
        <Image src={PinkGlow} alt="pink-glow" />
      </div>
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
