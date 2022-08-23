import { Fragment } from "react";
import Header from "../components/Header/Header";
import { Center, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import AnimeSidebar from "../components/AnimeSidebar";
import AnimeSummary from "../components/AnimeSummary";

const AnimePage = () => {
    const json = {
        "mal_id": 3081,
        "url": "https://myanimelist.net/anime/3081/Attacker_You",
        "images": {
            "jpg": {
                "image_url": "https://cdn.myanimelist.net/images/anime/11/85676.jpg",
                "small_image_url": "https://cdn.myanimelist.net/images/anime/11/85676t.jpg",
                "large_image_url": "https://cdn.myanimelist.net/images/anime/11/85676l.jpg"
            },
            "webp": {
                "image_url": "https://cdn.myanimelist.net/images/anime/11/85676.webp",
                "small_image_url": "https://cdn.myanimelist.net/images/anime/11/85676t.webp",
                "large_image_url": "https://cdn.myanimelist.net/images/anime/11/85676l.webp"
            }
        },
        "trailer": {
            "youtube_id": null,
            "url": null,
            "embed_url": null,
            "images": {
                "image_url": null,
                "small_image_url": null,
                "medium_image_url": null,
                "large_image_url": null,
                "maximum_image_url": null
            }
        },
        "approved": true,
        "titles": [
            {
                "type": "Default",
                "title": "Attacker You!"
            },
            {
                "type": "Japanese",
                "title": "アタッカーＹＯＵ！"
            },
            {
                "type": "English",
                "title": "Attacker You!"
            },
            {
                "type": "French",
                "title": "Jeanne & Serge"
            }
        ],
        "title": "Attacker You!",
        "title_english": "Attacker You!",
        "title_japanese": "アタッカーＹＯＵ！",
        "title_synonyms": [],
        "type": "TV",
        "source": "Manga",
        "episodes": 58,
        "status": "Finished Airing",
        "airing": false,
        "aired": {
            "from": "1984-04-13T00:00:00+00:00",
            "to": "1985-06-21T00:00:00+00:00",
            "prop": {
                "from": {
                    "day": 13,
                    "month": 4,
                    "year": 1984
                },
                "to": {
                    "day": 21,
                    "month": 6,
                    "year": 1985
                }
            },
            "string": "Apr 13, 1984 to Jun 21, 1985"
        },
        "duration": "23 min per ep",
        "rating": "R+ - Mild Nudity",
        "score": 6.65,
        "scored_by": 2914,
        "rank": 5567,
        "popularity": 6731,
        "members": 6571,
        "favorites": 22,
        "synopsis": "Attacker You! is the story of ambitious and energetic 13-year-old junior high schoolgirl You Hazuki (variously known as \"Mila,\" \"Jeanne\" or \"Juana\" in Western dubbed versions of the anime), who moves to Tokyo from Osaka to live with her father Toshihiko, a cameraman recently returned from Peru, and attend school. You's mother is not in the picture, having left when You was very young. Also living with You and her father is her younger brother Sunny, who is very attached to his older sister and tends to follow her everywhere she goes, including to school and to her volleyball matches. You is also curious about Kyushi Tajima, the pretty blonde woman whom she sees covering volleyball games on television, and about why her father becomes very angry whenever You mentions her. You is passionate about volleyball and dreams of one day being a part of Japan's national women's volleyball team in the 1988 Seoul Olympics. She joins her school's girls' volleyball team and quickly becomes one of the top players, although her coach (who is also her homeroom teacher) is brutal and literally slaps his players around when they don't live up to his expectations. You begins a tumultuous friendship with former school volleyball champ and former arch-rival Nami Hayase (French name: \"Peggy\"), which comes to a head when the two girls join opposing professional teams. She also develops a crush on So Takiki, the captain of the Hikawa boys' volleyball team (known as \"Shiro,\" \"Serge\" or \"Sergio\" in various Western versions), and puts as much effort into trying to win his heart as she does into her game.",
        "background": null,
        "season": "spring",
        "year": 1984,
        "broadcast": {
            "day": null,
            "time": null,
            "timezone": null,
            "string": "Unknown"
        },
        "producers": [
            {
                "mal_id": 16,
                "type": "anime",
                "name": "TV Tokyo",
                "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
            },
            {
                "mal_id": 44,
                "type": "anime",
                "name": "Shaft",
                "url": "https://myanimelist.net/anime/producer/44/Shaft"
            },
            {
                "mal_id": 477,
                "type": "anime",
                "name": "Kino Production",
                "url": "https://myanimelist.net/anime/producer/477/Kino_Production"
            }
        ],
        "licensors": [],
        "studios": [
            {
                "mal_id": 452,
                "type": "anime",
                "name": "Knack Productions",
                "url": "https://myanimelist.net/anime/producer/452/Knack_Productions"
            }
        ],
        "genres": [
            {
                "mal_id": 1,
                "type": "anime",
                "name": "Action",
                "url": "https://myanimelist.net/anime/genre/1/Action"
            },
            {
                "mal_id": 22,
                "type": "anime",
                "name": "Romance",
                "url": "https://myanimelist.net/anime/genre/22/Romance"
            },
            {
                "mal_id": 30,
                "type": "anime",
                "name": "Sports",
                "url": "https://myanimelist.net/anime/genre/30/Sports"
            }
        ],
        "explicit_genres": [],
        "themes": [
            {
                "mal_id": 77,
                "type": "anime",
                "name": "Team Sports",
                "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
            }
        ],
        "demographics": [
            {
                "mal_id": 25,
                "type": "anime",
                "name": "Shoujo",
                "url": "https://myanimelist.net/anime/genre/25/Shoujo"
            }
        ]
    };

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <Center>
        <Grid
          h="200px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
        >
            {/* Sidebar */}
          <GridItem rowSpan={3} colSpan={2} bg="tomato">
            <AnimeSidebar object={json} />
          </GridItem>

          <GridItem colSpan={4} bg="tomato">
            <AnimeSummary summary={json.synopsis} />
          </GridItem>

          <GridItem colSpan={4} bg="tomato">
            <h1>personajes</h1>
          </GridItem>

          <GridItem colSpan={4} bg="tomato">
            <h1>videos</h1>
          </GridItem>

        </Grid>
      </Center>
    </Fragment>
  );
};

export default AnimePage;
