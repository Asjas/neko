import ProductCategory from "../ProductCategory/ProductCategory";

export default function ProductCategories() {
  const productCategories = [
    { id: 1, title: "Leopard", totalProducts: 53, imageSrc: "/images/cheetah-catalogue.jpg", imageAlt: "Leopard" },
    { id: 2, title: "Serval", totalProducts: 9, imageSrc: "/images/cheetah-catalogue.jpg", imageAlt: "Serval" },
    { id: 3, title: "Cheetah", totalProducts: 22, imageSrc: "/images/cheetah-catalogue.jpg", imageAlt: "Cheetah" },
    { id: 4, title: "Lynx", totalProducts: 101, imageSrc: "/images/cheetah-catalogue.jpg", imageAlt: "Lynx" },
  ];

  return (
    <section className="flex flex-wrap gap-8 mb-40">
      {productCategories.map((productCategory) => (
        <ProductCategory key={productCategory.id} productCategory={productCategory} />
      ))}
    </section>
  );
}
