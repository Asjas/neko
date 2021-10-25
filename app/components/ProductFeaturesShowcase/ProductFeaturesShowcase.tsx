export default function ProductFeaturesShowcase() {
  return (
    <div className="relative w-full pb-56 mx-auto overflow-x-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <div className="absolute w-full h-auto mx-auto bg-local bg-black bg-center bg-no-repeat bg-cover left-20 bg-tilted-frame"></div>
      </div>
      {/* Frame Information Dot 1 */}
      <div className="absolute z-10 opacity-50 top-48 left-32 hover:opacity-100">
        <div className="left-56 top-56 orange-dot__hover"></div>
        <div className="w-64 p-4">
          <h3 className="text-lg font-light tracking-wide text-white">Color Options</h3>
          <p className="text-sm font-light tracking-wide text-gray-400">(needs to be replaced with real copytext)</p>
        </div>
      </div>
      {/* Frame Information Dot 2 */}
      <div className="absolute z-10 opacity-50 right-28 top-28 hover:opacity-100">
        <div className="right-72 top-40 orange-dot__hover"></div>
        <div className="w-64 p-4">
          <h3 className="text-lg font-light tracking-wide text-white">Frame Lenses</h3>
          <p className="text-sm font-light tracking-wide text-gray-400">
            Designed to satisfy demanding modern lifestyles at all hours, our clear lenses filter UV rays and Blue
            Light.
          </p>
        </div>
      </div>
      {/* Frame Information Dot 3 */}
      <div className="absolute z-10 opacity-50 bottom-64 right-36 hover:opacity-100">
        <div className="right-72 bottom-72 orange-dot__hover"></div>
        <div className="w-64 p-4">
          <h3 className="text-lg font-light tracking-wide text-white">Adjustable Nose Pads</h3>
          <p className="text-sm font-light tracking-wide text-gray-400">
            Telescoping arms smoothly extend and stay where you set them, for a consistent fit and seal.
          </p>
        </div>
      </div>
      {/* Frame Information Dot 4 */}
      <div className="absolute z-10 opacity-50 bottom-20 left-48 hover:opacity-100">
        <div className="left-56 bottom-64 orange-dot__hover"></div>
        <div className="w-64 p-4">
          <h3 className="text-lg font-light tracking-wide text-white">Grips & Prevents Slipping</h3>
          <p className="text-sm font-light tracking-wide text-gray-400">
            Medical grade silicon makes for non-slipping frames (needs more copytext).
          </p>
        </div>
      </div>
    </div>
  );
}
