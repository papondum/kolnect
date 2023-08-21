import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  p: "$6",
  textAlign: "center",
});
const View = ({}: IProps) => {
  return (
    <Wrap id="packages">
      <div>title Package</div>
      <div>
        <div>card1</div>
        <div>card1</div>
        <div>card1</div>
        <div>card1</div>
        <div>card1</div>
      </div>
    </Wrap>
  );
};

export default View;
