import { useState } from "react";
import { Stream } from "@cloudflare/stream-react";

function VideoPlayer(props: any) {
  const [stop, setStopped] = useState(false);

  const videoIdOrSignedUrl = "616cb12aac6d7baab9ea6869e131ab01";

  function handleOnEnded(event: any) {
    console.log(event);
  }

  return (
    <div>
      <Stream
        controls
        // autoplay
        onPlay={(e: any) => console.log(e)}
        onEnded={(e: any) => console.log(e)}
        preload="auto"
        muted={true}
        loop={true}
        src={videoIdOrSignedUrl}
      />
    </div>
  );
}

export default VideoPlayer;
