const app = require("../app");
// create a snapshot test
test("Server snapshot", () => {
  expect(app).toMatchSnapshot();
});
