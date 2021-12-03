import ProductCategory from "../ProductCategory/ProductCategory";

interface Catalogue {
  id: string;
  name: string;
  catalogueItemCount: number;
  image?: {
    url: string;
  };
}

export default function ProductCategories({ catalogues }: { catalogues: Catalogue[] }) {
  return (
    <section className="flex flex-wrap gap-8 mb-40 auto-cols-fr">
      {catalogues.map((productCategory) => (
        <ProductCategory key={productCategory.id} productCategory={productCategory} />
      ))}
    </section>
  );
}
