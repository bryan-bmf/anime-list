import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const Search = (props) => {
  const [q, setQ] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  let cat = searchParams.get("cat");


  //get which page I'm at
  const page = location.pathname;

  const searchOnChangeHandler = (event) => {
    setQ(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (page.startsWith("/searchResults")) {
      //replace search params
      setSearchParams({ q: q, cat: cat }, { replace: true });
    } else {
      // go to search results page passing the search string as a query param
      navigate({
        pathname: "/searchResults",
        search: "?q=" + q + "&cat=" + props.category,
      });
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
        borderWidth="2px"
        focusBorderColor="highlight"
        _focusVisible={{
          outline: "none",
          borderColor: "highlight",
        }}
        _hover={{
          borderColor: "highlight",
        }}
        onChange={searchOnChangeHandler}
        borderLeftRadius={props.borderRadius}
        borderLeft={props.border}
        autoFocus
      />
    </form>
  );
};

export default Search;
