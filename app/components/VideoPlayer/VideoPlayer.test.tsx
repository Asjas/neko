import { render, screen } from "@testing-library/react";
import VideoPlayer from ".";

describe("<VideoPlayer />", () => {
  it("renders correctly", () => {
    render(<VideoPlayer />);

    const loadingText = screen.getByText(/Video Player is loading/i);

    expect(loadingText).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    render(<VideoPlayer />);

    expect(screen.getByLabelText("Video Player")).toMatchSnapshot();
  });
});
