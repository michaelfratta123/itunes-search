import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";
// unit test
test("renders SearchResults component", () => {
  // create a mock results array to mimic search submitted and results returned
  const results = [
    {
      trackId: 1,
      artworkUrl100: "example-url-1",
      artistName: "Artist 1",
      trackName: "Track 1", // checking this specifically
    },
  ];
  // jest.jn() creates mock functions for props where needed
  const addToFavourites = jest.fn();
  const handleClose = jest.fn();
  // render the SearchResults component
  render(
    <SearchResults
      results={results}
      addToFavourites={addToFavourites}
      show={true}
      handleClose={handleClose}
    />
  );
  // check to see if, once rendered, "Track 1" 'appears on the screen'
  const element = screen.getByText(/Track 1/i);
  expect(element).toBeInTheDocument();
});
