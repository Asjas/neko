import ProductCategory from "../ProductCategory/ProductCategory";

export default function ProductCategories() {
  const productCategories = [
    { id: 1, title: "Leopard", totalProducts: 53, imageSrc: "/images/cheetah-1768.jpg", imageAlt: "Leopard" },
    { id: 2, title: "Lion", totalProducts: 9, imageSrc: "/images/cheetah-1768.jpg", imageAlt: "Lion" },
    { id: 3, title: "Cheetah", totalProducts: 22, imageSrc: "/images/cheetah-1768.jpg", imageAlt: "Cheetah" },
    { id: 4, title: "Cougar", totalProducts: 101, imageSrc: "/images/cheetah-1768.jpg", imageAlt: "Cougar" },
  ];

  return (
    <section className="flex flex-wrap gap-8 mb-40">
      {productCategories.map((productCategory) => (
        <ProductCategory key={productCategory.id} productCategory={productCategory} />
      ))}
    </section>
  );
}
