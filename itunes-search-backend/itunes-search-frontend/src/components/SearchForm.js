import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// declare a component called SearchForm to render the search form
const SearchForm = ({ setResults, handleShowResultsModal }) => {
  // props are the setResults state, and handleShowResultsModal function

  // declare term state for the entered search terms
  const [term, setTerm] = useState("");
  // declare media state for the selected media type
  const [media, setMedia] = useState("movie");

  // declare a function to handle search
  const handleSearch = async () => {
    // make a call to the backend
    const response = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use term and media from body of request
      body: JSON.stringify({ term, media }),
    });
    // await the response, and convert it to json
    const data = await response.json();
    setResults(data); // update results state with the received data
    handleShowResultsModal(); // show the search results modal after submit
  };

  // render the component
  return (
    <Form className="m-3 p-3">
      {/* align items to the center of the page; equally spaced */}
      <Row className="align-items-center m-auto">
        {/* search input to take up 7/12 columns */}
        <Col md={7}>
          <Form.Group className="mb-3" controlId="formSearchTerm">
            <Form.Label>Search for something in iTunes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter search"
              value={term}
              // set the term state to the entered value
              onChange={(e) => setTerm(e.target.value)}
            />
          </Form.Group>
        </Col>
        {/* media type selection to take up 3/12 columns */}
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formMediaType">
            <Form.Label>Select media type</Form.Label>
            <Form.Select
              value={media}
              // set the media type state to the selected value
              onChange={(e) => setMedia(e.target.value)}
            >
              {/* render the possible values accepted by the API */}
              <option value="movie">Movie</option>
              <option value="podcast">Podcast</option>
              <option value="music">Music</option>
              <option value="musicVideo">Music Video</option>
              <option value="audiobook">Audiobook</option>
              <option value="shortFilm">Short Film</option>
              <option value="software">Software</option>
              <option value="tvShow">TV Show</option>
              <option value="all">All</option>
            </Form.Select>
          </Form.Group>
        </Col>
        {/* search button to take up 2/12 columns */}
        <Col md={2}>
          {/* call the handleSearch function when the search button is clicked */}
          <Button variant="dark" onClick={handleSearch} className="mt-3">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
