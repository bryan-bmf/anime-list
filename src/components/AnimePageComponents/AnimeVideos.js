import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { URL } from "../../App";
import Card from "../Card";
import YTModal from "../YTModal";


const AnimeVideos = (props) => {
	const [videos, setVideos] = useState([]);

	//get 6 most relevant videos from youtube
	const fetchVideos = async () => {
		const url = URL + "/ytVideos";
		const params = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({q: props.animeTitle, quantity: props.quantity}),
		};
		const resp = await fetch(url, params);

		if (!resp.ok) {
			throw new Error("Algo explotó");
		}

		const respData = await resp.json();
		setVideos(respData.items);
	};

	useEffect(() => {
		fetchVideos();
	}, []);

	//create videos thumbnails con info de yt
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
	//itero por los video cards para poder sacar sus propiedades para que el modal funcione
	//cada thumb es uno de los videos
	const modals = videoThumbs.map((thumb) => {
		const cards = thumb.props.children;
		return (
			<YTModal
				key={thumb.key}
				trigger={thumb}
				title={cards.props.engTitle}
				link={` https://www.youtube.com/embed/${cards.props.link}?enablejsapi=1&wmode=opaque&autoplay=1`}
			/>
		);
	});

	let loading = (
		<Center>
			<Spinner
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.500"
				size="xl"
			/>
		</Center>
	);

	return (
		<Container p="4">
			<Heading size="lg" mb="2">
				Videos
			</Heading>
			<SimpleGrid minChildWidth="120px" spacing="40px">
				{videoThumbs.length > 0 ? modals : loading}
			</SimpleGrid>
		</Container>
	);
};

export default AnimeVideos;
