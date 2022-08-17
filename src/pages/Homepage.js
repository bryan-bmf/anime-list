import { Box, Center, Flex, VStack } from "@chakra-ui/react";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import Title from "../components/Title";

const Homepage = () => {
  const [gif, setGif] = useState("");

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
      bgPosition={'center'}
    >
      <Center>
        <VStack>
          <Title size={[64, 128]} />
          {/* tamaño del width en cada breakpoint */}
          <Box w={[200, 300, 400, 500, 600, 700]}>
            <Search width='100%' size='lg' color="secondary" />
          </Box>
        </VStack>
      </Center>
    </Flex>
  );
};

export default Homepage;
