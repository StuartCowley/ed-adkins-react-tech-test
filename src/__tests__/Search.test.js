import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: () => {},
    search: "moon",
    setSearch: () => {},
    page: 1,
  };

  const { asFragment } = render(
    <Search
      setSearchResults={validProps.setSearchResults}
      search={validProps.search}
      setSearch={validProps.setSearch}
      page={validProps.page}
    />
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("correct number of buttons should render", () => {
    render(
      <Search
        setSearchResults={validProps.setSearchResults}
        search={validProps.search}
        setSearch={validProps.setSearch}
        page={validProps.page}
      />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(1);
  });
});
