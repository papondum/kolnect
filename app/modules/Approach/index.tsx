import { styled } from "@/stitches.config";
import Text from "@/app/components/text";
import Image from "next/image";
import approachImg from "@/app/assets/BG/Pic_Kolnect2.png";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "$basebg",
  display: "flex",
  alignItems: "center",
  gap: 46,
  maxWidth: 1304,
  px: 32,
  margin: "0 auto",
  ".title": {
    mb: 50,
    h3: { fontSize: "$7", mb: "$3", span: { color: "$primary" } },
    ".subtitle": {
      fontSize: "$4",
    },
  },
  p: "$6",
  ".box": {
    flex: 1,
    img: { height: "auto", m: "auto" },
    "@maxlg": {
      mb: 50,
    },
  },
  "@maxlg": {
    display: "block",
    px: 114,
  },
  "@maxsm": {
    px: 16,
  },
  ".list-box": {
    border: "1px solid $hightlight",
    p: "$4",
    br: 8,
    fontSize: "$3",
    display: "flex",
    alignItems: "center",
    gap: "$4",
    my: "$7",
    span: {
      alignItems: "center",
      justifyContent: "center",
      bc: "$hightlight",
      width: 52,
      height: 52,
      br: "50%",
      display: "flex",
    },
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap id="approach">
      <div className="box">
        <Text className="title">
          <h3>
            Our <span>Approach</span>
          </h3>
          <div className="subtitle">Professional Procedure</div>
        </Text>
        <div>
          <div className="list-box">
            <span>1</span>Pick the right KOLs with strategy-drive
          </div>
          <div className="list-box">
            <span>2</span>Choose the right platform of each audiences
          </div>
          <div className="list-box">
            <span>3</span>Connect with the right message
          </div>
        </div>
      </div>
      <div className="box">
        <Image src={approachImg} alt="approach img" />
      </div>
    </Wrap>
  );
};

export default View;
