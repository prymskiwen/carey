import { Image } from "@components/common";
import {
  ActionItem,
  ActionsWrapper,
  Container,
  Content,
  Heading,
  HeadingText,
  ImageWrapper,
  PrimaryText,
  SecondaryText,
  TextWidgetWrapper,
  Wrapper,
} from "./styles";

const TextBlock = ({
  title,
  primaryText,
  secondaryText,
  image,
  action,
  textPosition = "left",
}: TextBlockPropsType) => {
  return (
    <Wrapper position={textPosition}>
      <TextWidgetWrapper>
        <Container>
          <Content>
            <Heading>
              <HeadingText>{title}</HeadingText>
            </Heading>
            <PrimaryText>{primaryText}</PrimaryText>
            <SecondaryText>{secondaryText}</SecondaryText>
          </Content>
          <ActionsWrapper>
            <ActionItem>{action}</ActionItem>
          </ActionsWrapper>
        </Container>
      </TextWidgetWrapper>
      <ImageWrapper>
        <Image
          alt="PreFooter Image"
          src={image}
          width={900}
          height={837}
          placeholder="empty"
          layout="responsive"
          fallback="random thing"
          objectFit="cover"
          priority
          unoptimized
        />
      </ImageWrapper>
    </Wrapper>
  );
};

type TextBlockPropsType = {
  title: string;
  primaryText: string;
  secondaryText?: string;
  image?: any;
  action?: React.ReactNode;
  textPosition?: "left" | "right";
};

export default TextBlock;