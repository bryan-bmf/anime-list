import { Box, Button, Flex } from "@chakra-ui/react";
import Search from "../Search";
import Title from "../Title";

const Header = () => {
  return (
    <Box>
      <Flex
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        bgColor="secondary"
        height="4rem"
        w="100%"
        mb="10"
        justify="space-between"
      >
        <Flex>
          <Title align="left" size="32" />
        </Flex>
        <Flex justify="flex-end">
          <Search width="400px" size="md" color="highlight" />
        </Flex>
        <Flex>
          <Button colorScheme="teal" size="sm">
            Button
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
