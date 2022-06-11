import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const images = [
    "https://images-assets.nasa.gov/image/PIA02442/PIA02442~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA00126/PIA00126~thumb.jpg",
  ];

  const { asFragment } = render(<SearchResults results={images} />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of SearchResults instances", () => {
    const { getAllByTestId } = render(<SearchResults results={images} />);

    expect(getAllByTestId("search-result-cards")).toBeInTheDocument();
  });
});
