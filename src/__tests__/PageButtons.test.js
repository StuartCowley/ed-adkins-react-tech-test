import { render, screen } from "@testing-library/react";
import PageButtons from "../components/PageButtons";

describe("PageButtons", () => {
  const validProps = {
    page: 1,
    setPage: () => {},
  };

  const { asFragment } = render(
    <PageButtons page={validProps.page} setPage={validProps.setPage} />
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("correct number of buttons should render", () => {
    render(<PageButtons page={validProps.page} setPage={validProps.setPage} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  it("the correct page number should be rendered", () => {
    render(<PageButtons page={validProps.page} setPage={validProps.setPage} />);
    expect(screen.getByText(1)).toHaveClass("page-number");
  });
});
