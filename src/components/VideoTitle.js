import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl fond-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" hover:opacity-50 p-4 px-12 bg-white text-black text-2xl bg-opacity-50 rounded-lg">
          ▶️Play
        </button>
        <button className="mx-2 p-4 px-12 bg-gray-400 text-white text-2xl bg-opacity-50 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
