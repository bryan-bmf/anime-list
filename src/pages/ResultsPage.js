import { Fragment } from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

const ResultsPage = () => {
  return (
    <Fragment>
        <header><Header /></header>
        <SearchResults />
    </Fragment>
  );
};

export default ResultsPage;
