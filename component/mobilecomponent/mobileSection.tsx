import { useEffect, useRef, useState } from "react";
import { Box, Flex, IconButton, Text, Image, theme } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import styled from "@emotion/styled";
import SectionHeader from "./mobileSectionHeader";
export default function Msection({ id, imageSrc }) {
  const username = "Yea Chan";
  const content =
    "안녕하세요. 반갑습니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다.";
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(10);
  const boxRef = useRef(null);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  useEffect(() => {
    if (boxRef.current) {
      const boxHeight = boxRef.current.scrollHeight;
      if (boxHeight > boxRef.current.offsetHeight) {
        boxRef.current.style.height = `${boxHeight}px`;
      }
    }
  }, [content]);
  const StyledBox = styled(Box)`
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow-wrap: anywhere;
    width: 100%;
    display: grid;
    border-radius: 20px;
    padding: 16px;
    margin-bottom: 30px;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header"
      "image"
      "content"
      "footer";
  `;

  const HeaderBox = styled(Box)`
    grid-area: header;
  `;

  const ImageBox = styled(Box)`
    grid-area: image;
  `;

  const ImageEmotion = styled(Image)`
    height: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: lg;
    margin-bottom: 16px;
  `;

  const ContentBox = styled(Box)`
    grid-area: content;
  `;

  const Content = styled(Text)`
    font-size: 1.1rem;
    margin-bottom: 10px;
    white-space: pre-line;
  `;

  const IconFlex = styled(Flex)`
    grid-area: footer;
    align-items: center;
    justify-content: flex-end;
  `;

  const IconFlexcenter = styled(Flex)`
    align-items: center;
    margin-right: 10px;
  `;

  const LikeComIconButton = styled(IconButton)`
    background-color: transparent;
    }
    &:focus {
      box-shadow: none;
    }
  `;

  const Likes = styled(Text)`
    margin-left: 8px;
  `;
  const Comments = styled(Text)`
    margin-left: 8px;
  `;
  return (
    <StyledBox key={id} ref={boxRef}>
      <HeaderBox>
        <SectionHeader username={username} />
      </HeaderBox>
      <ImageBox>
        <ImageEmotion src={imageSrc} alt="Profile Picture" />
      </ImageBox>
      <ContentBox>
        <Content>{content}</Content>
      </ContentBox>
      <IconFlex>
        <IconFlexcenter>
          <LikeComIconButton
            aria-label="Like"
            icon={<AiOutlineHeart size="20" color={liked ? "red" : "gray"} />}
            onClick={handleLike}
          />
          <Likes>{likes}</Likes>
        </IconFlexcenter>
        <IconFlexcenter>
          <LikeComIconButton
            aria-label="Comment"
            icon={<AiOutlineMessage size="20" color="gray" />}
          />
          <Comments>20</Comments>
        </IconFlexcenter>
      </IconFlex>
    </StyledBox>
  );
}
