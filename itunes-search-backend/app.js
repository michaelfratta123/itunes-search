const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const path = require("path");
const app = express();
const helmet = require("helmet");
const cors = require("cors");

const corsOptions = {
  origin: "https://itunes-search-frontend-4e516a05a2e6.herokuapp.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(helmet());
app.use(express.static(path.join(__dirname, "itunes-search-frontend/build")));

// declare a post request
app.post("/api/search", async (req, res) => {
  // get the term and media type from the body of the request
  const { term, media } = req.body;
  // try to connect to the iTunes search api
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${term}&media=${media}`
    );
    // the response is a txt file
    const data = await response.text();
    // convert to json
    const jsonData = JSON.parse(data);
    // parse the results array of the returned json
    res.json(jsonData.results);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// for url encoded data
app.use(express.urlencoded({ extended: true }));

// start listening to the port if command not npm test
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log("Listening engaged"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

module.exports = app; // export the app for testing
