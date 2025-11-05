import React from "react";
import heroVideo from "../assets/video-1.mp4"

const Upper = () => {
  return (
    <section className="relative w-full h-[720px] flex items-center justify-center overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Love Traveling?
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          What are you waiting for..
        </p>
        <button className="bg-transparent hover:bg-white-700 px-6 py-3 rounded-lg font-semibold border-2 gap-4">
          Get Started
        </button>
      </div>
    </section>
  );
};
export default Upper;

