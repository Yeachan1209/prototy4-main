import { Grid, Flex, Text, Icon, Box, useColorMode } from "@chakra-ui/react";
import { FiHome, FiMapPin, FiMessageSquare, FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const ASidebar = () => {
  const [active, setActive] = useState("홈");

  const handleItemClick = (name) => {
    setActive(name);
  };
  const { colorMode, toggleColorMode } = useColorMode();

  const StyledGrid = styled(Grid)`
    position: fixed;
    top: 0;
    left: 0;
    right: 920px;
    max-width: 1150px;
    width: 220px;
    margin: 87px auto 0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: ${colorMode === "light" ? "white" : "gray.800"};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4px;
  `;

  const StyledFlex = styled(Flex)`
    flex-direction: column;
    padding: 4px;
  `;

  const HomeButton = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `;

  const NeighButton = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `;

  const ChatButton = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `;

  const StyledBoxButton = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 200px;
    margin-bottom: 4;
    background-color: #009688;
    color: white;
    border-radius: 20px;
  `;

  const MbBox = styled(Box)`
    margin-bottom: 2px;
  `;

  const HomeIcon = styled(Icon)`
    width: 23px;
    height: 23px;
    margin-right: 12px;
    color: ${(props) => (props._active === "홈" ? "#38B2AC" : "gray.600")};
    &:hover {
      color: #38b2ac;
    }
  `;

  const HomeText = styled(Text)`
    font-weight: bold;
  `;

  const LocaIcon = styled(Icon)`
    width: 23px;
    height: 23px;
    margin-right: 12px;
    &:hover {
      color: #38b2ac;
    }
  `;

  const LocaText = styled(Text)`
    font-weight: bold;
  `;

  const ChatIcon = styled(Icon)`
    width: 23px;
    height: 23px;
    margin-right: 12px;
    &:hover {
      color: #38b2ac;
    }
  `;

  const ChatText = styled(Text)`
    font-weight: bold;
  `;

  const WritingIcon = styled(Icon)``;

  const WritingText = styled(Text)`
    font-weight: bold;
    text-align: center;
    margin-left: 8px;
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
        <StyledGrid as="aside" templateColumns="250px">
          <StyledFlex>
            <MbBox />
            <HomeButton as="button" onClick={() => handleItemClick("홈")}>
              <HomeIcon
                as={FiHome}
                color={active === "홈" ? "#38B2AC" : "gray.600"}
              />
              <HomeText color={active === "홈" ? "#38B2AC" : "gray.600"}>
                홈
              </HomeText>
            </HomeButton>
            <NeighButton as="button" onClick={() => handleItemClick("내 근처")}>
              <LocaIcon
                as={FiMapPin}
                color={active === "내 근처" ? "#38B2AC" : "gray.600"}
              />
              <LocaText color={active === "내 근처" ? "#38B2AC" : "gray.600"}>
                내 근처
              </LocaText>
            </NeighButton>
            <ChatButton as="button" onClick={() => handleItemClick("채팅")}>
              <ChatIcon
                as={FiMessageSquare}
                color={active === "채팅" ? "#38B2AC" : "gray.600"}
              />
              <ChatText color={active === "채팅" ? "#38B2AC" : "gray.600"}>
                채팅
              </ChatText>
            </ChatButton>
            <StyledBoxButton as="button">
              <WritingIcon as={FiPlus} />
              <WritingText>글쓰기</WritingText>
            </StyledBoxButton>
          </StyledFlex>
        </StyledGrid>
      )}
    </Box>
  );
};

export default ASidebar;
