import { Text } from "@chakra-ui/react";

const Title = (props) => {

  const titles = ['ANIME', "アニメ", 'MUÑEQUITOS'];
  const title = titles[Math.floor(Math.random() * titles.length)];

  return (
      <Text textAlign={props.align} fontSize={props.size} color="white">
        {title}
      </Text>
  );
};

export default Title;
