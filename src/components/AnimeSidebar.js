import { Divider, Heading, Image, List, ListItem } from "@chakra-ui/react";
import { Fragment } from "react";

const AnimeSidebar = (props) => {
  let propsObj = props.anime;
  let genres = "";

  // get genres from the props
  propsObj.genres.map((genre) => (genres = genres + ", " + genre.name));

  return (
    <Fragment>
      <Image src={props.anime.images.jpg.image_url} p="4" />
      <Divider orientation="horizontal" mb="4" />
      <Heading size="lg" mb="4">
        {props.anime.title}
      </Heading>
      <List textAlign="start" spacing={1}>
        <ListItem>
          <b>Episodes:</b> {props.anime.episodes}
        </ListItem>
        <ListItem>
          <b>Status:</b> {props.anime.status}
        </ListItem>
        <ListItem>
          <b>Aired:</b> {props.anime.aired.from.substring(0, 4)} -
          {props.anime.aired.to.substring(0, 4)}
        </ListItem>
        <ListItem>
          <b>Rating:</b> {props.anime.score}
        </ListItem>
        <ListItem noOfLines={2}>
          <b>Genre(s):</b>
          {genres.substring(1)}
        </ListItem>
      </List>
    </Fragment>
  );
};

export default AnimeSidebar;
