import { Flex, Stack, Button, Heading, Image, Box } from "@chakra-ui/react";
import React from "react";

function Hero({ title, subText, image, ctaText, imageText, ...rest }) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-around" }}
      direction={{ base: "column-reverse", md: "row" }}
      minH="70vh"
      px={8}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "left", "left"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subText}
        </Heading>
        <Button
          colorScheme="teal"
          borderRadius="8px"
          py="4"
          px="4"
          lineHeight="1"
          size="md"
        >
          {ctaText}
        </Button>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image
          src={image}
          size="100%"
          rounded="1rem"
          shadow="2xl"
          alt={imageText}
        />
      </Box>
    </Flex>
  );
}

export default Hero;
