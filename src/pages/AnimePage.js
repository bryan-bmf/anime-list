import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import AnimeSidebar from "../components/AnimePageComponents/AnimeSidebar";
import AnimeSummary from "../components/AnimePageComponents/AnimeSummary";
import { useParams } from "react-router-dom"; 
import AnimeCharacters from "../components/AnimePageComponents/AnimeCharacters";
import AnimeVideos from "../components/AnimePageComponents/AnimeVideos";

const AnimePage = () => {
  const [anime, setAnime] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoadingChars, setIsLoadingChars] = useState(true);
  const [isLoadingAnime, setIsLoadingAnime] = useState(true);

  const { id } = useParams();

  const fetchAnimeInfo = async () => {
    const resp = await fetch("https://api.jikan.moe/v4/anime/" + id);

    if (!resp.ok) {
      throw new Error("Algo explotó");
    }

    const respData = await resp.json();
    setAnime(respData.data);
    setIsLoadingAnime(false);
  };

  const getMainCharacters = (chars) => {
    let arr = [];
    chars.map((index) => {
      //limit to 5 main characters
      if(index.role === "Main" && arr.length < 5) {
        arr.push(index);
      };
    });
    arr = arr.sort((a, b) => b.favorites - a.favorites);
    return arr;
  }

  const fetchAnimeCharacters = async () => {
    const resp = await fetch("https://api.jikan.moe/v4/anime/" + id + "/characters");

    if (!resp.ok) {
      throw new Error("Algo explotó");
    }

    const respData = await resp.json();
    let chars = respData.data.slice(0,10);
    let main = getMainCharacters(chars);
    setCharacters(main);
    setIsLoadingChars(false);
  };

  useEffect(() => {
    fetchAnimeInfo();
    fetchAnimeCharacters();
  }, []);

  if (isLoadingAnime || isLoadingChars) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <Center>
        <Grid
          h="200px"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
          maxWidth='80em'
        >
          {/* Sidebar */}
          <GridItem rowSpan={3} colSpan={2} bg="tomato" maxWidth='20em'>  
            <AnimeSidebar anime={anime} />
          </GridItem>
          {/* Summary */}
          <GridItem colSpan={4} bg="tomato">
            <AnimeSummary summary={anime.synopsis} />
          </GridItem>
          {/* Characters */}
          <GridItem colSpan={4} bg="tomato">
            <AnimeCharacters characters={characters} />
          </GridItem>
          {/* Videos */}
          <GridItem colSpan={4} bg="tomato">
            <AnimeVideos animeTitle={anime.title} />
          </GridItem>
        </Grid>
      </Center>
    </Fragment>
  );
};

export default AnimePage;
