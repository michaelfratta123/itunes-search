import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
// declare a component called Favourites to handle rendering list of faves
const Favourites = ({ favourites, removeFromFavourites }) => {
  // props are favourites array, and removeFromFavourites function
  return (
    // ensure all the cards are centred and equally spaced
    <div className="d-flex justify-content-center align-items-center m-3 p-3">
      {/* 4 cards per row on large screens, 3 per row on small */}
      <Row sm={3} lg={4} className="w-100">
        {favourites.map((favourite) => (
          // use trackId property as unique ID for rendering list items
          <Col
            key={favourite.trackId}
            className="d-flex justify-content-center"
          >
            {/* children should have unique key too */}
            <Card
              key={favourite.trackId}
              style={{ width: "9rem" }}
              bg="dark"
              border="light"
              text="light"
              className="m-3"
            >
              <Card.Img
                variant="top"
                src={favourite.artworkUrl100}
                alt="artwork"
              />
              <Card.Header
                as="h5"
                style={{ borderColor: "white", fontSize: "100%" }}
              >
                {favourite.artistName}
              </Card.Header>
              {/* flex column to send button to bottom of card */}
              <Card.Body className="d-flex flex-column">
                <Card.Text style={{ fontSize: "100%" }}>
                  {favourite.trackName}
                </Card.Text>
                <Button
                  variant="secondary"
                  // call removeFromFavourites function on click
                  onClick={() => removeFromFavourites(favourite)}
                  className="mt-auto"
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Favourites;
