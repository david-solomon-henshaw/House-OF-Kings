import video from "../assets/videos/vid.mp4"
import React from 'react';
import ReactPlayer from 'react-player';

const VideoHero = () => {

  return (
    <div className="video-hero">
      <ReactPlayer
        url={video}
        playing={true}
        loop={true}
        controls={false}
        width="100%"
        height="100"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div className="video-overlay">
        <h1 className="centered-text">Your Centered Text</h1>
      </div>
    </div>
  );
};

export default VideoHero;
