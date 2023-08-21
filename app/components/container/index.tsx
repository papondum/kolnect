import { styled } from "@/stitches.config";

export const Container = styled("div", {
  width: "100%",
  variants: {
    size: {
      "1": {
        maxWidth: "none",
        mx: "auto",
        px: "$6",
        "@sm": {
          px: "$11",
        },
      },
      "2": {
        maxWidth: "1280px",
        mx: "auto",
        px: "$6",
        "@sm": {
          px: "$11",
        },
      },
      "3": {
        "@sm": {
          maxWidth: "1328px",
          mx: "auto",
          px: "$11",
        },
      },
      "4": {
        "@md": {
          maxWidth: "1328px",
          mx: "auto",
          px: "$11",
        },
      },
      "5": {
        "@lg": {
          maxWidth: "1328px",
          mx: "auto",
          px: "$11",
        },
      },
      "6": {
        maxWidth: "none",
        mx: "auto",
        px: "$3",
        "@sm": {
          px: "$6",
        },
      },
      "7": {
        maxWidth: "none",
        mx: "auto",
        px: "$6",
        "@sm": {
          px: "$11",
        },
        "@md": {
          px: "$12",
        },
      },
      "8": {
        "@xl": {
          maxWidth: "1328px",
          mx: "auto",
          px: "$11",
        },
      },
      "9": {
        maxWidth: "1440px",
        mx: "auto",
      },
      "10": {
        maxWidth: "1328px",
        mx: "auto",
        px: "$4",
        "@sm": {
          px: "$11",
        },
      },
      "11": {
        maxWidth: "1440px",
        mx: "auto",
        px: "$6",
        "@sm": {
          px: "$11",
        },
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});
