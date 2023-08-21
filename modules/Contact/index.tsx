import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "purple",
  display: "flex",
  p: "$6",
  justifyContent: "center",
  gap: "$4",
  "@maxsm": {
    display: "block",
    textAlign: "center",
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap>
      <div>Contact</div>
      <div>Box</div>
    </Wrap>
  );
};

export default View;
