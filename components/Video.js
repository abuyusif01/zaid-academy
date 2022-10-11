import Image from "next/image";
import React from "react";
import Banner1 from "../utils/banner1.jpeg";
// import VideoBg from "../utils/about.MP4";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const Video = () => {
  return (
    <div>
      <div className="relative w-[100vw] min-h-[450px] md:min-h-[600px]">
        <Image src={Banner1} alt="banner" layout="fill" objectFit="cover" />
      </div>
      <div
        style={style}
        className="absolute top-0 left-0 text-white inline-flex px-4 md:px-32 flex-col justify-center w-[100vw] min-h-[450px] md:min-h-[600px] md:space-y-6"
      >
        <h1 className="text-7xl font-bold leading-relaxed">Instructors</h1>
        <p className="md:w-2/3 leading-relaxed mt-10 italic text-sm md:text-xl">
          Videos
        </p>
      </div>
    </div>
  );
};

export default Video;
