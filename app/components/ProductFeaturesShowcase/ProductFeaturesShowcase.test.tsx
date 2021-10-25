import { render } from "@testing-library/react";
import ProductFeaturesShowcase from ".";

describe("<ProductFeaturesShowcase />", () => {
  it("renders and matches snapshot", () => {
    const { container } = render(<ProductFeaturesShowcase />);

    expect(container).toMatchSnapshot();
  });
});
