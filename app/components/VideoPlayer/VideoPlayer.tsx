import React, { useState } from "react";
import videojs from "video.js";
import "videojs-youtube";
import "video.js/dist/video-js.css";

videojs.log.level("off");

interface IVideoPlayerProps {
  options: any;
  onReady: any;
}

function VideoPlayer(props: any) {
  const [muted, setMuted] = useState(false);
  const videoRef = React.useRef(null);
  const playerRef = React.useRef<any>(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      }));
    }
  }, [options]);

  React.useEffect(
    () => () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    },
    [],
  );

  return (
    <div>
      <video
        className="video-js vjs-default-skin vjs-16-9"
        ref={videoRef}
        controls={true}
        autoPlay={true}
        muted={true}
        preload="auto"
        loop={true}
        data-setup='{
          "techOrder": ["youtube"],
          "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=918Fmm21MQQ" }],
          "fluid": true,
          "youtube": { "muted": true, "controls": 0, "iv_load_policy": 1 },
        }'
      />
    </div>
  );
}

export default VideoPlayer;
