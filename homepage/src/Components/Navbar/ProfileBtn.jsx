import {
  AddIcon,
  ChevronDownIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsMenuDown } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";

const ProfileBtn = () => {
  return (
    <Box>
      <Menu>
        <Flex alignItems={"center"}>
          <Box width="40px" height="40px" borderRadius="50%">
            {" "}
            <Image
              src="https://statics.olx.in/external/base/img/avatar_3.png"
              alt="Profile pic"
            />
          </Box>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<ChevronDownIcon />}
          />
        </Flex>

        <MenuList>
          <Flex alignItems="center">
            <Box width="56px" height="56px" borderRadius="50%" mt="15px">
              {" "}
              <Image
                src="https://statics.olx.in/external/base/img/avatar_3.png"
                alt="Profile pic"
              />
            </Box>

            <Box mx="1rem">
              <Box>
                <Heading
                  as="h4"
                  size="md"
                  font-family="Roboto,Arial,Helvetica,sans-serif"
                >
                  Hello, Suraj
                </Heading>
              </Box>

              <Text
                color="#5b5c5d"
                font-family="Roboto,Arial,Helvetica,sans-serif"
              >
                <Link to="#">View and edit profile</Link>
              </Text>
            </Box>
          </Flex>
          <hr />
          <MenuItem icon={<MdContentCopy />}>
            <Link to="#">My ADS</Link>
          </MenuItem>
          <MenuItem icon={<BsMenuDown />}>Buy Business Packages</MenuItem>
          <MenuItem icon={<RepeatIcon />}>Open Closed</MenuItem>
          <MenuItem icon={<RiLogoutBoxRLine />}>
            <Link to="#">Logout</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ProfileBtn;
