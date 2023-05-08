import { useState } from "react";
import { Box, Text, Grid, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NavigationBar = () => {
  const [selectedNavItemIndex, setSelectedNavItemIndex] = useState(0);

  const navItems = [
    { link: "/HomePage", label: "일상" },
    { link: "/HomePage", label: "동네소식" },
    { link: "/HomePage", label: "중고거래" },
    { link: "/HomePage", label: "동네맛집" },
    { link: "/HomePage", label: "알바" },
    { link: "/HomePage", label: "같이해요" },
    { link: "/HomePage", label: "운동" },
  ];

  const handleNavItemClicked = (index) => {
    setSelectedNavItemIndex(index);
  };
  const { colorMode, toggleColorMode } = useColorMode();

  const Nav = styled(Box)`
    width: 100%;
    max-width: 1150px;
  `;

  const StyledGrid = styled(Grid)`
    as: ul;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    position: absolute;
    border-radius: 10px;
    width: 645px;
    top: 85px;
    margin-left: 230px;
    background-color: ${colorMode === "light" ? "white" : "gray.800"};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;

  return (
    <Nav as="nav" p="4">
      <StyledGrid>
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            index={index}
            link={navItem.link}
            label={navItem.label}
            isSelected={selectedNavItemIndex === index}
            onNavItemClicked={handleNavItemClicked}
          />
        ))}
      </StyledGrid>
    </Nav>
  );
};

const NavItem = ({ index, link, label, isSelected, onNavItemClicked }) => {
  const backgroundColor = isSelected ? "#38B2AC" : "transparent";

  const handleClick = () => {
    onNavItemClicked(index);
  };
  const NavItemWrapper = styled(Box)`
    margin: 10px 14px;
  `;
  const NavItemLink = styled(Link)`
    font-weight: bold;
  `;
  const NavItemText = styled(Text)`
    font-size: 15px;
    background-color: ${(props) => props.bg};
    padding: 7px;
    border-radius: 5px;
  `;
  return (
    <NavItemWrapper as="li">
      <NavItemLink to={link} onClick={handleClick}>
        <NavItemText bg={backgroundColor}>{label}</NavItemText>
      </NavItemLink>
    </NavItemWrapper>
  );
};

export default NavigationBar;
