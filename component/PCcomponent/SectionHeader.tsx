import styled from "styled-components";
import { Box, Flex, Text, theme, IconButton } from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

const ProfileBox = styled(Box)`
  background-color: #edf2f7;
  color: #4a5568;
  border-radius: 9999px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
`;

const Profile = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Profilecenter = styled(Flex)`
  align-items: center;
`;

const ProfileTextBox = styled(Flex)`
  flex-direction: column;
`;

const ProfileText = styled(Text)`
  font-size: 1.2rem;
  font-weight: bold;
`;

const LocationText = styled(Text)`
  color: ${theme.colors.gray[500]};
  font-size: lg;
  font-weight: bold;
  margin-bottom: 1px;
`;

function SectionHeader({ username }) {
  return (
    <Profile>
      <Profilecenter>
        <ProfileBox>{username[0]}</ProfileBox>
        <ProfileTextBox>
          <ProfileText>{username}</ProfileText>
          <LocationText>화성 · 1h</LocationText>
        </ProfileTextBox>
      </Profilecenter>
      <IconButton
        icon={<FaEllipsisH />}
        aria-label="Options"
        size="md"
        variant="ghost"
        colorScheme="gray"
        alignSelf="flex-start"
      />
    </Profile>
  );
}

export default SectionHeader;
