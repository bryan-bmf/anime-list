import { SimpleGrid, Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import Search from "./Search";

const SearchResults = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams] = useSearchParams();
  let q = searchParams.get("q"); //get search string from url

  const fetchAnime = async (q) => {
    const resp = await fetch("https://api.jikan.moe/v4/anime?q=" + q);

    if (!resp.ok) {
      throw new Error("Algo explotó");
    }

    const respData = await resp.json();
    setSearchResults(respData.data);
  };

  useEffect(() => {
    fetchAnime(q);
  }, []);

  return (
    <Center>
      <SimpleGrid columns={[2, 3, 4, 5]} spacing="40px">
        {searchResults.map((result) => (
          <Box>
            <Card
              key={result.mal_id}
              title={result.title}
              engTitle={result.title_english}
              characterName={result.name}
              image={result.images.jpg.image_url}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default SearchResults;
