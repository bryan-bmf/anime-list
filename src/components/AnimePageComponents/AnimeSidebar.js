import {
  Center,
  Divider,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Fragment } from "react";
import YTModal from "../YTModal";

const AnimeSidebar = (props) => {
  let propsObj = props.anime;
  let genres = "";

  // get genres from the props
  propsObj.genres.map((genre) => (genres = genres + ", " + genre.name));

  let to = props.anime.aired.to === null ? " Present" : props.anime.aired.to.substring(0, 4)
  

  return (
    <Fragment>
      <Center>
        <Image src={props.anime.images.jpg.image_url} p="4" />
      </Center>
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
          {to}
        </ListItem>
        <ListItem>
          <b>Rating:</b> {props.anime.score}
        </ListItem>
        <ListItem noOfLines={2}>
          <b>Genre(s):</b>
          {genres.substring(1)}
        </ListItem>

        {/* Only show if trailer is available */}
        {props.trailer !== undefined ? (
          <ListItem>
            <b>Watch trailer</b>
            <YTModal title="trailer" link={props.trailer.embed_url} />
          </ListItem>
        ) : (
          ""
        )}
      </List>
    </Fragment>
  );
};

export default AnimeSidebar;
