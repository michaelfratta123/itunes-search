import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import Favourites from "./components/Favourites";
import SearchResults from "./components/SearchResults";
import "./App.css";
import "./css/custom.css";

function App() {
  // set results state to empty array for API call
  const [results, setResults] = useState([]);
  // set favourites state to empty array for list of favourites
  const [favourites, setFavourites] = useState([]);
  // set showResultsModal state to false to handle showing/hiding the Modal
  const [showResultsModal, setShowResultsModal] = useState(false);

  // load favourites from sessionStorage (to adhere to requirements) on mount
  useEffect(() => {
    const storedFavourites = JSON.parse(sessionStorage.getItem("favourites"));
    if (storedFavourites) {
      // set favourites state if favourites found in sessionStorage
      setFavourites(storedFavourites);
    }
  }, []);

  // declare a function addToFavourites to handle saving item to list of faves
  const addToFavourites = (item) => {
    // declare a variable isDuplicate to check whether the item has already been added
    const isDuplicate = favourites.some((fav) => fav.trackId === item.trackId);
    // if the item has not already been added
    if (!isDuplicate) {
      // create a copy of the current favourites, and add the new item to it
      const updatedFavourites = [...favourites, item];
      // set the favourites to the updated array
      setFavourites(updatedFavourites);
      // save updated favourites to sessionStorage (for requirements)
      sessionStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    }
  };

  // declare a function removeFromFavourites to handle removing an item from favourites
  const removeFromFavourites = (item) => {
    // remove the selected item from the list of favourites
    const updatedFavourites = favourites.filter(
      // ignore all trackIds that do not match the selected item to be removed
      (fav) => fav.trackId !== item.trackId
    );
    // set the updated list of favourites to the state
    setFavourites(updatedFavourites);
    // save updated favourites to sessionStorage (for requirements)
    sessionStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  // declare a function to set showResultsModal to true (once search is submitted)
  const handleShowResultsModal = () => {
    setShowResultsModal(true);
  };
  // declare a function to set showResultsModal to false (once Modal is exited)
  const handleCloseResultsModal = () => {
    setShowResultsModal(false);
  };

  // render the components
  return (
    <div className="App">
      <h1 className="bg-dark text-light m-3 p-3">iTunes Search</h1>
      {/* pass setResults and handleShowResultsModal to child SearchForm component */}
      <SearchForm
        setResults={setResults}
        handleShowResultsModal={handleShowResultsModal}
      />
      <h2 className="bg-dark text-light m-3 p-3">Favourites</h2>
      {/* pass favourites and removeFromFavourites to child Favourites component */}
      <Favourites
        favourites={favourites}
        removeFromFavourites={removeFromFavourites}
      />
      {/* pass results, addToFavourites, show, and handleClose
          to child searchResults component */}
      <SearchResults
        results={results}
        addToFavourites={addToFavourites}
        show={showResultsModal}
        handleClose={handleCloseResultsModal}
      />
    </div>
  );
}

export default App;
