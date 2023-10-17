import React from "react";
import { Modal, Card, Button, Row, Col } from "react-bootstrap";

// declare a component called SearchResults to handle the search results modal
const SearchResults = ({ results, addToFavourites, show, handleClose }) => {
  /* props are results for the results array
     addToFavourites to handle the 'Save' click
     show which is a state to tell the Modal if it should show
     handleClose to handle closing the Modal */

  // render the component
  return (
    // pass show boolean to Modal to inform it if it should show
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header className="bg-secondary p-3" closeButton="light">
        <Modal.Title>Search Results</Modal.Title>
      </Modal.Header>
      {/* ensure all cards are aligned and centred */}
      <Modal.Body className="bg-dark d-flex justify-content-center align-items-center">
        {/* 3 cards per row on small screen, 4 per row on large */}
        <Row sm={3} lg={4} className="w-100">
          {/* use trackId attribute from results data for unique key */}
          {results.map((result) => (
            <Col key={result.trackId} className="d-flex justify-content-center">
              <Card
                style={{ width: "9rem" }}
                bg="dark"
                border="light"
                text="light"
                className="m-3"
              >
                <Card.Img
                  variant="top"
                  src={result.artworkUrl100}
                  alt="artwork"
                />
                <Card.Header
                  as="h5"
                  style={{ borderColor: "white", fontSize: "100%" }}
                >
                  {result.artistName}
                </Card.Header>
                {/* make sure button is at the bottom of the card */}
                <Card.Body className="d-flex flex-column">
                  <Card.Text style={{ fontSize: "100%" }}>
                    {result.trackName}
                  </Card.Text>
                  <Button
                    variant="secondary"
                    // when clicked, add to favourites state
                    onClick={() => addToFavourites(result)}
                    className="mt-auto"
                  >
                    Save
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer className="bg-secondary">
        {/* handle closing the modal when Close is clicked */}
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchResults;
