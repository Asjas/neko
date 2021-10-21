import React, { useState } from "react";
import videojs from "video.js";
import "videojs-youtube";
import videojsStylesheet from "video.js/dist/video-js.css";

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

      const player = (playerRef.current = videojs(
        videoElement,
        { controlBar: { liveDisplay: true, pictureInPictureToggle: false }, ...options },
        () => {
          setMuted(true);
          onReady && onReady(player);
        },
      ));
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
        preload="auto"
        muted={muted}
        loop={true}
        data-setup='{ "techOrder": ["youtube"], "fluid": true, "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=918Fmm21MQQ" }], "youtube": { "muted": true, "controls": 0, "iv_load_policy": 1 } }'
      />
    </div>
  );
}

export default VideoPlayer;

VideoPlayer.links = [{ rel: "stylesheet", href: videojsStylesheet }];
