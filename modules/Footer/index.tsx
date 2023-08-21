import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "red",

  px: 100,
  py: "$6",
  ".content-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    "@maxlg": {
      display: "block",
      textAlign: "center",
    },
  },
  ".inner-wrapper": {
    display: "flex",
    gap: 40,
    "@maxlg": {
      justifyContent: "space-between",
    },
    "@maxsm": {
      display: "block",
    },
  },
  ".copyright": {
    textAlign: "center",
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap>
      <div className="content-wrapper">
        <div>logo</div>
        <div className="inner-wrapper">
          <div>join ourteam</div>
          <div>address</div>
        </div>
      </div>
      <div className="copyright">copyright</div>
    </Wrap>
  );
};

export default View;
