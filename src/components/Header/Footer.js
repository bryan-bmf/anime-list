import { Container, Text } from "@chakra-ui/react";
import * as React from "react";

const Footer = () => (
  <Container
    as="footer"
    py={{ base: "2", md: "4" }}
    bgColor="secondary"
    maxW="100%"
    mt="10"
  >
    <Text fontSize="sm" color="subtle">
      &copy; {new Date().getFullYear()} Muñequitos Productions. All rights
      reserved.
    </Text>
  </Container>
);

export default Footer;
