import { useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";

import Header from "../components/Header";
import Nav from "../components/Nav";
import NavLink from "../components/NavLink";
import VideoPlayer from "../components/VideoPlayer";
import ProductFeaturesShowcase from "../components/ProductFeaturesShowcase";
import ProductCategories from "../components/ProductCategories";
import Footer from "../components/Footer";

import { ClientOnly } from "../hooks/useHydrated";

export const meta: MetaFunction = () => ({
  title: "Neko EYEWEAR",
  description: "Challenge the limits with Neko EYEWEAR.",
});

export let loader: LoaderFunction = async () => {
  const response = await fetch(`${BACKEND_URL}/api/graphql`, {
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

export default function Index() {
  const {
    data: { catalogues, technologies, socialMediaIcons },
  } = useLoaderData();

  return (
    <>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="#technology" fragmentedNav={true}>
            Technology
          </NavLink>
          <NavLink to="#catalogue" fragmentedNav={true}>
            Catalogue
          </NavLink>
          <NavLink to="/about">About Us</NavLink>
        </Nav>
      </Header>

      <main>
        <section className="px-2 py-10 bg-secondary lg:py-16 md:px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col">
              <h2 id="technology" className="text-base font-bold tracking-wider uppercase text-primary">
                Design & Technology
              </h2>
              <p className="my-8 text-3xl font-semibold text-white lg:w-8/12 lg:text-8xl">
                A radically original composition.
              </p>
              <p className="self-end w-9/12 pb-16 text-lg tracking-wide text-white font-extralight lg:text-2xl lg:w-5/12">
                In the pursuit of delivering you the best products on the planet, we are constantly revising and
                updating our lines.
              </p>
            </div>

            <div className="mx-auto max-w-7xl">
              <ClientOnly>
                <VideoPlayer />
              </ClientOnly>
            </div>

            <div className="flex flex-col items-center w-full pt-24 mx-auto max-w-7xl xl:w-9/12">
              <div className="orange-dot"></div>
              <h2 className="text-3xl font-semibold tracking-wider text-center text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
                Wear it with ease and comfort
              </h2>
            </div>

            <section className="hidden mb-14 max-w-7xl lg:block">
              <ProductFeaturesShowcase technologies={technologies} />
            </section>
          </div>
        </section>

        <section className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl mm:py-20 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold tracking-wider uppercase drop-shadow-sm text-primary">
                Shop your favourite style
              </p>
              <h2
                id="catalogue"
                className="mt-1 text-4xl font-extrabold drop-shadow-2xl sm:text-5xl sm:tracking-tight lg:text-6xl"
              >
                Experience the world and beyond
              </h2>
              <p className="max-w-xl mx-auto mt-5 text-xl tracking-wide text-gray-700">
                Discover the complete collection of NEKO sunglasses styles available online.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 mx-auto bg-white sm:px-6 lg:px-8 max-w-7xl">
          <ProductCategories catalogues={catalogues} />
        </section>
      </main>

      <Footer socialMediaIcons={socialMediaIcons} />
    </>
  );
}
