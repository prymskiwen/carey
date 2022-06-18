import { styled } from "@styles/stitches";

const ActionWrapper = styled("div", {});
const Card = styled("div", {
  position: "relative",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  objectFit: "cover",
  objectPosition: "bottom",
  boxShadow: "none",
  transition: "box-shadow 0.08s ease-out 0.08s",
  height: "max-content",
  variants: {
    size: {
      small: {
        minWidth: 327,
        "@min1024": {
          minWidth: 560,
        },
      },
      large: {
        minWidth: 327,
        "@min1024": {
          minWidth: 859,
        },
      },
    },
    type: {
      default: {
        display: "flex",
        flexDirection: "column",
      },
      landscape: {
        display: "flex",
        flexDirection: "row-reverse",
        height: 400,
        "@min1024": {
          minWidth: 1459,
        },
      },
      "application-form": {},
    },
  },
  "&:hover": {
    boxShadow: "inset 0px 30px 120px 60px rgb(0 0 0 / 30%)",
  },
});
const CMarkImage = styled("div", {
  position: "absolute",
  bg: "url('assets/img/graphic-c-1.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  objectFit: "cover",
  variants: {
    size: {
      small: {
        width: 155,
        height: 169,
        left: 0,
        bottom: 24,
        "@min1024": {
          width: 220,
          height: 240,
          left: 0,
          bottom: 40,
        },
      },
      large: {
        width: 155,
        height: 169,
        left: 0,
        bottom: 24,
        "@min1024": {
          width: 312,
          height: 340,
          left: 0,
          bottom: 56,
        },
      },
    },
  },
});
const Description = styled("span", {
  gridColumn: "1 / span 12",
  color: "$white",
  fontSize: "$bodyLarge",
  fontWeight: "$medium",
  lineHeight: "$large",
  letterSpacing: "$regular",
  "@min1024": {
    gridColumn: "1 / span 9",
    fontSize: "$bodyXXLarge",
    letterSpacing: "$tight",
  },
  variants: {
    size: {
      small: {
        "@min1024": {
          fontSize: "$bodyXLarge",
          gridColumn: "1 / span 12",
          letterSpacing: "$regular",
        },
      },
      large: {
        "@min1024": {
          fontSize: "$bodyXXLarge",
          gridColumn: "1 / span 9",
          letterSpacing: "$tight",
        },
      },
    },
  },
});
const DescriptionWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
});
const FooterWrapper = styled("div", {
  position: "relative",
  variants: {
    size: {
      small: {
        paddingLeft: 144,
        "@min1024": {
          paddingLeft: 256,
        },
      },
      large: {
        paddingLeft: 144,
        "@min1024": {
          paddingLeft: 360,
        },
      },
    },
    type: {
      default: {},
      landscape: { flex: 1 },
    },
  },
});
const Heading = styled("span", {
  color: "$crestYellow",
  fontSize: "$headingOverline",
  lineHeight: "$large",
  letterSpacing: "$regular",
  "@min1024": {
    fontSize: "$headingXSmall",
  },
});
const HeadingWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  variants: {
    size: {
      small: {
        gap: 18,
        "@min1024": {
          gap: 24,
        },
      },
      large: {
        gap: 18,
        "@min1024": {
          gap: 32,
        },
      },
    },
  },
});
const ImageWrapper = styled("div", {});
const Wrapper = styled("div", {
  padding: 24,
  display: "flex",
  flexDirection: "column",
  variants: {
    size: {
      small: {
        padding: 24,
        paddingBottom: 0,
        gap: 24,
        "@min1024": {
          padding: 48,
          paddingBottom: 0,
          gap: 24,
        },
      },
      large: {
        padding: 24,
        paddingBottom: 0,
        gap: 24,
        "@min1024": {
          padding: 48,
          paddingBottom: 0,
          gap: 80,
        },
      },
    },
    type: {
      default: {},
      landscape: { flex: 1 },
    },
  },
});

export {
  ActionWrapper,
  Card,
  CMarkImage,
  Description,
  DescriptionWrapper,
  FooterWrapper,
  Heading,
  HeadingWrapper,
  ImageWrapper,
  Wrapper,
};