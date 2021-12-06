export default function ProductFeaturesShowcase({ technologies }) {
  const {
    field1_heading,
    field1_content,
    field2_heading,
    field2_content,
    field3_heading,
    field3_content,
    field4_heading,
    field4_content,
  } = technologies[0];

  console.log(technologies);

  return (
    <div className="relative w-full pb-56 mx-auto overflow-x-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <div className="absolute w-full h-auto mx-auto bg-local bg-black bg-center bg-no-repeat bg-cover left-20 bg-tilted-frame"></div>
      </div>
      {/* Frame Information Dot 1 */}
      <div className="absolute z-10 opacity-50 top-48 left-32 hover:opacity-100">
        <div className="left-56 top-56 orange-dot__hover"></div>
        <div className="w-64 p-4">
          <h3 className="text-lg font-light tracking-wide text-white">{field4_heading}</h3>
          <p className="text-sm font-light tracking-wide text-gray-400">{field4_content}</p>
        </div>
      </div>
      {/* Frame Information Dot 2 */}
      <div className="absolute z-10 opacity-50 right-24 top-28 hover:opacity-100">
        <div className="right-72 top-48 orange-dot__hover"></div>
        <div className="w-64 p-4">
          <h3 className="text-lg font-light tracking-wide text-white">{field1_heading}</h3>
          <p className="text-sm font-light tracking-wide text-gray-400">{field1_content}</p>
        </div>
      </div>
      {/* Frame Information Dot 3 */}
      <div className="absolute z-10 opacity-50 bottom-64 right-36 hover:opacity-100">
        <div className="right-72 bottom-72 orange-dot__hover"></div>
        <div className="w-64 p-4">
          <h3 className="text-lg font-light tracking-wide text-white">{field2_heading}</h3>
          <p className="text-sm font-light tracking-wide text-gray-400">{field2_content}</p>
        </div>
      </div>
      {/* Frame Information Dot 4 */}
      <div className="absolute z-10 opacity-50 bottom-20 left-48 hover:opacity-100">
        <div className="left-56 bottom-64 orange-dot__hover"></div>
        <div className="w-64 p-4">
          <h3 className="text-lg font-light tracking-wide text-white">{field3_heading}</h3>
          <p className="text-sm font-light tracking-wide text-gray-400">{field3_content}</p>
        </div>
      </div>
    </div>
  );
}
