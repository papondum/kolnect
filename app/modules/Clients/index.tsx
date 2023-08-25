import { styled } from "@/stitches.config";
import Text from "@/app/components/text";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "brown",
  p: "$6",
  display: "flex",
  bc: "$basebg",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  h3: {
    fontSize: "$7",
    mb: 50,
    span: {
      color: "$primary",
    },
  },
  ".links-wrapper": {
    display: "flex",
    gap: 40,
    mb: 50,
    justifyContent: "center",
  },
});
const View = ({}: IProps) => {
  //TODO: clickable TBD
  return (
    <Wrap id="clients">
      <Text style={{ textAlign: "center" }}>
        <h3>
          Our <span>Clients</span>
        </h3>
      </Text>
      <Text className="links-wrapper">
        <a>For Agency</a>
        <a>For Brands</a>
        <a>For SMEs</a>
      </Text>
      <div>img set</div>
    </Wrap>
  );
};

export default View;
