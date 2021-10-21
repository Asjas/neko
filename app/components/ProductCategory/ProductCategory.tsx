interface ProductCategory {
  title: string;
  totalProducts: number;
  imageSrc: string;
  imageAlt: string;
}

function ProductCategory({ productCategory }: { productCategory: ProductCategory }) {
  return (
    <div className="relative p-8 text-gray-500 border-blue-100">
      <h3 className="mt-6 text-lg text-black">
        <span>{productCategory.title}</span>
      </h3>
      <p className="text-base font-semibold text-gray-900">{productCategory.totalProducts} products</p>
      <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={productCategory.imageSrc}
          alt={productCategory.imageAlt}
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
}

export default ProductCategory;
