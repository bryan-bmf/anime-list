import {
  Box,
  Divider,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { Fragment } from "react";

const AnimeSidebar = (props) => {
  let propsObj = props.object;
  let genres = '';
  
  // get genres from the props
  propsObj.genres.map((genre) =>
    genres = genres + ', ' + genre.name
  );

  return (
    <Fragment>
      <Image src={props.object.images.jpg.image_url} p="4" />
      <Divider orientation="horizontal" mb="4" />
      <Heading size="lg" mb="4">
        {props.object.title}
      </Heading>
      <List textAlign="start" spacing={1}>
        <ListItem>
          <b>Episodes:</b> {props.object.episodes}
        </ListItem>
        <ListItem>
          <b>Status:</b> {props.object.status}
        </ListItem>
        <ListItem>
          <b>Aired:</b> {props.object.aired.from.substring(0, 4)} -{" "}
          {props.object.aired.to.substring(0, 4)}
        </ListItem>
        <ListItem>
          <b>Rating:</b> {props.object.score}
        </ListItem>
        <ListItem noOfLines={2}>
          <b>Genre(s):</b>{genres.substring(1)}
        </ListItem>
      </List>
    </Fragment>
  );
};

export default AnimeSidebar;
