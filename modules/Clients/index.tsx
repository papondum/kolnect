import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "brown",
  p: "$6",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});
const View = ({}: IProps) => {
  //TODO: clickable TBD
  return (
    <Wrap>
      <div>Title our clients</div>
      <div>
        <a>1</a>
        <a>2</a>
        <a>3</a>
      </div>
      <div>img set</div>
    </Wrap>
  );
};

export default View;
