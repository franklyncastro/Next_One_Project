import React from "react";
import style from '../Style/VideoYT.module.css'

const VideoYT = () => {
  return (
    <div>
      <div className={style.videoContainer}>
        <iframe
        className={style.video}
          src="https://www.youtube.com/embed/wcVVXUV0YUY"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoYT;
