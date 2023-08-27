"use client";
import React, { useState } from "react";
import Flickity from "react-flickity-component";
import trendingimg1 from "@/app/assets/Pic_Trending Issues/kol-1-03-02.jpg";
import trendingimg2 from "@/app/assets/Pic_Trending Issues/kol-1-04.jpg";
import trendingimg3 from "@/app/assets/Pic_Trending Issues/kol-1-03.jpg";
import Image, { StaticImageData } from "next/image";
import "flickity/css/flickity.css";
import { styled } from "@/stitches.config";
interface ICarousel {
  items: ICard[];
}
interface ICard {
  img: StaticImageData;
  title: string;
  text: string;
}
// const CWrap = styled("div", {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: "2rem",

//   ".carousel": {
//     position: "relative",
//     overflow: "hidden",
//     width: 300,
//     height: 200,
//   },

//   ".carousel-item": {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     bc: "#333",
//     color: "white",
//     fontSize: 24,
//   },
//   button: {
//     background: "none",
//     border: "none",
//     fontSize: 24,
//     cursor: "pointer",
//     my: 10,
//   },
// });
const CardWrap = styled("div", {
  img: { maxWidth: 368, height: "auto", br: 24 },
  ".card-title": { fontSize: "$3", maxWidth: 368, mt: 24, height: 60 },
  ".card-text": { fontSize: "$2", color: "$gray", maxWidth: 368 },
});
const Card = ({ img, title, text }: ICard) => (
  <CardWrap>
    <div>
      <Image src={img} alt="" />
    </div>
    <div className="card-title">{title}</div>
    <div className="card-text">{text}</div>
  </CardWrap>
);
const Carousel = ({ items }: ICarousel) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };
  const flickityOptions = {
    initialIndex: 2,
  };
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      // disableImagesLoaded={false} // default false
      // reloadOnUpdate // default false
      static // default false
    >
      <Image src={trendingimg1} />
      <Image src={trendingimg2} />
      <Image src={trendingimg3} />
      {/* {items.map((i, ii) => (
        <Card key={ii} img={i.img} title={i.title} text={i.text} />
      ))} */}
    </Flickity>
  );
};

export default Carousel;
