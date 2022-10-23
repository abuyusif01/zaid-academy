import React, { useRef, useState } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.3)",
};

const Video = ({ url }) => {
  const [playing, SetPlaying] = useState(false);
  const [hideControl, setHideControl] = useState(false);
  const videoRef = useRef();
  const onPlay = () => {
    videoRef.current.play();
    SetPlaying(true);
  };
  const onPause = () => {
    videoRef.current.pause();
    SetPlaying(false);
  };
  return (
    <div className="w-full relative">
      <video
        onMouseEnter={() => setHideControl(true)}
        onMouseLeave={() => setHideControl(false)}
        ref={videoRef}
        autoPlay={true}
        loop={false}
        muted={false}
        className="w-full h-full"
      >
        <source src={url} />
      </video>
      <div
        style={style}
        className="absolute top-0 left-0 text-white inline-flex px-4 md:px-32 flex-col justify-center items-center w-full h-full"
      >
        <div>
          {playing ? (
            <div
              className="cursor-pointer bg-indigo-500 relative w-32 h-32 flex justify-center items-center rounded-full opacity-40"
              onClick={onPause}
            >
              <BsFillPauseFill className="text-6xl justify-center" />
            </div>
          ) : (
            <div
              className="cursor-pointer bg-indigo-500 relative w-32 h-32 flex justify-center items-center rounded-full opacity-20"
              onClick={onPlay}
            >
              <BsFillPlayFill className="text-5xl justify-center" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
