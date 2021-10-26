import ReactPlayer from "react-player";

export default function VideoPlayer() {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <ReactPlayer
        url="https://streamable.com/vuf9ox"
        className="absolute top-0 left-0"
        config={{ file: { attributes: { disablepictureinpicture: "true" } } }}
        width="100%"
        height="100%"
        playing={true}
        volume={0}
        pip={false}
        loop={true}
        muted={true}
        controls
      />
    </div>
  );
}
