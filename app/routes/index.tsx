import type { MetaFunction } from "remix";

import Header from "~/components/Header";
import VideoPlayer from "~/components/VideoPlayer";
import Footer from "~/components/Footer";

import { ClientOnly } from "~/hooks/useHydrated";

export const meta: MetaFunction = () => ({
  title: "Neko",
  description: "Welcome to remix!",
});

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <section className="px-2 py-10 bg-secondary lg:pt-16 lg:pb-28 md:px-6 lg:px-16">
          <div className="mx-auto max-w-screen-2xl">
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

            <ClientOnly>
              <VideoPlayer />
            </ClientOnly>

            <div className="flex flex-col items-center pt-32 mx-auto xl:w-8/12">
              <div className="orange-dot"></div>
              <h2 className="text-3xl font-semibold tracking-wider text-center text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
                Wear it with ease and comfort
              </h2>
            </div>

            <section className="relative w-full pb-56 mb-20 overflow-x-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <div className="absolute w-full h-auto mx-auto bg-local bg-black bg-center bg-no-repeat bg-cover left-20 bg-tilted-frame"></div>
              </div>
              {/* Frame Information Dot 1 */}
              <div className="absolute z-10 opacity-50 top-20 left-36 hover:opacity-100">
                <div className="left-20 top-72 orange-dot__hover"></div>
                <div className="w-56 p-4">
                  <h3 className="text-lg font-light tracking-wide text-white">Color Options</h3>
                  <p className="text-sm tracking-wide text-gray-400 font-extralight">
                    Sleek, compact design makes it easy to charge on the go. (needs to be replaced with real text)
                  </p>
                </div>
              </div>
              {/* Frame Information Dot 2 */}
              <div className="absolute z-10 opacity-50 right-56 top-10 hover:opacity-100">
                <div className="right-72 top-40 orange-dot__hover"></div>
                <div className="w-56 p-4">
                  <h3 className="text-lg font-light tracking-wide text-white">Color Options</h3>
                  <p className="text-sm tracking-wide text-gray-400 font-extralight">
                    Sleek, compact design makes it easy to charge on the go. (needs to be replaced with real text)
                  </p>
                </div>
              </div>
              {/* Frame Information Dot 3 */}
              <div className="absolute z-10 opacity-50 bottom-72 right-36 hover:opacity-100">
                <div className="right-96 bottom-80 orange-dot__hover"></div>
                <div className="w-56 p-4">
                  <h3 className="text-lg font-light tracking-wide text-white">Adjustable Nose Pads</h3>
                  <p className="text-sm tracking-wide text-gray-400 font-extralight">
                    Telescoping arms smoothly extend and stay where you set them, for a consistent fit and seal.
                  </p>
                </div>
              </div>
              {/* Frame Information Dot 4 */}
              <div className="absolute z-10 opacity-50 hover:opacity-100">
                <div className="left-80 bottom-80 orange-dot__hover"></div>
                <div className="w-56 p-4">
                  <h3 className="text-lg font-light tracking-wide text-white">Grips & Prevents Slipping</h3>
                  <p className="text-sm tracking-wide text-gray-400 font-extralight">
                    Designed to satisfy demanding modern lifestyles at all hours. Our clear lenses filter UV rays and
                    Blue Light.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold tracking-wider uppercase text-primary">Shop your favourite style</p>
              <h2 className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
                Experience the world and beyond
              </h2>
              <p className="max-w-xl mx-auto mt-5 text-xl tracking-wide text-gray-700">
                Discover the complete collection of NEKO sunglasses styles available online.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
