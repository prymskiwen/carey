import Link from "next/link";
import { Button, Container, Image, Text } from "@components/common";
import ArrowRight from "@components/common/icons/arrowRight";
import Instagram from "@components/common/icons/instagram";
import PreFooterImage1 from "public/assets/img/prefooter_img_1.png";
import PreFooterImage2 from "public/assets/img/prefooter_img_2.png";
import {
  ActionItem,
  ActionsWrapper,
  Content,
  Description,
  Heading,
  HeadingText,
  IconsWrapper,
  ImageWrapper,
  Left,
  LinkWrapper,
  PreFooterWidget,
  Right,
  WidgetContainer,
  Wrapper,
} from "./styles";

const PreFooter = () => {
  return (
    <Container type="unbound">
      <Wrapper>
        <Left>
          <PreFooterWidget position="left">
            <WidgetContainer>
              <Content>
                <Heading>
                  <HeadingText>LATEST NEWS</HeadingText>
                </Heading>
                <Description>
                  Student agency at its most creative and critical: The Virtual
                  Carey Art and Design...
                </Description>
              </Content>
              <ActionsWrapper>
                <ActionItem>
                  <Button
                    arrow
                    label="Read more"
                    type="outline"
                    theme="transparent"
                    variant="secondary"
                    scale="md"
                    href="#"
                  />
                </ActionItem>
                <ActionItem>
                  <LinkWrapper>
                    <Link href="#" passHref>
                      <Text as="a" variant="Body-Small">
                        View all News
                      </Text>
                    </Link>
                    <ArrowRight />
                  </LinkWrapper>
                </ActionItem>
              </ActionsWrapper>
            </WidgetContainer>
            <ImageWrapper>
              <Image
                alt="PreFooter Image"
                src={PreFooterImage1}
                width={375}
                height={375}
                placeholder="empty"
                layout="responsive"
                fallback="random thing"
                objectFit="cover"
                priority
                unoptimized
              />
            </ImageWrapper>
          </PreFooterWidget>
        </Left>
        <Right>
          <PreFooterWidget position="right">
            <WidgetContainer>
              <Content>
                <Heading>
                  <HeadingText>KEEPING UP WITH CAREY</HeadingText>
                  <IconsWrapper>
                    <Link href="#" passHref>
                      <Text as="a">
                        <Instagram width={34} />
                      </Text>
                    </Link>
                  </IconsWrapper>
                </Heading>
                <Description>
                  Follow us on Instagram for regular updates about Carey life.
                </Description>
              </Content>
              <ActionsWrapper>
                <ActionItem>
                  <Button
                    arrow
                    label="Follow us"
                    type="outline"
                    theme="transparent"
                    variant="secondary"
                    scale="md"
                    href="#"
                  />
                </ActionItem>
                <ActionItem>
                  <LinkWrapper>
                    <Link href="#" passHref>
                      <Text as="a" variant="Body-Small">
                        View profile
                      </Text>
                    </Link>
                    <ArrowRight />
                  </LinkWrapper>
                </ActionItem>
              </ActionsWrapper>
            </WidgetContainer>
            <ImageWrapper>
              <Image
                alt="PreFooter Image"
                src={PreFooterImage2}
                width={375}
                height={375}
                placeholder="empty"
                layout="responsive"
                fallback="random thing"
                objectFit="cover"
                priority
                unoptimized
              />
            </ImageWrapper>
          </PreFooterWidget>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default PreFooter;
