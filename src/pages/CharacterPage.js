import {
  Center,
  Grid,
  GridItem,
  Spinner,
} from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeSummary from "../components/AnimePageComponents/AnimeSummary";
import AnimeVideos from "../components/AnimePageComponents/AnimeVideos";
import CharacterSidebar from "../components/CharacterSidebar";
import Footer from "../components/Header/Footer";
import Header from "../components/Header/Header";

const CharacterPage = () => {
  const [character, setCharacter] = useState([]);
  const [charactersAnime, setCharactersAnime] = useState([]);
  const [isLoadingChar, setIsLoadingChar] = useState(true);
  const [isLoadingAnime, setIsLoadingAnime] = useState(true);

  const { id } = useParams();

  const fetchCharacterInfo = async () => {
    const resp = await fetch("https://api.jikan.moe/v4/character/" + id);

    if (!resp.ok) {
      throw new Error("Algo explotó");
    }

    const respData = await resp.json();
    setCharacter(respData.data);
    setIsLoadingChar(false);
  };

  const fetchCharacterAnime = async () => {
    const resp = await fetch(
      "https://api.jikan.moe/v4/character/" + id + "/anime"
    );

    if (!resp.ok) {
      throw new Error("Algo explotó");
    }

    const respData = await resp.json();
    setCharactersAnime(respData);
    setIsLoadingAnime(false);
  };

  useEffect(() => {
    fetchCharacterInfo();
    fetchCharacterAnime();
  }, []);

  if (isLoadingChar || isLoadingAnime) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <Center>
        <Grid templateColumns="repeat(6, 1fr)" gap={4} maxWidth="80em">
          {/* Sidebar */}
          <GridItem
            rowSpan={3}
            colSpan={2}
            bg="tomato"
            maxWidth="20em"
            h="fit-content"
            p="2"
          >
            <CharacterSidebar character={character} anime={charactersAnime.data[0].anime} />
          </GridItem>
          {/* About */}
          <GridItem colSpan={4} bg="tomato" h="fit-content">
            <AnimeSummary title="About" summary={character.about} />
          </GridItem>
          {/* Videos */}
          <GridItem colSpan={4} bg="tomato" h="fit-content">
            <AnimeVideos animeTitle={character.name} quantity="9" />
          </GridItem>
        </Grid>
      </Center>
      <Footer />
    </Fragment>
  );
};

export default CharacterPage;
