import React, { useMemo, useState, Fragment, useRef, useEffect } from "react";
import { styled } from "@styles/stitches";
import { useMedia, useWindowSize } from "react-use";
import { Modal, Video } from "@components/common";
import { Text } from "@components/common";
import Image from "next/image";
import Play from "@components/common/icons/play";
import Swiper from "@components/common/swiper";

const ImageLeft = styled("div", {
  position: "relative",
  width: "100%",
  "@min1024": {
    gridColumn: "2 / span 5",
    transform: "translateY(50%)",
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
  "@min1024": {
    gridColumn: "7 / span 5",
    alignSelf: "end",
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
  "@min1024": {
    gridColumn: "7 / span 5",
    alignSelf: "end",
    // marginTop: 40,
    paddingRight: "5em",
  },
});

const VideoCTA = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  bottom: 0,
  left: 0,
  bg: "$navy",
  p: 18,
  zIndex: 10,
  columnGap: 24,
  transition: "background ease 200ms",
  cursor: "pointer",
  "@media (hover: hover)": {
    "&:hover": {
      bg: "$crestBlue",
    },
  },
  [`${Text}`]: {
    position: "relative",
    top: "0.1em",
    color: "$white",
  },
  "@min375": {
    p: 20,
  },
  "@min768": {
    p: 36,
  },
  "@min1024": {
    p: 44,
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
  console.log(image1src);
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
    <>
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
      <ConditionalWrapper>
        <ImageLeft ref={Primary}>
          {__typename ===
            "generalComponents_inlineGallery3upVideo_BlockType" && (
            <VideoCTA onClick={() => setModalActive(!modalActive)}>
              <Play width={33.33} />
              <Text variant="Heading-xSmall">Watch our latest video</Text>
            </VideoCTA>
          )}
          <Image
            alt=""
            src={image1src.url}
            width={image1src.width}
            height={image1src.height}
            layout="responsive"
            objectFit="cover"
          />
        </ImageLeft>
        <ImageRight
          css={{
            maxHeight: primaryDimensions.height,
          }}
        >
          <Image
            alt=""
            src={image2src.url}
            width={image2src.width}
            height={image2src.height}
            layout="responsive"
            objectFit="cover"
          />
        </ImageRight>
        <ImageRightLower
          css={{
            maxHeight: primaryDimensions.height,
          }}
        >
          <Image
            alt=""
            src={image3src.url}
            width={image3src.width}
            height={image3src.height}
            layout="responsive"
            objectFit="cover"
          />
        </ImageRightLower>
      </ConditionalWrapper>
    </>
  );
};

export default ThreeUpModule;
