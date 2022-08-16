import { Box, Center, Container, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Search = (props) => {
  const [q, setQ] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  //get which page I'm at
  const page = location.pathname;

  const searchOnChangeHandler = (event) => {
    setQ(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // go to search results page passing the search string as a query param
    navigate({ pathname: "/searchResults", search: "?q=" + q });
  };

  return (
    <Container>
      <Box>
        <Text fontSize={[64, 128]} color="white">
          ANIME
        </Text>
      </Box>
      <Center>
        {/* tamaño del width en cada breakpoint */}
        <Box w={[200, 300, 400, 500, 600, 700]}>
          <form onSubmit={onSubmitHandler}>
            <Input
              placeholder="Search..."
              size="lg"
              w="100%"
              bgColor="secondary"
              focusBorderColor="highlight"
              autoFocus
              onChange={searchOnChangeHandler}
            />
          </form>
        </Box>
      </Center>
    </Container>
  );
};

export default Search;
