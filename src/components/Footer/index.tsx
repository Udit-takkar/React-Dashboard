import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { APP_NAME } from "../../constants/appConstants";
import { IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  LINKEDIN_LINK,
  GITHUB_LINK,
  TWITTER_LINK,
} from "../../constants/appConstants";

function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py="6"
      position="fixed"
      left="0"
      bottom="0"
      width="100%"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "xl", md: "50rem" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        align="center"
      >
        <Stack
          my={{ base: "6", md: 0 }}
          direction={{ base: "column", md: "row" }}
          marginStart={{ md: "8" }}
          fontSize="sm"
          spacing={{ base: "2", md: "8" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Text>
            &copy; {new Date().getFullYear()} {`${APP_NAME} `}
            All rights reserve
          </Text>
        </Stack>
        <ButtonGroup marginStart={{ md: "auto" }} variant="ghost">
          <IconButton
            aria-label="github link"
            href={GITHUB_LINK}
            icon={<FaGithub />}
          />
          <IconButton
            as="a"
            href={LINKEDIN_LINK}
            aria-label="LinkedIN"
            icon={<FaLinkedin />}
          />
          <IconButton
            as="a"
            href={TWITTER_LINK}
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Footer;
