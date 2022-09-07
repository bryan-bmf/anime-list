import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Center,
  Flex,
} from "@chakra-ui/react";
import SearchResults from "./SearchResults";
import { useSearchParams } from "react-router-dom";

const TabbedResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let cat = searchParams.get("cat"); //get search string from url
  let defaultTab = cat === 'anime' ? 0 : 1;


  const tabChangeHandler = (index) => {
    let cat = index === 0 ? "anime" : "characters";

    // update category search param only dejando q quieto
    searchParams.delete('cat');
    setSearchParams([...searchParams.entries(), ["cat", cat]]);
  };

  return (
    <Flex justify='center'>
      <Tabs size="md" onChange={tabChangeHandler} defaultIndex={defaultTab}>

        <TabList>
          <Tab>Anime</Tab>
          <Tab>Characters</Tab>
        </TabList>

        <TabPanels>

          {/* Anime tab */}
          <TabPanel>
            <Center>
              <SimpleGrid columns={[2, 3, 4, 5]} spacing="40px">
                <SearchResults tab='anime' />
              </SimpleGrid>
            </Center>
          </TabPanel>

          {/* Characters tab */}
          <TabPanel>
            <Center>
              <SimpleGrid columns={[2, 3, 4, 5]} spacing="40px">
                <SearchResults tab='characters' />
              </SimpleGrid>
            </Center>
          </TabPanel>

        </TabPanels>

      </Tabs>
    </Flex>
  );
};

export default TabbedResults;
