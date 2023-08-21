import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "blue",
  display: "flex",
  p: "$6",
  ".box": { flex: 1, justifyContent: "center", textAlign: "center" },
  "@maxlg": {
    display: "block",
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap>
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
    </Wrap>
  );
};

export default View;
