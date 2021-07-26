import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NavBarContainer from "../../containers/navbar";
import { APP_NAME } from "../../constants/appConstants";
import ThemeSwitch from "../ThemeSwitch";
import { menu } from "../../utils/menu";
import { CloseIcon } from "@chakra-ui/icons";

function NavBar(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavBarContainer {...props}>
      <Flex>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"} pl="2">
          {APP_NAME}
        </Heading>
      </Flex>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {menu.map((edge) => (
          <MenuItem to={edge.link} key={edge.key} isLast={edge.isLast}>
            {edge.name}
          </MenuItem>
        ))}
        <ThemeSwitch />
      </Stack>
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};
const MenuToggle = ({ toggle, isOpen }) => {
  const { colorMode } = useColorMode();
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <CloseIcon colorMode={colorMode} />
      ) : (
        <MenuIcon colorMode={colorMode} />
      )}
    </Box>
  );
};
const MenuIcon = ({ colorMode }) => (
  <svg
    fill={colorMode === "light" ? "black" : "white"}
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default NavBar;
