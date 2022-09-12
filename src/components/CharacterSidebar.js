import {
  Center,
  Divider,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";

const CharacterSidebar = (props) => {
  let characterInfo = props.character;
  characterInfo = characterInfo.about.split("\n");

  //get facts out of the about
  let facts = characterInfo.filter((line) => line.includes(":") && line.length < 200);

  const factMap = facts.map((fact) => {
    let index = fact.indexOf(":");
    let factKey = fact.substring(0, index + 1);
    let factValue = fact.substring(index + 1);

    return (
      <ListItem>
        <b>{factKey}</b> {factValue}
      </ListItem>
    );
  });

  return (
    <Fragment>
      <Center>
        <Image src={props.character.images.jpg.image_url} p="4" />
      </Center>
      <Divider orientation="horizontal" mb="4" />
      <Heading size="lg" mb="4">
        {props.character.name}
      </Heading>
      <List textAlign="start" spacing={1}>
        {factMap}
      </List>
      <br></br>
      Seen in:
      <Link href={`/anime/${props.anime.mal_id}`}>
        <Text color="blue" textDecoration="underline">
          {props.anime.title}
        </Text>
      </Link>
    </Fragment>
  );
};

export default CharacterSidebar;
