"use client";
import { styled } from "@/stitches.config";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

const CardWrap = styled(motion.div, {
  position: "absolute",
  top: 0,
  img: {
    width: 100,
    height: "auto",
    m: "auto",
  },
  variants: {
    focus: {
      true: { border: "3px solid $highlight", zIndex: 3, opacity: 1 },
      false: {},
    },
  },
  zIndex: 1,
  br: 24,
  opacity: 0.8,
  bc: "#424242",
  px: "$4",
  py: "$6",
  maxWidth: 365,
  height: 450,
  // display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  ".package-title": { fontWeight: "bold", fontSize: "$4", mt: "$6", mb: "$4" },
  ".package-text": { fontSize: "$1", textAlign: "start" },
});
interface ICard {
  title: string;
  img: StaticImageData;
  text: string;
  center?: number;
  index?: number;
}
const orbitMap = {
  0: { r: 1, l: 4 },
  1: { r: 2, l: 0 },
  2: { r: 3, l: 1 },
  3: { r: 4, l: 2 },
  4: { r: 0, l: 3 },
};
const orbit = {
  0: { x: 0, y: 336 },
  1: { x: 460, y: 250 },
  2: { x: 230, y: 60 },
  3: { x: -230, y: 60 },
  4: { x: -460, y: 250 },
};
const _orbitPlus = {
  0: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 },
  1: { 1: 0, 2: 1, 3: 2, 4: 3, 0: 4 },
  2: { 2: 0, 3: 1, 4: 2, 0: 3, 1: 4 },
  3: { 3: 0, 4: 1, 0: 2, 1: 3, 2: 4 },
  4: { 4: 0, 0: 1, 1: 2, 2: 3, 3: 4 },
};
const Card = ({ title, img, text, index = 0, center }: ICard) => {
  console.log(index, center);
  return (
    <CardWrap
      animate={orbit[_orbitPlus[center][index]]}
      variants={orbit}
      initial={orbit[index]}
      focus={index == center}
    >
      <Image src={img} alt="" />
      <div className="package-title">{title}</div>
      <div
        className="package-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </CardWrap>
  );
};
// const CardM = styled(motion.div, { position: "absolute", top: 0 });
const Wrap = styled("div", {
  position: "relative",
  width: 1280,
  m: "auto",
  height: 822,
  ".orbit": {
    width: "100%",
    height: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:after": {
      content: "",
      position: "absolute",
      bottom: 18,
      width: "80%",
      height: "50%",
      border: "1px solid white",
      borderRadius: "50%",
      zIndex: 0,
    },
  },
  ".arrow-wrap": { height: "5%", display: "flex", justifyContent: "center" },
});
interface IProps {
  data: ICard[];
}
const Carousel = (props: IProps) => {
  const [centerItem, setCenterItem] = useState(0);

  const handleLeft = () => {
    setCenterItem((prev) => orbitMap[prev].l);
  };
  const handleRight = () => {
    setCenterItem((prev) => orbitMap[prev].r);
  };

  return (
    <Wrap>
      <motion.div className="orbit" variants={orbit}>
        {props.data.map((i, indx) => {
          return (
            <Card
              title={i.title}
              text={i.text}
              img={i.img}
              key={indx}
              center={centerItem}
              index={indx}
            />
          );
        })}
      </motion.div>
      <div className="arrow-wrap">
        <div onClick={handleLeft}>left</div>
        <div onClick={handleRight}>right</div>
      </div>
    </Wrap>
  );
};

export default Carousel;
