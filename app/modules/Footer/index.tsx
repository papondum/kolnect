import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "$basebg",

  px: 100,
  py: "$10",
  borderTop: "1px solid $gray",
  ".content-wrapper": {
    display: "flex",
    py: "$10",
    justifyContent: "space-between",
    "@maxlg": {
      display: "block",
      textAlign: "center",
    },
  },
  ".inner-wrapper": {
    display: "flex",
    gap: 40,
    ".group": {
      width: 300,
    },
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
          <div className="group">
            <div>Join our team</div>
            <div>HR contact</div>
            <div>- 099-1235690</div>
            <div>- Sale@ideaslabs.com</div>
          </div>
          <div className="group">
            <div>Address</div>
            <div>
              IdeasLabs Co., Ltd. (HQ)The Offices at CentralWorld, 999/9Rama I
              Road, Pathumwan Bangkok 10330 Room OFMH2502 25th Floor
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">copyright</div>
    </Wrap>
  );
};

export default View;
