import { render, screen } from "@testing-library/react";
import ProductCategory from ".";

describe("<ProductCategory />", () => {
  it("renders correctly", () => {
    const productCategory = {
      title: "Leopard",
      imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      totalProducts: 20,
      imageAlt: "Leopard in the jungle",
    };

    render(<ProductCategory productCategory={productCategory} />);

    const imageAltText = screen.getByAltText(productCategory.imageAlt);
    expect(imageAltText).toBeInTheDocument();

    const productHeading = screen.getByText(productCategory.title);
    expect(productHeading).toBeInTheDocument();

    const productCategoryTotalProducts = screen.getByText(productCategory.totalProducts);
    expect(productCategoryTotalProducts).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const productCategory = {
      title: "Leopard",
      imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      totalProducts: 20,
      imageAlt: "Leopard in the jungle",
    };

    const { container } = render(<ProductCategory productCategory={productCategory} />);

    expect(container).toMatchSnapshot();
  });
});
