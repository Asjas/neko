import { DocumentRenderer } from "@keystone-6/document-renderer";
import { useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";

import Header from "../components/Header";
import Nav from "../components/Nav";
import NavLink from "../components/NavLink";
import Footer from "../components/Footer";

export const meta: MetaFunction = () => ({
  title: "About | Neko EYEWEAR",
  description: "Challenge the limits with Neko EYEWEAR.",
});

export let loader: LoaderFunction = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GET_ABOUT_PAGE {
          pages (where: { name: {equals: "About Us"}}) {
            id
            name
            content {
              document
            }
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

export default function About() {
  const {
    data: { pages, socialMediaIcons },
  } = useLoaderData();

  return (
    <>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </Nav>
      </Header>

      <main className="my-16">
        <article className="mx-auto prose lg:prose-xl">
          <DocumentRenderer document={pages[0].content.document} />
        </article>
      </main>
      <Footer socialMediaIcons={socialMediaIcons} />
    </>
  );
}
