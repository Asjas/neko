import { Link } from "remix";
import { ArrowRightIcon } from "@heroicons/react/solid";

interface ProductCategory {
  title: string;
  totalProducts: number;
  imageSrc: string;
  imageAlt: string;
}

function ProductCategory({ productCategory }: { productCategory: ProductCategory }) {
  return (
    <Link to="/" className="flex flex-auto no-underline bg-gray-100 rounded-md ring-offset-1">
      <div className="flex flex-col flex-auto">
        <h3 className="pl-4 mt-4 mb-0 text-lg font-bold tracking-wide text-black uppercase lg:text-xl xl:text-2xl">
          <span>{productCategory.title}</span>
        </h3>
        <p className="pl-4 mt-2 mb-8 text-sm font-semibold tracking-wide text-gray-500">
          {productCategory.totalProducts} products
        </p>
        <div className="flex items-center self-end pr-4 mb-4 hover:underline text-primary">
          <span className="text-sm font-bold tracking-wide align-middle">Catalogue</span>
          <ArrowRightIcon className="w-4 h-4" />
        </div>
        <div className="flex-grow w-full overflow-hidden bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img
            src={productCategory.imageSrc}
            alt={productCategory.imageAlt}
            className="object-cover object-center w-full h-full rounded-b-md"
          />
        </div>
      </div>
    </Link>
  );
}

export default ProductCategory;
