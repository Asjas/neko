import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import reachDialogStyles from "@reach/dialog/styles.css";

import CatalogueItem from "~/components/CatalogueItem";

interface Catalogue {
  data: {
    catalogues: {
      id: string;
      name: string;
      catalogueItem: {
        id: string;
        name: string;
        responsiveImageLink: string;
        martiniImageLink: string;
      }[];
      catalogueItemCount: number;
    }[];
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: reachDialogStyles,
    },
  ];
}

export let loader: LoaderFunction = async ({ params: { products } }) => {
  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      variables: { catalogue: products },
      query: `
        query GET_CATALOGUE_ITEM($catalogue: String!) {
          catalogues(where: { name: { equals: $catalogue, mode: insensitive } }) {
            id
            name
            catalogueItem {
              id
              name
              responsiveImageLink
              martiniImageLink
            }
            catalogueItemCount
          }
        }
      `,
    }),
  });

  return response.json();
};

export default function Products() {
  const {
    data: { catalogues },
  } = useLoaderData<Catalogue>();

  return (
    <section className="container mx-auto my-16">
      <h2 className="pb-16 my-16 font-extrabold tracking-wide text-center uppercase text-primary text-1xl drop-shadow-2xl sm:text-2xl md:text-3xl lg:text-5xl">
        <span className="border-t-0 border-b-4 border-l-0 border-r-0 border-solid border-secondary">
          {catalogues[0].name}
        </span>{" "}
        Catalogue
      </h2>
      <div className="container grid grid-cols-1 gap-4 mx-auto mb-36 md:grid-cols-2 xl:grid-cols-4">
        {catalogues[0].catalogueItem.map((catalogueItem) => (
          <CatalogueItem
            key={catalogueItem.id}
            url={catalogueItem.responsiveImageLink}
            spinUrl={catalogueItem.martiniImageLink}
            name={catalogueItem.name}
          />
        ))}
      </div>
    </section>
  );
}
