import { Text, Container, Link, Heading } from "@chakra-ui/react";
import { useState } from "react";

const AnimeSummary = (props) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <Container p='4'>
      <Heading size="lg" mb="2">
        Summary
      </Heading>
      <Text noOfLines={show ? 0 : 5}>{props.summary}</Text>
      <Text
        fontSize="xs"
        onClick={handleToggle}
        textAlign="end"
        mt="1"
        mb="2"
        color="blue"
        textDecoration="underline"
      >
        <Link>Show {show ? "Less" : "More"}</Link>
      </Text>
    </Container>
  );
};

export default AnimeSummary;
