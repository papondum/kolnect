"use client";
import { styled } from "@/stitches.config";
import { StaticImageData } from "next/image";
import Card from "@/app/components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import PinkGlow from "@/app/assets/particle/pink-glow.png";
import Glow from "@/app/assets/particle/green-glow.png";
import Sparkle from "@/app/assets/particle/sparkle.svg";
import "swiper/css";
import "swiper/css/pagination";
interface IProps {
  data: ITrending[];
}
interface ITrending {
  img: StaticImageData;
  title: string;
  text: string;
  center?: boolean;
}
const Wrap = styled("div", {
  bc: "$basebg",
  p: "$6",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  mb: 150,
  ".bg": {
    img: {
      position: "absolute",
    },
    ".glow": {
      left: 0,
      top: "70px"
    },
    ".sparkle-left": {
      left: "150px",
      top: "50px",
      transform: "rotate(-13.861deg)"
    },
    ".pink-glow": {
      right: 0,
      top: "30px",
      transform: "rotate(95deg)"
    },
    ".sparkle-right": {
      top: "100px",
      right: "50px",
      transform: "rotate(13.004deg)"
    }
  },
  ".content-pre-wrapper": {
    ".swiper": {
      height: 640,
      ".swiper-pagination": {
        visibility: "hidden",
        "@maxlg": {
          visibility: "visible",
        },
      },
      ".swiper-pagination-bullet-active": {
        background: "$highlight !important"
      },
      ".swiper-pagination-bullet": {
        background: "$white",
        opacity: 1
      }
    },
    overflow: "auto",
    // width: "100%",
    width: 1280,
    ".pord": { mr: "0 !important" },
    ".content-wrapper": {
      display: "flex",
      // width: 1280,
      gap: 72,
    },
  },
  ".card": {
    p: "$2",
    m: "$2",
  },
  h3: {
    mb: 8,
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
  ".subtitle": {
    fontSize: "$1",
    color: "$gray",
    mb: 40,
  },
});
const View = ({ data }: IProps) => {
  return (
    <Wrap id="trending">
      <div className="bg">
        <Image className="glow" src={Glow} width="350" alt="glow" />
        <Image className="sparkle-left" src={Sparkle} width="41" alt="sparkle-left" />
        <Image className="pink-glow" src={PinkGlow} width="387" alt="pink-glow" />
        <Image className="sparkle-right" src={Sparkle} width="41" alt="sparkle-right" />
      </div>
      <h3>
        Our <span>Trending</span> Issues
      </h3>
      <div className="subtitle">Created by KOLNECT</div>
      <div className="content-pre-wrapper">
        {/* <div className="content-wrapper"> */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          initialSlide={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((i, ii) => (
            <SwiperSlide className="pord" key={ii}>
              <Card img={i.img} title={i.title} text={i.text} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </Wrap>
  );
};

export default View;
