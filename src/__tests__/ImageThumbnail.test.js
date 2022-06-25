import { render } from "@testing-library/react";
import ImageThumbnail from "../components/ImageThumbnail";

describe("ImageThumbnail", () => {
  const image = {
    url: "https://images-assets.nasa.gov/image/PIA02442/PIA02442~thumb.jpg",
    title: "title1",
  };
  const setLoading = () => {};

  const { asFragment } = render(
    <ImageThumbnail image={image} setLoading={setLoading} />
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
