import { Fragment } from "react";
import Header from "../components/Header/Header";
import TabbedResults from "../components/TabbedResults";

const ResultsPage = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <TabbedResults />
    </Fragment>
  );
};

export default ResultsPage;
