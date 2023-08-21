import { styled } from "@/stitches.config";
import { Container } from "@/app/components/container";
import ScrollLink from "@/app/components/scrolllink";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const Wrap = styled("div", {
  height: 72,
  position: "sticky",
  top: 0,
  bc: "black",
  p: "$3",
  ".dropdown": {
    nav: {
      display: "none",
    },

    "&:hover": {
      nav: {
        display: "block",
      },
    },
  },
  ".submenu": {
    left: 0,
    opacity: 0,
    position: "absolute",
    top: 35,
    visibility: "hidden",
    zIndex: 1,
    listStyle: "none",
  },
  "&:hover": {
    ".submenu": {
      opacity: 1,
      top: 40,
      visibility: "visible",
    },
    // "li:hover a ": {
    //   background: "#000000",
    // },
    "a:hover": {
      background: "#DF4B05",
    },
  },
  li: {
    float: "left",
    "list-style-type": "none",
    position: "relative",
    width: "auto",
  },
  a: {
    background: "#30A6E6",
    color: "#FFFFFF",
    display: "block",
    textAlign: "center",
    textDecoration: "none",
  },
  ".link-wrapper": {
    display: "flex",
    gap: "$3",
  },
});

const View = ({}: IProps) => {
  return (
    <Wrap>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <div>logo</div>
        <div className="link-wrapper">
          {/* <Link href="#">Why us?</Link> */}
          <li>
            <a href="#">Why us?</a>
            <ul className="submenu">
              <li>
                <ScrollLink href="#approach">our approach</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#working-phase">
                  our working phasing
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="#platform-data">our platform data</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#credential">our credential</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#clients">our clients</ScrollLink>
              </li>
            </ul>
          </li>
          <ScrollLink href="#trending">Our Trending issues</ScrollLink>
          <ScrollLink href="#packages">Our Packages</ScrollLink>
          <ScrollLink href="#contact">Our Contact</ScrollLink>
        </div>
      </Container>
    </Wrap>
  );
};

export default View;
