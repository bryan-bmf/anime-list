import {
  Box,
  Center,
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Select,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const Search = (props) => {
  const [q, setQ] = useState("");
  // const [category, setCategory] = useState(props.category);
  //category vendra de los tabs

  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  //get which page I'm at
  const page = location.pathname;

  const searchOnChangeHandler = (event) => {
    setQ(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (page === "/home") {
      // go to search results page passing the search string as a query param
      navigate({
        pathname: "/searchResults",
        search: "?q=" + q + "&cat=" + props.category,
      });
    } else {
      //replace search params
      setSearchParams({ q: q, cat: props.category }, { replace: true });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        placeholder="Search..."
        w={props.width}
        size={props.size}
        bgColor={props.color}
        borderColor="highlight"
        focusBorderColor="highlight"
        onChange={searchOnChangeHandler}
        borderLeftRadius={props.borderRadius}
        borderLeft={props.border}
        autoFocus
      />
    </form>
  );
};

export default Search;
