import type { MetaFunction } from "remix";

import Header from "~/components/Header";
import VideoPlayer from "~/components/VideoPlayer";
import ProductFeaturesShowcase from "~/components/ProductFeaturesShowcase";
import ProductCategories from "~/components/ProductCategories";
import Footer from "~/components/Footer";

import { ClientOnly } from "~/hooks/useHydrated";

export const meta: MetaFunction = () => ({
  title: "Neko EYEWEAR",
  description: "Challenge the limits with Neko EYEWEAR.",
});

export default function Index() {
  return (
    <>
      <Header />

      <main>
        <section className="px-2 py-10 bg-secondary lg:pt-16 lg:pb-28 md:px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col">
              <h2 className="text-base font-bold tracking-wider uppercase text-primary">Design & Technology</h2>
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

            <div className="flex flex-col items-center w-full pt-32 mx-auto max-w-7xl xl:w-9/12">
              <div className="orange-dot"></div>
              <h2 className="text-3xl font-semibold tracking-wider text-center text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
                Wear it with ease and comfort
              </h2>
            </div>

            <section className="hidden mb-20 max-w-7xl lg:block">
              <ProductFeaturesShowcase />
            </section>
          </div>
        </section>

        <section className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold tracking-wider uppercase drop-shadow-sm text-primary">
                Shop your favourite style
              </p>
              <h2 className="mt-1 text-4xl font-extrabold drop-shadow-2xl sm:text-5xl sm:tracking-tight lg:text-6xl">
                Experience the world and beyond
              </h2>
              <p className="max-w-xl mx-auto mt-5 text-xl tracking-wide text-gray-700">
                Discover the complete collection of NEKO sunglasses styles available online.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto bg-white max-w-7xl">
          <ProductCategories />
        </section>
      </main>

      <Footer />
    </>
  );
}
