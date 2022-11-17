
import React from "react";

interface IVideoCard {
  url:string
}

function VideoCard({ url }: IVideoCard) {

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleClickFullScreen = () => {
    const elem = videoRef.current;
    if (elem === null) return;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) {
      /* Safari */
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) {
      /* IE11 */
      (elem as any).msRequestFullscreen();
    }
  };

  return (
          <video
            src={url}
            ref={videoRef}
            muted
            autoPlay
            className="video-card"
            onClick={handleClickFullScreen}
          />
  );
}

export default VideoCard;
