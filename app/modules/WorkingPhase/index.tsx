"use client";
import { styled } from "@/stitches.config";
import Image, { StaticImageData } from "next/image";
import imgbgleft from "@/app/assets/particle/section3.png";
import iconanswer from "@/app/assets/Icon_Working Phasing/answer 1.png";
import iconchecklist from "@/app/assets/Icon_Working Phasing/check-list 1.png";
import icondollar from "@/app/assets/Icon_Working Phasing/dollar 1.png";
import iconpaperplane from "@/app/assets/Icon_Working Phasing/paper-plane 1.png";
import iconrating from "@/app/assets/Icon_Working Phasing/rating-9 1.png";
import Sparkle from "@/app/assets/particle/sparkle.svg";
import Text from "@/app/components/text";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  p: "$6",
  bc: "$bgbase",
  color: "black",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  position: "relative",
  ".bg-partial": {
    position: "absolute",
    left: 0,
    width: "20%",
    height: "auto",
  },
  ".sparkle": {
    position: "absolute",
    right: "127px",
    top: "140px",
    "@maxsm": { display: "none" },
  },
  ".content-wrapper": {
    color: "$white",
    width: "100%",
    maxWidth: 1002,
    mb: 65,
    mt: 85,
    "@maxlg": { px: 113 },
    "@maxsm": { px: 24 },
    h3: {
      fontSize: "$7",
      mb: 50,
      span: {
        color: "$primary",
      },
    },
    ".content-step": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  img: {
    height: "auto",
  },
});
interface IStep {
  children: React.ReactNode;
  imgsrc: StaticImageData;
  first?: boolean;
}
const StepWrap = styled("div", {
  width: "10.811%",
  maxWidth: 80,
  ".icon-wrapper": {
    mb: 40,
  },
  img: {
    width: "100%",
    maxHeight: 80,
    height: "auto",
  },
  variants: {
    first: {
      true: {
        ".dot-step": {
          "&::after": { width: 0 },
        },
      },
      false: {},
    },
  },
  ".dot-step": {
    position: "relative",
    "&::after": {
      content: "",
      width: 230,
      "@maxlg": { width: "215%" },
      height: 3,
      bc: "$white",
      top: 3,
      right: "50%",
      // display: "flex",
      position: "absolute",
    },
    "&::before": {
      content: "",
      height: 10,
      width: 10,
      borderRadius: "50%",
      display: "block",
      bc: "$white",
      m: "auto",
      mb: 24,
    },
  },
});
const Step = ({ children, imgsrc, first = false }: IStep) => {
  return (
    <StepWrap first={first}>
      <div className="icon-wrapper">
        <Image src={imgsrc} alt="icon-step" />
      </div>
      <div className="dot-step" />
      <div>{children}</div>
    </StepWrap>
  );
};

const View = ({}: IProps) => {
  return (
    <Wrap id="working-phase">
      <div className="bg">
        <Image className="bg-partial" src={imgbgleft} alt="bg" />
        <Image className="sparkle" src={Sparkle} width="52" alt="sparkle" />
      </div>
      <Text className="content-wrapper">
        <h3>
          Our <span>Working Phasing</span>
        </h3>
        <div className="content-step">
          <Step first={true} imgsrc={iconanswer}>
            Inquiry{" "}
          </Step>
          <Step imgsrc={iconchecklist}>Planning</Step>
          <Step imgsrc={iconpaperplane}>Delivery brief</Step>
          <Step imgsrc={icondollar}>Execute </Step>
          <Step imgsrc={iconrating}>Measure</Step>
        </div>
      </Text>
    </Wrap>
  );
};

export default View;
