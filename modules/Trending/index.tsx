import { styled } from "@/stitches.config";

interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  bc: "gray",
  p: "$6",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  ".content-wrapper": {
    display: "flex",
  },
  ".card": {
    p: "$2",
    m: "$2",
  },
});
const View = ({}: IProps) => {
  return (
    <Wrap>
      <div>TITLE Trending</div>
      <div className="content-wrapper">
        <div className="card">
          <div>img</div>
          <div>title</div>
          <div>Content</div>
        </div>
        <div className="card">
          <div>img</div>
          <div>title</div>
          <div>Content</div>
        </div>
        <div className="card">
          <div>img</div>
          <div>title</div>
          <div>Content</div>
        </div>
      </div>
    </Wrap>
  );
};

export default View;
