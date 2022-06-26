import { createStitches } from "@stitches/react";
import rem from "@utils/pxRem";

const fontFallbacks =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Verdana, sans-serif';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      darkerYellow: "#FFBF00",
      lightYellow: "#FFDB4D",
      tintYellow: "#fff6d1",
      background: "#F6F6F6",
      black: "#000000",
      crestBlue100: "#E6EEF4",
      crestBlue150: "#E1ECF5",
      crestBlue200: "#CCDCE9",
      crestBlue300: "#B3CBDE",
      crestBlue400: "#99B9D3",
      crestBlue500: "#80A8C9",
      crestBlue600: "#6696BE",
      crestBlue700: "#4D85B3",
      crestBlue800: "#3373A8",
      crestBlue900: "#1A629D",
      crestBlue: "#005092",
      crestYellow: "#FFCC00",
      darkBlue100: "#E9EBEE",
      darkBlue200: "#D3D7DD",
      darkBlue300: "#BCC3CC",
      darkBlue400: "#A6AFBB",
      darkBlue500: "#909BAB",
      darkBlue600: "#7A869A",
      darkBlue700: "#647289",
      darkBlue800: "#4D5E78",
      darkBlue900: "#374A67",
      darkBlue: "#213565",
      grey: "#F0F0F0",
      navy100: "#E6E8EC",
      navy200: "#CDD1D9",
      navy300: "#B4BBC5",
      navy400: "#9BA4B2",
      navy500: "#828D9F",
      navy600: "#69768C",
      navy700: "#505F79",
      navy800: "#374965",
      navy900: "#1E3252",
      navy: "#051B3F",
      white: "#FFFFFF",
      darkestGrey: "#929292",
      darkGrey: "#ABABAB",
      midGrey: "#C3C3C3",
      lightGrey: "#DCDCDC",
      lightestGrey: "#F4F4F4",
      sandLight: "#F5F0EB",
      sandMid: "#F3EAE1",
      sand: "#EDE6D5",
      sandDark: "#D6C9A9",
      link: "#0000E5",
      info: "#FDC035",
      success: "#008000",
      warning: "#FF4731",
      danger: "#C40000",
      system: "#FFFF00",
    },
    fontSizes: {
      headingXLarge: rem("44px"),
      headingLarge: rem("30px"),
      headingSmall: rem("24px"),
      headingXSmall: rem("18px"),
      headingOverline: rem("14px"),
      headingXXSmall: rem("12px"),
      buttonLarge: rem("20px"),
      buttonRegular: "$headingXSmall",
      bodyXXLarge: "$headingLarge",
      bodyXLarge: "$headingSmall",
      bodyLarge: "$buttonLarge",
      bodyRegular: "$headingXSmall",
      bodySmall: rem("16px"),
      bodyXSmall: "$headingOverline",
      bodyXXSmall: "$headingXXSmall",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
    },
    fonts: {
      poppins: `poppins, ${fontFallbacks}`,
      avallon: `avallon, ${fontFallbacks}`,
    },
    letterSpacings: {
      tight: "-0.01em",
      regular: "0.01em",
      roomy: "0.03em",
      spaced: "0.1em",
    },
    lineHeights: {
      xLarge: "180%",
      large: "160%",
      medium: "140%",
      small: "120%",
    },
  },
  media: {
    min375: "(min-width: 375px)",
    min480: "(min-width: 480px)",
    min600: "(min-width: 600px)",
    min768: "(min-width: 768px)",
    min1024: "(min-width: 1024px)",
    min1200: "(min-width: 1200px)",
    min1440: "(min-width: 1440px)",
    min1660: "(min-width: 1660px)",
    min1800: "(min-width: 1800px)",
    min1920: "(min-width: 1920px)",
    max480: "(max-width: 480px)",
    max600: "(max-width: 600px)",
    max768: "(max-width: 768px)",
    max1024: "(max-width: 1024px)",
    max1200: "(max-width: 1200px)",
    max1440: "(max-width: 1440px)",
    max1660: "(max-width: 1660px)",
    max1800: "(max-width: 1800px)",
    max1920: "(max-width: 1920px)",
  },
  utils: {
    bg: (value) => ({
      background: value,
    }),
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
