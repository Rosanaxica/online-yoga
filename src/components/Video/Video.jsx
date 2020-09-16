import React from "react";
import Card from "../Card/Card";
import "./style.css";
import video from "../../assets/videos/yoga.mp4"

const Video = () => {
  return (
    <>
      <div className="video__container">
            <div className="video_video">
            <div className="video__badge text--bold">Ao vivo!</div>
            <video alt="video"
              className="video"
              controls
              controlsList="nodownload"
              src={video}
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            ></video>
          </div>
          <div className="card__container">
       <Card/>
        </div>
      </div>
    </>
  );
};

export default Video;
