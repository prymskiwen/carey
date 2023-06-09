import React, { useMemo, useState, Fragment, useRef, useEffect } from "react";
import { styled } from "@styles/stitches";
import { useMedia, useWindowSize } from "react-use";
import {
  Container,
  Modal,
  Video,
  VideoPlayCTA,
  Text,
} from "@components/common";
import Image from "next/image";
import Swiper from "@components/common/swiper";

const LeftWrapper = styled("div", {
  position: "relative",
  "@min1024": {
    gridColumn: "2 / span 5",
    transform: "translateY(50%)",
  },
  "@min1440": {
    gridColumn: "1 / span 6",
  },
  "@min1920": {
    gridColumn: "2 / span 5",
  },
  boxSizing: "border-box",
});

const RightWrapper = styled("div", {
  boxSizing: "border-box",
  alignSelf: "flex-end",
  "@min1024": {
    gridColumn: "7 / span 5",
  },
});

const CaptionWrapper = styled("div", {
  pt: 8,
  "@min1024": {
    pt: 16,
  },
});

const ImageLeft = styled("div", {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  "@min1024": {
    maxHeight: 480,
  },
  "@min1920": {
    maxHeight: 640,
  },
  "> span": {
    height: "100% !important",
    span: { height: "100% !important" },
  },
  boxSizing: "border-box",
});

const ImageRight = styled("div", {
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  "> span": {
    height: "100% !important",
    span: { height: "100% !important" },
  },
  "@min1024": {
    maxHeight: 480,
  },
  "@min1920": {
    maxHeight: 640,
  },
});

const ImageRightLower = styled("div", {
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  "> span": {
    width: "100%",
    height: "100% !important",
    span: { height: "100% !important", width: "100%" },
  },
  maxHeight: 327,
  "@min480": {
    maxHeight: 460,
  },
  "@min1024": {
    alignSelf: "end",
    paddingRight: "5em",
    maxHeight: 480,
  },
  "@min1920": {
    maxHeight: 640,
  },
});

const VideoWrapper = styled("div", {
  gridColumn: "2 / span 10",
  gridRow: 1,
});

const ThreeUpModule = ({ __typename, image1, image2, image3, ...props }) => {
  const Primary = useRef(null);
  const WindowDimensions = useWindowSize();
  const isMobile = useMedia("(max-width: 1024px)", false);
  const [image1src] = image1;
  const [image2src] = image2;
  const [image3src] = image3;
  const [modalActive, setModalActive] = useState(false);
  const [primaryDimensions, setPrimaryDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (Primary.current) {
      const { width, height } = Primary.current.getBoundingClientRect();
      setPrimaryDimensions({ width, height });
    }
    // Needed `primary.current` to load correctly initially,
    // so no change on reload warning not relevent here.

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Primary.current, WindowDimensions]);

  const ConditionalWrapper = useMemo(() => {
    if (isMobile) return Swiper;
    return Fragment;
  }, [isMobile]);

  return (
    <Container
      innerCSS={{
        rowGap: 16,
        "@min1440": { rowGap: 24 },
        "@min1660": { rowGap: 36 },
        "@min1920": { rowGap: 40 },
      }}
    >
      {__typename === "generalComponents_inlineGallery3upVideo_BlockType" && (
        <Modal active={modalActive} setModalActive={setModalActive}>
          <VideoWrapper>
            <Video
              playing={true}
              url="https://www.youtube.com/watch?v=NJDCUP8m75g"
            />
          </VideoWrapper>
        </Modal>
      )}
      <ConditionalWrapper
        id={
          props?.jumpToToggle?.[0]?.available &&
          props?.jumpToToggle?.[0]?.anchorSlug
            ? props?.jumpToToggle?.[0]?.anchorSlug
            : null
        }
      >
        <LeftWrapper>
          <ImageLeft ref={Primary}>
            {__typename ===
              "generalComponents_inlineGallery3upVideo_BlockType" && (
              <VideoPlayCTA
                onClick={() => setModalActive(!modalActive)}
                label={"Watch our latest video"}
              />
            )}
            <Image
              alt={props.captionImage1}
              src={image1src.url}
              width={image1src.width}
              height={image1src.height}
              layout="responsive"
              objectFit="cover"
            />
          </ImageLeft>
          {props.captionImage1 && (
            <CaptionWrapper
              css={{
                "@min1024": {
                  position: "absolute",
                  bottom: !props.captionImage2 && -32,
                },
              }}
            >
              <Text css={{ color: "$navy700" }} variant="Body-xxSmall">
                {props.captionImage1}
              </Text>
            </CaptionWrapper>
          )}
        </LeftWrapper>
        <RightWrapper>
          <ImageRight
            css={{
              maxHeight: isMobile && primaryDimensions.height,
            }}
          >
            <Image
              alt={props.captionImage2}
              src={image2src.url}
              width={image2src.width}
              height={image2src.height}
              layout="responsive"
              objectFit="cover"
            />
          </ImageRight>
          {props.captionImage2 && (
            <CaptionWrapper>
              <Text css={{ color: "$navy700" }} variant="Body-xxSmall">
                {props.captionImage2}
              </Text>
            </CaptionWrapper>
          )}
        </RightWrapper>
        <RightWrapper>
          <ImageRightLower
            css={{
              maxHeight: isMobile && primaryDimensions.height,
            }}
          >
            <Image
              alt={props.captionImage3}
              src={image3src.url}
              width={image3src.width}
              height={image3src.height}
              layout="responsive"
              objectFit="cover"
            />
          </ImageRightLower>
          {props.captionImage3 && (
            <CaptionWrapper>
              <Text css={{ color: "$navy700" }} variant="Body-xxSmall">
                {props.captionImage3}
              </Text>
            </CaptionWrapper>
          )}
        </RightWrapper>
      </ConditionalWrapper>
    </Container>
  );
};

export default ThreeUpModule;
