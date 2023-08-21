import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  height: 550,
  bc: "red",
});
const View = ({}: IProps) => {
  return <Wrap>Banner</Wrap>;
};

export default View;
