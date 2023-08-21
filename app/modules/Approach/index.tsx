import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "pink",
  display: "flex",
  p: "$6",
  ".box": {
    flex: 1,
  },
  "@maxlg": {
    display: "block",
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap id="approach">
      <div className="box">
        <div>title</div>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <div className="box">Img</div>
    </Wrap>
  );
};

export default View;
