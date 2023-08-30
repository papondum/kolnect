import { styled } from "@/stitches.config";
import Image from "next/image";
import Logo from "@/app/assets/logo";

import Email from "@/app/assets/footer/email.svg";
import Phone from "@/app/assets/footer/phone.svg";
import FB from "@/app/assets/footer/fb.svg";
import IG from "@/app/assets/footer/ig.svg";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "$basebg",
  px: 100,
  pt: "$10",
  pb: "$4",
  boxShadow: "4px 0px 10px 0px rgba(255, 255, 255, 0.25)",
  "@maxsm": {
    px: "$10",
  },
  ".content-wrapper": {
    display: "flex",
    py: "$10",
    justifyContent: "space-between",
    "@maxlg": {
      display: "block",
      textAlign: "center",
    },
  },
  ".row": {
    display: "flex",
    img: {
      mr: "$4",
    },
  },
  ".social": {
    mt: "$4",
    justifyContent: "center",
    "@maxlg": {
      mb: "$13",
    },
  },
  ".inner-wrapper": {
    display: "flex",
    gap: 40,
    ".group": {
      width: 300,
      textAlign: "left",
      h5: {
        color: "$white",
        fontSize: "$4",
        fontWeight: 600,
        mb: "$4",
      },
      h6: {
        fontSize: "$2",
        fontWeight: 600,
        mb: "$3",
      },
      fontSize: "$1",
      color: "$gray",
      div: {
        mb: "$2",
        lineHeight: "24px",
      },
    },
    "@maxlg": {
      justifyContent: "space-between",
    },
    "@maxsm": {
      display: "block",
    },
  },
  ".copyright": {
    textAlign: "center",
    fontSize: "$1",
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap>
      <div className="content-wrapper">
        <div>
          <Logo />
          <div className="row social">
            <Image src={FB} alt="fb" />
            <Image src={IG} alt="ig" />
          </div>
        </div>
        <div className="inner-wrapper">
          <div className="group">
            <h5>Join our team</h5>
            <h6>HR contact</h6>
            <div className="row">
              <Image src={Phone} alt="phone" /> 099-1235690
            </div>
            <div className="row">
              <Image src={Email} alt="email" /> Sale@ideaslabs.com
            </div>
          </div>
          <div className="group">
            <h5>Address</h5>
            <div>
              IdeasLabs Co., Ltd. (HQ)The Offices at CentralWorld, 999/9Rama I
              Road, Pathumwan Bangkok 10330 Room OFMH2502 25th Floor
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright © 2020 by IdeasLabs.co</div>
    </Wrap>
  );
};

export default View;
