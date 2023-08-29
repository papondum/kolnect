import { styled } from "@/stitches.config";
import Text from "@/app/components/text";
import Image from "next/image";
import contacticon from "@/app/assets/Icon_Ourcontact.png";
import Email from "@/app/assets/footer/email.svg";
import Phone from "@/app/assets/footer/phone.svg";
import greenimgglow from "@/app/assets/Rectangle-green.png";
import pinkimgglow from "@/app/assets/Rectangle-pink.png";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
  mobile: string;
  email: string;
}
const Wrap = styled("div", {
  bc: "$basebg",
  display: "flex",
  p: "$6",
  justifyContent: "center",
  gap: "$4",
  mt: 122,
  mb: 111,
  position: "relative",
  "@maxlg": {
    my: 100,
  },
  "@maxsm": {
    display: "block",
    textAlign: "center",
  },
  ".overlay-right": {
    position: "absolute",
    right: 0,
    height: "112%",
    width: "auto",
    "@maxsm": { display: "none" },
  },
  ".overlay-left": {
    position: "absolute",
    left: 0,
    top: 0,
    height: "112%",
    width: "auto",
    "@maxsm": { display: "none" },
  },
  ".box": {
    flex: 1,
    margin: "auto",
    ".inner-box": {
      maxWidth: 400,
      marginLeft: "auto",
      textAlign: "start",
      ".subtitle": {
        fontSize: "$4",
      },
      "@maxlg": { mx: "auto" },
    },
  },
  ".title": {
    h3: {
      fontSize: "$7",
      span: { color: "$primary" },
    },
    mb: 40,
  },
  ".contact": {
    br: 24,
    border: "1px solid #9F9F9F",
    p: 40,
    maxWidth: 370,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    "@maxlg": { margin: "auto" },
    img: { maxWidth: 80, height: "auto" },
    ".detail": {
      gap: 10,
      "@maxlg": { textAlign: "start" },
      ".phonemail-wrap": { display: "flex", gap: "$3", mb: 10 },
    },
    ".title-wrap": {
      display: "flex",
      gap: 24,
      alignItems: "center",
      ".text": { fontSize: "$4" },
    },
  },
});
const View = ({ email, mobile }: IProps) => {
  return (
    <Wrap id="contact">
      <Image className="overlay-right" alt="" src={greenimgglow} />
      <Image className="overlay-left" alt="" src={pinkimgglow} />
      <div className="box title">
        <Text className="inner-box">
          <h3>
            Our <span>Contact</span>
          </h3>
          <p className="subtitle">Become a customer</p>
        </Text>
      </div>
      <div className="box">
        <div className="contact">
          <div className="title-wrap">
            <div>
              <Image src={contacticon} alt="" />
            </div>
            <div className="text">Sales team</div>
          </div>
          <div className="detail">
            <div className="phonemail-wrap">
              <Image src={Phone} alt="phone" /> {mobile}
            </div>
            <div className="phonemail-wrap">
              <Image src={Email} alt="email" /> {email}
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default View;
