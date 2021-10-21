import type { MetaFunction, LinksFunction } from "remix";

import Header from "~/components/Header";
import VideoPlayer from "~/components/VideoPlayer";
import Footer from "~/components/Footer";

import { ClientOnly } from "~/hooks/useHydrated";

export const meta: MetaFunction = () => ({
  title: "Neko",
  description: "Welcome to remix!",
});

export const links: LinksFunction = () => {
  return [...VideoPlayer.links];
};

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <div className="px-2 py-10 bg-secondary lg:pt-16 lg:pb-28 md:px-6 lg:px-16">
          <div className="w-10/12 mx-auto 2xl:w-8/12 max-w-7xl">
            <div className="flex flex-col">
              <h2 className="text-base uppercase text-primary">Design & Technology</h2>
              <p className="my-8 text-3xl text-white lg:text-8xl">A radically original composition.</p>
              <p className="self-end w-9/12 pb-16 text-lg text-white lg:text-2xl lg:w-5/12">
                In the pursuit of delivering you the best products on the planet, we are constantly revising and
                updating our lines.
              </p>
            </div>
            <ClientOnly>
              <VideoPlayer />
            </ClientOnly>
          </div>
        </div>
        <div className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold tracking-wide uppercase text-primary">Shop your favourite style</p>
              <h2 className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
                Experience the world and beyond
              </h2>
              <p className="max-w-xl mx-auto mt-5 text-xl text-gray-700">
                Discover the complete collection of NEKO sunglasses styles available online.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
