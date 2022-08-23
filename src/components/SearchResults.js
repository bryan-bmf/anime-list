import { Box, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";

const SearchResults = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  //cada vez que hay un search nuevo, los query params se updatean
  const [searchParams] = useSearchParams();
  let q = searchParams.get("q"); //get search string from url
  let cat = searchParams.get("cat");

  // ver si puedo hacer un hook para reducir estos calls
  const fetchAnime = async () => {
    const resp = await fetch(
      "https://api.jikan.moe/v4/anime?q=" + q + "&order_by=favorites&sort=desc"
    );

    if (!resp.ok) {
      throw new Error("Algo explotó");
    }

    const respData = await resp.json();
    setSearchResults(respData.data);
  };

  const fetchCharacter = async () => {
    const resp = await fetch(
      "https://api.jikan.moe/v4/characters?q=" +
        q +
        "&order_by=favorites&sort=desc"
    );

    if (!resp.ok) {
      throw new Error("Algo explotó");
    }

    const respData = await resp.json();
    setSearchResults(respData.data);
  };

  // called every time q and cat change and gets both anime and characters
  // it get's them both pq el url hace un replace so ambos search params se updatean
  useEffect(() => {
    if (cat === "anime") fetchAnime();
    else fetchCharacter();
  }, [q, cat]);

  let results = searchResults.map((result) => (
    <Box key={result.mal_id}>
      <Link href={props.tab + "/" + result.mal_id} >
        <Card
          key={result.mal_id}
          title={result.title}
          engTitle={result.title_english}
          characterName={result.name}
          image={result.images.jpg.image_url}
        />
      </Link>
    </Box>
  ));

  let noResults = (
    <Box w="">
      <h1>No results found.</h1>
    </Box>
  );

  return searchResults.length > 0 ? results : noResults;
};

export default SearchResults;
