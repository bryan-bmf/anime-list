import { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Header/Footer";
import TabbedResults from "../components/TabbedResults";

const ResultsPage = () => {
  return (
    <Fragment>
      <Header as="header" />
      <TabbedResults />
      <Footer as="footer" />
    </Fragment>
  );
};

export default ResultsPage;
