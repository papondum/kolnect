import { styled } from "@/stitches.config";
import Text from "@/app/components/text";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "$basebg",
  display: "flex",
  p: "$6",
  justifyContent: "center",
  gap: "$4",
  "@maxsm": {
    display: "block",
    textAlign: "center",
  },
  ".title": {
    h3: {
      fontSize: "$7",
      span: { color: "$primary" },
    },
  },
  ".box": {
    flex: 1,
    ".inner-box": {
      maxWidth: 400,
      marginLeft: "auto",
      textAlign: "start",
    },
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap id="contact">
      <div className="box title">
        <Text className="inner-box">
          <h3>
            Our <span>Contact</span>
          </h3>
          <p>Become a customer</p>
        </Text>
      </div>
      <div className="box">Box</div>
    </Wrap>
  );
};

export default View;
