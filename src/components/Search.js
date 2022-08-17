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
    <form onSubmit={onSubmitHandler}>
      <Input
        placeholder="Search..."
        size={props.size}
        w={props.width}
        bgColor={props.color}
        focusBorderColor="highlight"
        onChange={searchOnChangeHandler}
        autoFocus
      />
    </form>
  );
};

export default Search;
