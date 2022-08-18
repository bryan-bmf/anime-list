import { Box, Image, Text } from "@chakra-ui/react";

const Card = (props) => {
  // Determine if the title is from an anime or a character
  const animeTitle = props.engTitle !== null ? props.engTitle : props.title;
  const title =
    props.characterName !== undefined ? props.characterName : animeTitle;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      borderColor='highlight'
      overflow="hidden"
      w={[223 * 0.5, 223]}
    >
      <Image src={props.image} width="100%" h={[315 * 0.5, 315]} />
      <Box
        p="1"
        fontWeight="semibold"
        lineHeight="tight"
        noOfLines={1}
        width="100%"
        textAlign="center"
        bgColor="secondary"
      >
        <Text fontSize={["xs", "sm"]}>{title}</Text>
      </Box>
    </Box>
  );
};

export default Card;
