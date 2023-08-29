"use client";
import { styled } from "@/stitches.config";
import { Container } from "@/app/components/container";
import ScrollLink from "@/app/components/scrolllink";
import Logo from "@/app/assets/logo";
import { useState } from "react";
import { Drawer, Collapse } from "antd";
import { MenuOutlined } from "@ant-design/icons";
interface IProps {
  //   dealer: IDealer;
  //   onClose: () => void;
  //   panel: IPanel;
}
const DrawerWrap = styled("div", {
  display: "flex",
  alignItems: "start",
  flexDirection: "column",

  gap: "$7",
  li: {
    "list-style-type": "none",
    position: "relative",
    width: "auto",
    p: "$3 $4",
  },
  a: {
    color: "#FFFFFF",
    display: "block",
    textDecoration: "none",
  },
});
const Wrap = styled("div", {
  height: 72,
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  bc: "black",
  p: "$3",
  zIndex: 4,
  ".container": {
    maxWidth: 1264,
    flex: 1,
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    ".menu-tablet": {
      fontSize: "$5",
      cursor: "pointer",
      mr: 40,
      "@lg": { display: "none" },
    },
    ".logo-wrap": {
      width: "16.11%",
      svg: {
        width: "100%",
      },
    },
    ".link-wrapper": {
      display: "flex",
      alignItems: "center",
      gap: "$7",
      "@maxlg": { display: "none" },
      ".hover-elem": {
        position: "relative",
        ".submenu": {
          left: 0,
          opacity: 0,
          position: "absolute",
          top: 32,
          pt: 26,
          visibility: "hidden",
          zIndex: 1,
          listStyle: "none",
          bc: "black",
          width: 188,
        },
        "&:hover": {
          ".submenu": {
            opacity: 1,
            // bottom: 0,
            visibility: "visible",
            "a:hover": {
              background: "#DF4B05",
            },
          },
        },
        // "li:hover a ": {
        //   background: "#000000",
        // },
        // "a:hover": {
        //   background: "#DF4B05",
        // },
      },
      li: {
        float: "left",
        "list-style-type": "none",
        position: "relative",
        width: "auto",
        p: "$3 $4",
      },
      a: {
        // background: "#30A6E6",
        color: "#FFFFFF",
        display: "block",
        textAlign: "center",
        textDecoration: "none",
      },
    },
  },
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

  ".link-wrapper": {
    display: "flex",
    alignItems: "center",
    gap: "$7",
    "@maxlg": { display: "none" },
    ".hover-elem": {
      position: "relative",
      ".submenu": {
        left: 0,
        opacity: 0,
        position: "absolute",
        top: 32,
        pt: 26,
        visibility: "hidden",
        zIndex: 1,
        listStyle: "none",
        bc: "black",
        width: 186,
      },
      "&:hover": {
        ".submenu": {
          opacity: 1,
          // bottom: 0,
          visibility: "visible",
          "a:hover": {
            background: "#DF4B05",
          },
        },
      },
      // "li:hover a ": {
      //   background: "#000000",
      // },
      // "a:hover": {
      //   background: "#DF4B05",
      // },
    },
    li: {
      float: "left",
      "list-style-type": "none",
      position: "relative",
      width: "auto",
      p: "$3 $4",
    },
    a: {
      // background: "#30A6E6",
      color: "#FFFFFF",
      display: "block",
      textAlign: "center",
      textDecoration: "none",
    },
  },
});

const View = ({}: IProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Wrap>
      <div className="container">
        <div className="logo-wrap">
          <Logo />
        </div>
        <Drawer
          // title=""
          placement="right"
          onClose={onClose}
          bodyStyle={{ background: "#161617" }}
          headerStyle={{ background: "#161617" }}
          open={open}
        >
          <DrawerWrap>
            <Collapse
              collapsible="header"
              accordion={true}
              bordered={false}
              items={[
                {
                  key: "1",
                  label: "Why us?",
                  children: (
                    <ul className="submenu">
                      <li>
                        <ScrollLink href="#approach">Our approach</ScrollLink>
                      </li>
                      <li>
                        <ScrollLink href="#working-phase">
                          Our working phasing
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink href="#platform-data">
                          Our platform data
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink href="#credential">
                          Our credential
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink href="#clients">Our clients</ScrollLink>
                      </li>
                    </ul>
                  ),
                },
              ]}
            />
            <ScrollLink href="#trending">Our Trending issues</ScrollLink>
            <ScrollLink href="#packages">Our Packages</ScrollLink>
            <ScrollLink href="#contact">Our Contact</ScrollLink>
          </DrawerWrap>
        </Drawer>
        <div className="menu-tablet" onClick={showDrawer}>
          <MenuOutlined />
        </div>
        <div className="link-wrapper">
          <li className="hover-elem">
            <a href="#">Why Us?</a>
            <ul className="submenu">
              <li>
                <ScrollLink href="#approach">Our approach</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#working-phase">
                  Our working phasing
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="#platform-data">Our platform data</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#credential">Our credential</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#clients">Our clients</ScrollLink>
              </li>
            </ul>
          </li>
          <ScrollLink href="#trending">Our Trending issues</ScrollLink>
          <ScrollLink href="#packages">Our Packages</ScrollLink>
          <ScrollLink href="#contact">Our Contact</ScrollLink>
        </div>
      </div>
    </Wrap>
  );
};

export default View;
