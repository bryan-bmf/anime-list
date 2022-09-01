import {
  Container,
  Heading,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../Card";
import YTModal from "../YTModal";

const AnimeVideos = (props) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const resp = await fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDkSAq_bDUmT4_XSIFDLsuWIyPdSuZMrlo&part=snippet&maxResults=6&q=" +
        props.animeTitle
    );

    if (!resp.ok) {
      throw new Error("Algo explotó");
    }

    const respData = await resp.json();
    setVideos(respData.items);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  //create videos thumbnails
  const videoThumbs = videos.map((video) => (
    <Box key={video.etag}>
      <Card
        key={video.etag}
        engTitle={video.snippet.title}
        image={video.snippet.thumbnails.medium.url}
        boxWidth={[160 * 0.5, 160]}
        imageHeight={[90 * 0.5, 90]}
        expandName="true"
        link={video.id.videoId}
      />
    </Box>
  ));

  //set thumbnail cards as modals
  const modals = videoThumbs.map((thumb) => {
    const cards = thumb.props.children;
    return (
      <YTModal
        trigger={thumb}
        title={cards.props.engTitle}
        link={` https://www.youtube.com/embed/${cards.props.link}?enablejsapi=1&wmode=opaque&autoplay=1`}
      />
    );
  });

  return (
    <Container p="4">
      <Heading size="lg" mb="2">
        Videos
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        {videoThumbs.length > 0 ? modals : "nada"}
      </SimpleGrid>
    </Container>
  );
};

export default AnimeVideos;
