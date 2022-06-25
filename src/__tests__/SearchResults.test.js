import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    images: [
      {
        url: "https://images-assets.nasa.gov/image/PIA02442/PIA02442~thumb.jpg",
        title: "title1",
      },
      {
        url: "https://images-assets.nasa.gov/image/PIA00126/PIA00126~thumb.jpg",
        title: "title2",
      },
    ],
    loading: false,
    setLoading: () => {},
  };

  const { asFragment } = render(
    <SearchResults
      results={validProps.images}
      loading={validProps.loading}
      setLoading={validProps.setLoading}
    />
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of SearchResults instances", () => {
    render(
      <SearchResults
        results={validProps.images}
        loading={validProps.loading}
        setLoading={validProps.setLoading}
      />
    );
    expect(screen.getAllByTestId("search-result-card")).toHaveLength(2);
  });
});
