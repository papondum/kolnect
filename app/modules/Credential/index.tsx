"use client";
import { styled } from "@/stitches.config";
import Text from "@/app/components/text";
import Countup from "@/app/components/countup";
interface IProps {
  data: IText[];
}
interface IText {
  label: string;
  value: number;
}
const Wrap = styled("div", {
  bc: "$bgbase",
  p: "$6",
  display: "flex",
  mb: 150,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  h3: {
    fontSize: "$7",
    mb: 50,
    textAlign: "center",
    span: {
      color: "$primary",
    },
  },
  ".box-value": {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1280,
    width: "100%",

    "@maxlg": {
      display: "grid",
      gridTemplate: "1fr 1fr/1fr 1fr",
      gap: 40,
      px: 128,
    },
    "@maxsm": {
      gridTemplate: "1fr /1fr",
    },
    ".item": {
      position: "relative",
      "&::after": {
        content: "",
        position: "absolute",
        top: 0,
        left: -52,
        height: "100%",
        width: 1,
        bc: "white",
      },

      "@maxsm": {
        "&::after": { height: 0 },
      },
      "&:first-child": { "&::after": { height: 0 } },
      "&:nth-child(odd)": { "@maxlg": { "&::after": { height: 0 } } },

      h4: {
        fontSize: "$7",
      },
      div: {
        fontSize: "$4",
        color: "$gray",
      },
    },
  },
});
const View = ({ data }: IProps) => {
  //TODO: animate number running when scroll
  return (
    <Wrap id="credential">
      <Text>
        <h3>
          Our <span>Credential</span>
        </h3>
      </Text>
      <div className="box-value">
        {data.map((i, ii) => (
          <Text key={ii} className="item">
            <h4>
              <Countup end={i.value} />+
            </h4>
            <div>{i.label}</div>
          </Text>
        ))}
      </div>
    </Wrap>
  );
};

export default View;
