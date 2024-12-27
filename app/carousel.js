export let imgObject = [
  {
    url: "/welltalk.svg",
    description: "Welltalk (Capstone Project)",
    techStack: "Next.js, HTML/CSS, Tailwind CSS, Java Springboot",
    details: "February 2024 - December 2024\nWellTalk is a comprehensive web-based platform developed for university counseling services, designed to streamline the process of managing appointments, counseling sessions, and student referrals. It offers an intuitive user experience for students, counselors, teachers, and administrators to interact with the system efficiently. Built with modern technologies like Next.js for the frontend and Java Spring Boot for the backend, the platform provides secure, real-time communication and management tools for academic counseling.",
    projectLink: "https://well-talk-ten.vercel.app/",
    codeLink: "https://github.com/joshuabriones/well-talk"
  },
  {
    url: "/airecipe.svg",
    description: "Rada Diha Badi (AI Recipe Generator)",
    techStack: "Next.js, GPT-3",
    details: "May 2024\nRada Diha Badi is an innovative AI-powered recipe generator designed to help users create personalized recipes based on the ingredients they have or the dish type they prefer. By leveraging the advanced language model capabilities of GPT-3, the application is able to understand natural language input and generate highly tailored, easy-to-follow recipes that match the user's requirements.",
    projectLink: "https://rada-diha-badi-recipe.vercel.app/",
    codeLink: "https://github.com/joshuabriones/rada-diha-badi-recipe"
  },
  {
    url: "/palitapp.svg",
    description: "Palit (App Development Project)",
    techStack: "React.js, HTML/CSS, Tailwind CSS, Java Springboot",
    details: "November 2023 - December 2023\nPalit is a dynamic web application designed to connect vendors and customers for cash-based transactions. With an integrated real-time geolocation feature, the platform facilitates a smooth connection between customers looking to place orders and vendors managing their stores. The app is built with React.js on the frontend for a responsive and fast user interface, while the backend is powered by Java Spring Boot for robust performance and seamless management.",
    projectLink: "https://www.youtube.com/watch?v=9H73tqDQ-FY",
    codeLink: "https://github.com/Palit-A-Nearby-Vendor-Commerce-App/Palit-A-Nearby-Vendor-Commerce-App"
  },
];

  export let mainImg = 0;
  export let prevImg = imgObject.length - 1;
  export let nextImg = 1;
  
  export function toggleState3() {
    let galleryView = document.getElementById("galleryView");
    let tilesView = document.getElementById("tilesView");
    let outer = document.getElementById("outer3");
    let slider = document.getElementById("slider3");
    let tilesContainer = document.getElementById("tilesContainer");
    if (slider.classList.contains("active")) {
      slider.classList.remove("active");
      outer.classList.remove("outerActive");
      galleryView.style.display = "flex";
      tilesView.style.display = "none";
  
      while (tilesContainer.hasChildNodes()) {
        tilesContainer.removeChild(tilesContainer.firstChild);
      }
    } else {
      slider.classList.add("active");
      outer.classList.add("outerActive");
      galleryView.style.display = "none";
      tilesView.style.display = "flex";
  
      for (let i = 0; i < imgObject.length - 1; i++) {
        let tileItem = document.createElement("div");
        tileItem.classList.add("tileItem");
        tileItem.style.background = "url(" + imgObject[i] + ")";
        tileItem.style.backgroundSize = "contain";
        tilesContainer.appendChild(tileItem);
      }
    }
  }

  export function loadGallery() {
    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgObject[mainImg].url + ")";
  
    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgObject[prevImg].url + ")";
  
    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg].url + ")";
  
    let description = document.getElementById("description");
    description.textContent = imgObject[mainImg].description;
  
    let techStack = document.getElementById("techStack");
    techStack.textContent = imgObject[mainImg].techStack;
  
    let details = document.getElementById("details");
    details.textContent = imgObject[mainImg].details;

    let viewProjectLink = document.querySelector(".view-project");
    viewProjectLink.href = imgObject[mainImg].projectLink;
  
    let viewCodeLink = document.querySelector(".view-code");
    viewCodeLink.href = imgObject[mainImg].codeLink;
  }

  export function scrollRight() {
    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= imgObject.length - 1) {
      nextImg = 0;
    } else {
      nextImg++;
    }
    loadGallery();
  }
  
  export function scrollLeft() {
    nextImg = mainImg;
    mainImg = prevImg;
  
    if (prevImg === 0) {
      prevImg = imgObject.length - 1;
    } else {
      prevImg--;
    }
    loadGallery();
  }
  