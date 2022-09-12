import { Box, Container } from "@chakra-ui/react";
import Footer from "../components/Header/Footer";
import Header from "../components/Header/Header";

const OopsPage = () => {
  return (
    <Box>
      <Header />
      <Container minH="80vh">
        <h1>Oops! Something went wrong!</h1>
        <h2>Try searching for something else.</h2>
      </Container>
      <Footer />
    </Box>
  );
};

export default OopsPage;
