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
      document.removeEventListener("keyup", function (e) {
        if (e.keyCode === 37) {
          scrollLeft();
        } else if (e.keyCode === 39) {
          scrollRight();
        }
      });
    };
  }, []);

  return (
    <div className="h-screen bg-black">
      <div className="circle w-[1500px] h-[1500px] -top-[1300px] -left-[1000px] bg-circle-gradient absolute"></div>
      <div className="circle w-[1500px] h-[1500px] -bottom-[1300px] -right-[1000px] bg-circle-gradient absolute"></div>
      <div className="dotted-square absolute bottom-5 left-24 transform -translate-x-1/2"></div>
      <div className="dotted-square absolute top-9 right-[-100px] transform -translate-x-1/2"></div>
      <h1 className="font-K2D font-bold text-7xl text-center lg:p-8 md:p-4 text-white relative">
        Projects
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 p-8 md:p-4 lg:p-28 relative">
        <div
          id="galleryContainer"
          className="flex flex-col items-center lg:items-start"
        >
          <div id="leftView"></div>
          <div
            id="mainView"
            className="relative bg-gray-800 w-[300px] h-[300px] flex justify-center items-end z-10" 
          >
            <div className="flex gap-8 p-8 font-K2D font-bold">
              <a
                href={imgObject[mainImg].projectLink}
                className="view-project bg-white  px-4 py-2 rounded-xl hover:bg-gray-200"
              >
                View Project
              </a>
              <a
                href={imgObject[mainImg].codeLink}
                className="view-code bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200"
              >
                View Code
              </a>
            </div>
          </div>
          <div id="rightView"></div>
        </div>
        <div className="lg:items-start">
          <div
            id="description"
            className="mt-4 text-2xl lg:text-5xl font-K2D font-bold"
          ></div>
          <div
            id="techStack"
            className="mt-2 text-lg font-semibold font-K2D"
          ></div>
          <div
            id="details"
            className="mt-2 text-base lg:text-4xl font-poppins text-justify"
          ></div>
        </div>
      </div>
    </div>
  );
}
