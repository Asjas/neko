import { Outlet, useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = ({ params }: { params: any }) => {
  const product = params.products.charAt(0).toUpperCase() + params.products.slice(1);

  return {
    title: `${product} Catalogue | Neko EYEWEAR`,
    description: "Challenge the limits with Neko EYEWEAR.",
  };
};

export let loader: LoaderFunction = async () => {
  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        {
          catalogues {
            id
            name
            image {
              url
            }
            catalogueItemCount
          }
          technologies {
            field1_heading
            field1_content
            field2_heading
            field2_content
            field3_heading
            field3_content
            field4_heading
            field4_content
          }
          socialMediaIcons {
            id
            name
            url
          }
        }
      `,
    }),
  });

  return response.json();
};

export default function Team() {
  const {
    data: { socialMediaIcons },
  } = useLoaderData();

  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer socialMediaIcons={socialMediaIcons} />
    </div>
  );
}
