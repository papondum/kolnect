import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "green",
  p: "$6",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  ".box-value": {
    display: "flex",
    "@maxlg": {
      display: "grid",
      gridTemplate: "1fr 1fr/1fr 1fr",
    },
    "@maxsm": {
      gridTemplate: "1fr /1fr",
    },
  },
});
const View = ({}: IProps) => {
  //TODO: animate number running when scroll
  return (
    <Wrap id="credential">
      <div>Credential Title</div>
      <div className="box-value">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </Wrap>
  );
};

export default View;
