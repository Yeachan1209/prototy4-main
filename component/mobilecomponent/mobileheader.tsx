import {
  Box,
  Flex,
  Button,
  useColorMode,
  Avatar,
  Text,
  theme,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiBell, FiChevronDown, FiMoon, FiSun } from "react-icons/fi";
import styled from "@emotion/styled";

const MobileHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = colorMode === "light" ? "black" : "white";
  const backgroundColor = colorMode === "light" ? "white" : "gray.800";

  const location = "화성";
  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };
  const [showNotification, setShowNotification] = useState(false);
  const username = "Yea Chan";

  const HeaderFlex = styled(Flex)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    z-index: 100;
    color: ${textColor};
    background-color: ${backgroundColor};
  `;

  const LocationButton = styled(Button)`
    background-color: ${theme.colors.teal[500]};
    color: white;
    border-radius: 20px;
    padding-left: 3;
    padding-right: 3;
    align-items: center;
    margin-left: 4;
  `;

  const DarkModeButton = styled(Button)`
    background-color: transparent;
    color: ${theme.colors.gray[900]};
    border-color: ${theme.colors.gray[700]};
    border-radius: 999px;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;

    &:hover {
      background-color: ${theme.colors.gray[600]};
      border-color: ${theme.colors.gray[600]};
    }

    svg {
      color: ${colorMode === "light"
        ? theme.colors.gray[900]
        : theme.colors.gray[100]};
    }
  `;

  const BellIcon = styled(Box)`
    font-size: 1.5rem;
    color: ${theme.colors.gray[600]};
    transition: color 0.2s;

    &:hover {
      color: ${theme.colors.gray[900]};
    }
  `;

  const BellBox = styled(Box)`
    position: absolute;
    top: 65px;
    right: 15px;
    height: 40px;
    border-color: ${theme.colors.gray[300]};
    border-radius: ${theme.radii.md};
    box-shadow: ${theme.shadows.sm};
    z-index: 1;
    padding: 2;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[900]};
  `;

  const NameText = styled(Text)`
    font-weight: bold;
    margin-bottom: 0;
  `;

  const BellText = styled(Text)`
    margin-left: 2;
    color: ${(props) => props.color};
  `;

  return (
    <HeaderFlex>
      <LocationButton variant="ghost">
        {location}
        <Box as={FiChevronDown} ml="2" />
      </LocationButton>
      <DarkModeButton variant="ghost" onClick={toggleColorMode}>
        {colorMode === "light" ? <FiMoon /> : <FiSun />}
      </DarkModeButton>
      <BellIcon
        as={FiBell}
        cursor="pointer"
        ml={{ base: "4", md: "6" }}
        onClick={handleNotificationClick}
      />
      {showNotification && (
        <BellBox>
          <Avatar name={username} size="sm" mr="2" />
          <NameText>{username}</NameText>
          <BellText>님이 새 글을 작성하셨습니다.</BellText>
        </BellBox>
      )}
    </HeaderFlex>
  );
};

export default MobileHeader;
