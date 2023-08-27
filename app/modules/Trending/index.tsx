"use client";
import { styled } from "@/stitches.config";
import { StaticImageData } from "next/image";
import Card from "@/app/components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
  ".content-pre-wrapper": {
    overflow: "auto",
    // width: "100%",
    width: 1280,

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
            <SwiperSlide key={ii}>
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
