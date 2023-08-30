"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@/stitches.config";
import Image from "next/image";
import Text from "@/app/components/text";
import { Pagination } from "swiper/modules";

import agencyImg1 from "@/app/assets/Icon_Clients/agency-1.png";
import agencyImg2 from "@/app/assets/Icon_Clients/agency-2.png";
import agencyImg3 from "@/app/assets/Icon_Clients/agency-3.png";
import agencyImg4 from "@/app/assets/Icon_Clients/agency-4.png";
import agencyImg5 from "@/app/assets/Icon_Clients/agency-5.png";
import brandImg1 from "@/app/assets/Icon_Clients/brand-1.png";
import brandImg2 from "@/app/assets/Icon_Clients/brand-2.png";
import brandImg3 from "@/app/assets/Icon_Clients/brand-3.png";
import brandImg4 from "@/app/assets/Icon_Clients/brand-4.png";
import brandImg5 from "@/app/assets/Icon_Clients/brand-5.png";
import brandImg6 from "@/app/assets/Icon_Clients/brand-6.png";
import brandImg7 from "@/app/assets/Icon_Clients/brand-7.png";
import smeImg1 from "@/app/assets/Icon_Clients/sme-1.png";
import smeImg2 from "@/app/assets/Icon_Clients/sme-2.png";
import smeImg3 from "@/app/assets/Icon_Clients/sme-3.png";
import smeImg4 from "@/app/assets/Icon_Clients/sme-4.png";
import smeImg5 from "@/app/assets/Icon_Clients/sme-5.png";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  p: "$6",
  display: "flex",
  bc: "$basebg",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  mb: 150,
  h3: {
    fontSize: "$7",
    mb: 50,
    span: {
      color: "$primary",
    },
  },
  ".links-wrapper": {
    display: "flex",
    gap: 40,
    mb: 50,
    justifyContent: "center",
    fontSize: "$3",
    a: { cursor: "pointer" },
    ".active": {
      color: "$highlight",
      fontWeight: 600,
      textDecoration: "underline",
    },
  },
  ".content-pre-wrapper": {
    overflow: "auto",
    // width: "100%",
    width: 1280,

    ".content-wrapper": {
      display: "flex",
      // width: 1280,
      gap: 72,
    },
    ".mySwiper>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ".swiper-pagination": {
      visibility: "hidden",
      position: "relative",
      mt: "$6",
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
});

const tabs = {
  agency: 0,
  brands: 1,
  smes: 2,
};

const data = [
  {
    img: [agencyImg1, agencyImg2, agencyImg3, agencyImg4, agencyImg5],
    key: "agency",
  },
  {
    img: [
      brandImg1,
      brandImg2,
      brandImg3,
      brandImg4,
      brandImg5,
      brandImg6,
      brandImg7,
    ],
    key: "brand",
  },
  { img: [smeImg1, smeImg2, smeImg3, smeImg4, smeImg5], key: "sme" },
];

const View = ({}: IProps) => {
  const [activeTab, setActiveTab] = useState(tabs.brands);
  //TODO: clickable TBD
  return (
    <Wrap id="clients">
      <Text style={{ textAlign: "center" }}>
        <h3>
          Our <span>Clients</span>
        </h3>
      </Text>
      <Text className="links-wrapper">
        <a
          className={activeTab === tabs.agency ? "active" : ""}
          onClick={() => setActiveTab(tabs.agency)}
        >
          For Agency
        </a>
        <a
          className={activeTab === tabs.brands ? "active" : ""}
          onClick={() => setActiveTab(tabs.brands)}
        >
          For Brands
        </a>
        <a
          className={activeTab === tabs.smes ? "active" : ""}
          onClick={() => setActiveTab(tabs.smes)}
        >
          For SMEs
        </a>
      </Text>
      <div className="content-pre-wrapper">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          centeredSlides={true}
          initialSlide={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data[activeTab].img.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width="100"
                src={item}
                alt={`${data[activeTab].key}-${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrap>
  );
};

export default View;
