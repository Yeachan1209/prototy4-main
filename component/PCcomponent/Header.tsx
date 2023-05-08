import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  Avatar,
  theme,
} from "@chakra-ui/react";
import { FiHome, FiChevronDown, FiBell } from "react-icons/fi";
import { FaSearchLocation } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import styled from "@emotion/styled";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = "화성";
  const username = "Yea Chan";
  const [showNotification, setShowNotification] = useState(false);
  const backgroundColor = colorMode === "light" ? "white" : "gray.800";

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const HeaderStyles = styled.header`
    align-items: center;
    background-color: ${backgroundColor};
    display: flex;
    justify-content: space-between;
    left: 0;
    margin: 0 auto;
    max-width: 1150px;
    padding: 1rem;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 999;
  `;

  const LocationButton = styled(Button)`
    background-color: #009688;
    color: white;
    border-radius: 50px;
    padding-left: 3;
    display: flex;
    align-items: center;
    margin-left: 10px;
    display: flex;
    @media (min-width: 768px) {
      display: flex;
    }
  `;

  const SearchBox = styled(Box)`
    position: relative;
    display: inline-block;
    max-width: 600px;
    width: 100%;
  `;

  const Search = styled(Input)`
    border-radius: 50px;
    padding: 1.5rem 3rem;
    font-size: lg;
    background-color: #e5e5e5;
    transition: width 0.3s ease-in-out;

    &::placeholder {
      color: ${theme.colors.gray[500]};
    }
  `;

  const SearchIcon = styled(Box)`
    color: gray.500;
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  `;

  const Drakmode = styled(Button)`
    background-color: ${colorMode === "light" ? "white" : "gray.800"};
    border-radius: 50px;
    font-size: 20px;
    margin-right: 10px;
  `;

  const BellIcon = styled(Box)`
    cursor: pointer;
    margin-left: 4;
    padding: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Notification = styled(Box)`
    position: absolute;
    top: 65px;
    right: 80px;
    border-color: gray.300;
    border-radius: md;
    box-shadow: sm;
    z-index: 1;
    padding: 2;
    display: flex;
    align-items: center;
    background-color: ${colorMode === "light" ? "white" : "gray.800"};
  `;

  const FlexCenter = styled(Flex)`
    align-items: center;
  `;

  const HomeLink = styled(Link)``;

  const HomeIcon = styled(Box)`
    cursor: pointer;
    color: #38b2ac;
    width: 32px;
    height: 32px;
  `;

  const LocationIcon = styled(Box)`
    margin-left: 5px;
  `;

  const Searchcenter = styled(Box)`
    flex: 1;
    text-align: center;
  `;

  const Username = styled(Text)`
    font-weight: bold;
  `;

  const NewPostText = styled(Text)`
    color: ${(props) => props.color};
  `;

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <Box>
      {isMobile ? (
        <Box />
      ) : (
        <HeaderStyles>
          <FlexCenter>
            <HomeLink href={"/"}>
              <HomeIcon as={FiHome} />
            </HomeLink>
            <LocationButton>
              {location}
              <LocationIcon as={FiChevronDown} />
            </LocationButton>
          </FlexCenter>
          <Searchcenter>
            <SearchBox>
              <Search type="text" placeholder="화성 근처에서 검색" />
              <SearchIcon as={FaSearchLocation} size={20} />
            </SearchBox>
          </Searchcenter>

          <FlexCenter>
            <Drakmode onClick={toggleColorMode}>
              {colorMode === "light" ? <FiMoon /> : <FiSun />}
            </Drakmode>
            <BellIcon as={FiBell} onClick={handleNotificationClick} size={26} />
            {showNotification && (
              <Notification>
                <Avatar name={username} size="sm" mr="2" />
                <Username>{username}</Username>
                <NewPostText>님이 새 글을 작성하셨습니다.</NewPostText>
              </Notification>
            )}

            <Avatar
              name={username}
              size="md"
              cursor="pointer"
              ml={{ base: "4", md: "6" }}
            />
          </FlexCenter>
        </HeaderStyles>
      )}
    </Box>
  );
};

export default Header;
