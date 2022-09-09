import { Text, Container, Link, Heading } from "@chakra-ui/react";
import { useState } from "react";

const AnimeSummary = (props) => {
  const [show, setShow] = useState(false);

  let propsSummary = props.summary;

  const handleToggle = () => {
    setShow(!show);
  };

  if (props.title === "About") {
    propsSummary = propsSummary.split("\n");
    propsSummary = propsSummary.filter((line) => !line.includes(":") || line.length > 500);
    propsSummary = propsSummary.join("<br>");
  }

  return (
    <Container p="4">
      <Heading size="lg" mb="2">
        {props.title}
      </Heading>
      <Text noOfLines={show ? 0 : 5} dangerouslySetInnerHTML={{__html: propsSummary}}></Text>
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
