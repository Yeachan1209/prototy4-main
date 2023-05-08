import { FaHome, FaSearch, FaMap, FaEnvelope, FaUser } from "react-icons/fa";
import { Box, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const iconColor = { light: "gray.500", dark: "gray.400" };

  const FooterFlex = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    padding-top: 4;
    padding-bottom: 6;
    padding-left: 6;
    padding-right: 6;
    border-top: 1px solid gray.100;
    position: fixed;
    bottom: 0;
    width: 100%;
  `;

  const StyledIconButton = styled(IconButton)`
    color: ${iconColor[colorMode]};
  `;

  return (
    <FooterFlex bgColor={bgColor[colorMode]}>
      <Link href="/">
        <StyledIconButton
          aria-label="홈"
          variant="ghost"
          icon={<FaHome />}
          size="lg"
        />
      </Link>
      <StyledIconButton
        aria-label="검색"
        variant="ghost"
        icon={<FaSearch />}
        size="lg"
      />
      <StyledIconButton
        aria-label="지도"
        variant="ghost"
        icon={<FaMap />}
        size="lg"
      />
      <StyledIconButton
        aria-label="메시지"
        variant="ghost"
        icon={<FaEnvelope />}
        size="lg"
      />
      <StyledIconButton
        aria-label="프로필"
        variant="ghost"
        icon={<FaUser />}
        size="lg"
      />
    </FooterFlex>
  );
};

export default Footer;
