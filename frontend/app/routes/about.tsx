import { DocumentRenderer } from "@keystone-6/document-renderer";
import { useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const meta: MetaFunction = () => ({
  title: "About | Neko EYEWEAR",
  description: "Challenge the limits with Neko EYEWEAR.",
});

export let loader: LoaderFunction = async () => {
  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GET_ABOUT_PAGE {
          page(where: {id: "ckwq3mb1j00385kiogn5ybf78"}) {
            id
            name
            content {
              document
            }
          }
        }
      `,
    }),
  });

  return response.json();
};

export default function About() {
  const {
    data: { page },
  } = useLoaderData();

  return (
    <>
      <Header />
      <main className="my-16">
        <article className="mx-auto prose lg:prose-xl">
          <DocumentRenderer document={page.content.document} />
        </article>
      </main>
      <Footer />
    </>
  );
}
