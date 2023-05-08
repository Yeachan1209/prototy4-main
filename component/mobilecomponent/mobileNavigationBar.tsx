import { useState } from "react";
import { Box, Text, Grid, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const MNavigationBar = () => {
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

  const Nav = styled(Box)`
    width: 100%;
    max-width: 1150px;
  `;

  const NavItemsWrapper = styled(Box)`
    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const StyledGrid = styled(Grid)`
    as: ul;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 40px;
    align-items: center;
    list-style-type: none;
    position: relative;
    border-radius: 10px;
    width: 100%;
    max-width: 1150px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <Nav as="nav" p="4">
      <NavItemsWrapper>
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
      </NavItemsWrapper>
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
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  `;

  const NavItemLink = styled(Link)`
    font-weight: bold;
  `;

  const NavItemText = styled(Text)`
    font-size: 15px;
    background-color: ${(props) => props.bg};
    padding: 7px;
    border-radius: 10px;
  `;
  return (
    <NavItemWrapper as="li">
      <NavItemLink to={link} onClick={handleClick}>
        <NavItemText bg={backgroundColor}>{label}</NavItemText>
      </NavItemLink>
    </NavItemWrapper>
  );
};

export default MNavigationBar;
