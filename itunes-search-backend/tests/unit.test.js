const request = require("supertest"); // for backend tests
const app = require("../app");
// create a unit test
describe("POST /api/search", () => {
  // test if post response successful to search request
  it("responds with JSON and status 200", async () => {
    const response = await request(app)
      .post("/api/search")
      // pass search term and media type
      .send({ term: "example", media: "movie" })
      .set("Accept", "application/json");
    // expect the status to be successful, and the response to be json
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });
  // test if array of search results is shown
  it("responds with an array of search results", async () => {
    const response = await request(app)
      .post("/api/search")
      .send({ term: "example", media: "movie" })
      .set("Accept", "application/json");
    // expect the response to be an array if successful
    expect(response.body).toBeInstanceOf(Array);
  });
});
