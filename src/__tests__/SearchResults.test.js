import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const images = [
    {
      url: "https://images-assets.nasa.gov/image/PIA02442/PIA02442~thumb.jpg",
      title: "title1",
    },
    {
      url: "https://images-assets.nasa.gov/image/PIA00126/PIA00126~thumb.jpg",
      title: "title2",
    },
  ];
  const loading = false;
  const setLoading = () => {};

  const { asFragment } = render(
    <SearchResults results={images} loading={loading} setLoading={setLoading} />
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of SearchResults instances", () => {
    render(
      <SearchResults
        results={images}
        loading={loading}
        setLoading={setLoading}
      />
    );
    expect(screen.getAllByTestId("search-result-card")).toHaveLength(2);
  });
});
