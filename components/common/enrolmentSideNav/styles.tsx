import React, { Ref } from "react";
import Chevron from "@components/common/icons/chevron";
import { styled, keyframes } from "@styles/stitches";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Text } from "@components/common";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});
const NavSubHeader = styled("div", {
  fontFamily: "inherit",
  backgroundColor: "transparent",
  py: 12,
  px: 24,
  flex: 1,
  pt: 45,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  lineHeight: 1,
  color: "$navy",
});
const SingleItem = styled("div", {
  fontFamily: "inherit",
  backgroundColor: "transparent",
  py: 12,
  px: 24,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  lineHeight: 1,
  color: "$navy",
  cursor: "pointer",
  bg: "$white",
  "&:hover, &.active": { bg: "$crestBlue100" },
  "& a": {
    textDecoration: "none",
  },
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  py: 12,
  px: 24,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  lineHeight: 1,
  color: "$navy",
  bg: "$white",
  transition: "ease all 200ms",
  cursor: "pointer",
  '&[data-state="closed"]': { bg: "$white" },
  '&[data-state="open"]': {
    bg: "$crestBlue200",
    [`& ${Text}`]: { fontWeight: 500 },
    "&:hover": { bg: "$crestBlue200" },
  },
  "&:hover": { bg: "$crestBlue100" },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "$crestBlue100",
  [`& ${SingleItem}`]: { backgroundColor: "$crestBlue100" },
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
});

const Accordion = StyledAccordion;
const AccordionItem = StyledItem;

const AccordionTrigger = React.forwardRef(
  ({ children, ...props }: anyType, forwardedRef: Ref<HTMLButtonElement>) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <Chevron aria-hidden direction="down" />
      </StyledTrigger>
    </StyledHeader>
  )
);
const AccordionContent = React.forwardRef(
  ({ children, ...props }: anyType, forwardedRef: Ref<HTMLDivElement>) => (
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  )
);

AccordionTrigger.displayName = "Accordion Trigger";
AccordionContent.displayName = "Accordion Content";

const Wrapper = styled("div", {
  position: "sticky",
  top: 152,
  pb: 16,
  gridColumn: "10 / span 3",
  gridRow: 1,
  bg: "$white",
  height: "max-content",
  "*": { textDecoration: "none" },
});

const NavHeader = styled("div", {
  pt: 40,
  pb: 8,
  px: 24,
  bg: "$white",
});

type anyType = {
  children?: any;
};

export {
  Wrapper,
  NavHeader,
  NavSubHeader,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  SingleItem,
};
