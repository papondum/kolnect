import { styled } from "@/stitches.config";
import { Container } from "@/app/components/container";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  height: 72,
  position: "sticky",
  top: 0,
  bc: "black",
  p: "$3",
});
const View = ({}: IProps) => {
  return (
    <Wrap>
      <Container>Nav</Container>
    </Wrap>
  );
};

export default View;
