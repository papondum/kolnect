import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "orange",
  maxWidth: 1440,
  p: "$3",
  display: "grid",
  gridTemplate: "1fr 1fr 1fr / 1fr 1fr 1fr",
  "@maxlg": {
    gridTemplate: "1fr 1fr / 1fr 1fr",
  },
  "@maxsm": {
    gridTemplate: "1fr  / 1fr",
  },
  ".box": {
    textAlign: "center",
    p: "$3",
  },
});
const View = ({}: IProps) => {
  //TODO: Chart dynamic easy config value
  return (
    <Wrap>
      <div>Title Platform data</div>
      <div className="box">Graph1</div>
      <div className="box">Graph2</div>
      <div className="box">GraphStat</div>
      <div className="box">Graph4</div>
      <div className="box">Graph5</div>
    </Wrap>
  );
};

export default View;
