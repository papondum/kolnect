"use client";
import { styled } from "@/stitches.config";
import Text from "@/app/components/text";
import Image from "next/image";
import approachImg from "@/app/assets/BG/Pic_Kolnect2.png";
interface IProps {
  data: { content: string }[];
}
const Wrap = styled("div", {
  bc: "$basebg",
  display: "flex",
  alignItems: "center",
  gap: 46,
  maxWidth: 1304,
  px: 32,
  margin: "0 auto",
  mb: 150,
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
    border: "1px solid $highlight",
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
      bc: "$highlight",
      minWidth: 52,
      minHeight: 52,
      br: "50%",
      display: "flex",
    },
  },
});

const View = ({ data }: IProps) => {
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
          {data.map((i, ii) => (
            <Text key={ii} className="list-box">
              <span>{ii + 1}</span>
              {i.content}
            </Text>
          ))}
        </div>
      </div>
      <div className="box">
        <Image src={approachImg} alt="approach img" />
      </div>
    </Wrap>
  );
};

export default View;
