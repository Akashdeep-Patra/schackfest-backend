
import React, {useEffect, useState} from "react";

interface IVideoCard {
  videoUrl:string;
  imgUrl: string;
}

function VideoCard({ videoUrl,imgUrl }: IVideoCard) {

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleClickFullScreen = () => {
    const elem = videoRef.current;
    if (elem === null) return;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      elem.play();
    } else if ((elem as any).webkitRequestFullscreen) {
      /* Safari */
      (elem as any).webkitRequestFullscreen();
      elem.play();
    } else if ((elem as any).msRequestFullscreen) {
      /* IE11 */
      (elem as any).msRequestFullscreen();
      elem.play();
    }
  };

  return (
          <video
            src={videoUrl}
            ref={videoRef}
            muted
            poster={imgUrl}
            className="video-card"
            onClick={handleClickFullScreen}
          />
  );
}

export default VideoCard;
