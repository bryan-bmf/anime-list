import { render, screen } from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Homepage";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

const homepage = (
  <Router>
    <Homepage />
  </Router>
);

describe("Homepage", () => {
  test("Browse button can be clicked", () => {
    render(homepage);
    const button = screen.getByText("Browse");
    expect(button).toBeInTheDocument();
    button.click();
    expect(window.location.pathname).toBe("/searchResults");
  });

  test("select dropdown is rendered", () => {
    render(homepage);
    const selectOption = screen.getByTestId("select");
    expect(selectOption).toBeInTheDocument();
  });

  test("search is rendered", () => {
    render(homepage);
    const search = screen.getByTestId("searchBar");
    expect(search).toBeInTheDocument();
  });

  test('search functionality', () => {
    render(homepage);
    const search = screen.getByTestId("searchBar");
    userEvent.type(search, "dragon ball z{enter}");
    expect(window.location.pathname).toBe("/searchResults");
  })
});