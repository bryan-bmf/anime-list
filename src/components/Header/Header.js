import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import Search from "../Search";
import Title from "../Title";

const Header = () => {
  return (
    <Box as="header">
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
          <Link href="/home">
            <Title align="left" size="32" />
          </Link>
        </Flex>
        <Flex justify="flex-end">
          <Search width="400px" size="md" color="highlight" category='anime' />
        </Flex>
        <Flex>
          <Button colorScheme="secondary" size="sm">
            <Text color='secondary'>Button</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
