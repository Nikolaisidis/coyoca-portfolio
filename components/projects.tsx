import { useEffect } from "react";
import {
  imgObject,
  loadGallery,
  mainImg,
  scrollLeft,
  scrollRight,
  toggleState3,
} from "../app/carousel.js";
import "../css/carousel.css";
import "../css/styles.css";

export default function Projects() {
  useEffect(() => {
    document.getElementById("outer3")?.addEventListener("click", toggleState3);
    document.getElementById("navRight")?.addEventListener("click", scrollRight);
    document.getElementById("navLeft")?.addEventListener("click", scrollLeft);
    document
      .getElementById("rightView")
      ?.addEventListener("click", scrollRight);
    document.getElementById("leftView")?.addEventListener("click", scrollLeft);
    document.getElementById("mainView")?.addEventListener("click", scrollRight);
    document.addEventListener("keyup", function (e) {
      if (e.keyCode === 37) {
        scrollLeft();
      } else if (e.keyCode === 39) {
        scrollRight();
      }
    });

    loadGallery();

    return () => {
      document
        .getElementById("outer3")
        ?.removeEventListener("click", toggleState3);
      document
        .getElementById("navRight")
        ?.removeEventListener("click", scrollRight);
      document
        .getElementById("navLeft")
        ?.removeEventListener("click", scrollLeft);
      document
        .getElementById("rightView")
        ?.removeEventListener("click", scrollRight);
      document
        .getElementById("leftView")
        ?.removeEventListener("click", scrollLeft);
        document
        .getElementById("mainView")
        ?.removeEventListener("click", scrollRight);
    };
  }, []);

  return (
    <div className="h-screen bg-black">
      <div className="circle w-[1300px] h-[1300px] -top-[1100px] -left-[1000px] bg-circle-gradient absolute"></div>
      <div className="circle w-[1300px] h-[1300px] -bottom-[1200px] -right-[900px] bg-circle-gradient absolute"></div>
      <div className="dotted-square absolute bottom-5 left-24 transform -translate-x-1/2"></div>
      <div className="dotted-square absolute top-9 right-[-100px] transform -translate-x-1/2"></div>
      <h1 className="font-K2D font-bold text-5xl md:text-7xl text-center p-4 text-white relative">
        Projects
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-8 relative">
        <div
          id="galleryContainer"
          className="relative w-full lg:w-[60%] flex justify-center"
        >
          <div id="leftView" className="hidden sm:block"></div>
          <div
            id="mainView"
            className="flex flex-col justify-center items-center z-10 sm:items-center sm:justify-end lg:p-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 p-3 font-K2D font-bold">
              <a
                href={imgObject[mainImg].projectLink}
                className="view-project bg-white px-4 py-2 rounded-xl text-center hover:bg-gray-200"
              >
                View Project
              </a>
              <a
                href={imgObject[mainImg].codeLink}
                className="view-code bg-white text-black px-4 py-2 rounded-xl text-center hover:bg-gray-200"
              >
                View Code
              </a>
            </div>
          </div>
          <div id="rightView" className="hidden sm:block"></div>
        </div>
        <div className="lg:w-[40%] flex flex-col items-start">
          <div
            id="description"
            className="mt-2 text-xl md:text-2xl lg:text-5xl font-K2D font-bold text-white"
          ></div>
          <div
            id="techStack"
            className="mt-2 text-base md:text-lg font-semibold font-K2D text-white"
          ></div>
          <div
            id="details"
            className="mt-2 text-xs md:text-base lg:text-lg font-poppins text-justify text-white"
          ></div>
        </div>
      </div>
    </div>
  );
}
