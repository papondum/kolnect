import { styled } from "@/stitches.config";
import Image, { StaticImageData } from "next/image";
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
});
const View = ({ data = [] }: IProps) => {
  return (
    <Wrap id="packages">
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
