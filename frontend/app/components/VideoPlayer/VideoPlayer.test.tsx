import { render } from "@testing-library/react";
import VideoPlayer from ".";

describe("<VideoPlayer />", () => {
  it("renders and matches snapshot", () => {
    const { container } = render(<VideoPlayer />);

    expect(container).toMatchSnapshot();
  });
});
