import { Select, Box, Center, Flex, VStack, HStack } from "@chakra-ui/react";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import Title from "../components/Title";

const Homepage = () => {
  const [gif, setGif] = useState("");
  const [category, setCategory] = useState("anime");

  // Get gif from giphy for image bg
  const fetchGif = async (q) => {
    const resp = await fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=fMoQ2Ix7Y5q6kyVyt12GJ9ta8TIwSE0d&tag=anime"
    );

    if (!resp.ok) {
      throw new Error("Algo explotó");
    }

    const respData = await resp.json();
    setGif(respData.data.images.original.url);
  };

  // get gif once component has loaded
  useEffect(() => {
    fetchGif();
  }, []);

  const selectBoxChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    // Alineado centro del centro
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
      bgImage={gif}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition={"center"}
    >
      <Center>
        <VStack>
          <Title size={[64, 128]} />
          {/* tamaño del width en cada breakpoint */}
          <Box w={[200, 300, 400, 500, 600, 700]}>
            <HStack w='inherit' spacing="0">
              <Center w='inherit'>
                <Select
                  variant="filled"
                  borderColor="highlight"
                  size="lg"
                  bgColor="#c0fcf7"
                  w="fit-content"
                  borderRightRadius="none"
                  borderRight="none"
                  onChange={selectBoxChangeHandler}
                >
                  <option value="anime">Anime</option>
                  <option value="character">Character</option>
                </Select>
                <Search
                  category={category}
                  width="100%"
                  size="lg"
                  color="secondary"
                  border="none"
                  borderRadius="none"
                />
              </Center>
            </HStack>
          </Box>
        </VStack>
      </Center>
    </Flex>
  );
};

export default Homepage;
