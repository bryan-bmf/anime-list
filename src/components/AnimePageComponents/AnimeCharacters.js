import { Box, Container, Heading, HStack, Link } from "@chakra-ui/react";
import Card from "../Card";

const AnimeCharacters = (props) => {
  let characters = props.characters.map((character) => (
    <Box key={character.character.mal_id}>
      <Link href={"/characters/" + character.character.mal_id}>
        <Card
          key={character.character.mal_id}
          characterName={character.character.name}
          image={character.character.images.jpg.image_url}
          boxWidth={[111 * 0.5, 111]}
          imageHeight={[157 * 0.5, 157]}
          expandName='true'
        />
      </Link>
    </Box>
  ));

  return (
    <Container p='4'>
      <Heading size="lg" mb="2">
        Main Characters
      </Heading>
      <HStack justify='center'>{characters}</HStack>
    </Container>
  );
};

export default AnimeCharacters;
