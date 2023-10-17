import React from "react";
import renderer from "react-test-renderer";
import SearchForm from "../components/SearchForm";
// snapshot test
test("SearchForm component renders correctly", () => {
  // check if SearchForm renders correctly
  const component = renderer.create(<SearchForm />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
