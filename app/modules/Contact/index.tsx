import { styled } from "@/stitches.config";
import Text from "@/app/components/text";
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
    <Wrap id="contact">
      <Text>Contact</Text>
      <div>Box</div>
    </Wrap>
  );
};

export default View;
