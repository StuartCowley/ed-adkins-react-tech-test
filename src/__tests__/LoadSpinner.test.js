import { render } from "@testing-library/react";
import LoadSpinner from "../components/LoadSpinner";

describe("LoadSpinner", () => {
  const { asFragment } = render(<LoadSpinner />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
