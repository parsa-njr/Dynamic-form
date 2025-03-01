"use client";

import React, { useState } from "react";
import Image from "next/image";
import sampleImg from "@/public/next.svg";
import sampleImg2 from "@/public/globe.svg";
import sampleImg3 from "@/public/window.svg";

const images = [sampleImg, sampleImg2, sampleImg3];

const RightSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className=" w-full md:w-[30%] flex flex-col items-center">
      {/* Image Container */}
      <div className="relative w-full max-w-2xl h-[500px] rounded-xl shadow-lg overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            width={300}
            height={300}
            className={`absolute inset-0 w-full h-full  transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          ❯
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          ❮
        </button>
      </div>

      {/* Thumbnail Row */}
      <div className="flex gap-2 mt-4">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`focus:outline-none transition ${
              activeIndex === index
                ? "border-2 border-red-500 opacity-100"
                : "opacity-70"
            }`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
