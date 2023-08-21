import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  p: "$6",
  bc: "yellow",
  color: "black",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
});
const View = ({}: IProps) => {
  return <Wrap id="working-phase">Working</Wrap>;
};

export default View;
