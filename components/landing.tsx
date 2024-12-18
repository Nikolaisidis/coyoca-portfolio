import "../css/styles.css";

export default function Landing() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Coyoca - Resume.pdf";
    link.download = "Coyoca - Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-y-8 mt-12 sm:mt-30 sm:flex-row sm:justify-center sm:gap-x-44">
      <div className="flex flex-col p-7 gap-y-5 text-center sm:text-left sm:w-fit sm:ml-9 sm:mt-7 text-white">
        <h2 className="font-K2D font-bold text-4xl mt-14 sm:text-7xl">
          <span className="inline lg:block">Alestair </span>
          <span className="inline lg:block">Cyril </span>
          <span className="inline lg:block">Coyoca </span>
        </h2>
        <p className="font-poppins text-sm sm:text-base text-justify sm:w-64">
          A dedicated and adaptable web developer currently studying at Cebu
          Institute of Technology University with hands-on experience in
          building web applications using React.js, Next.js, Java Spring Boot,
          and Tailwind CSS.
        </p>
      </div>
      <div className="sphere-container sm:mt-20 relative flex items-center justify-center ml-28">
        <div className="sphere w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]"></div>
        <div className="absolute grid grid-cols-2 gap-10 sm:gap-20 text-center">
          <button
            onClick={handleDownloadCV}
            className="bg-white p-2 rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
            title="Download CV"
          >
            <img
              src="/images/cv.png"
              alt="cv"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </button>
          <button
            onClick={() => handleClick("https://github.com/Nikolaisidis")}
            className="bg-white p-2 rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
            title="GitHub"
          >
            <img
              src="/images/github2.png"
              alt="github2"
              className="w-16 h-16 sm:w-20 sm:h-24 mx-auto"
            />
          </button>
          <button
            onClick={() =>
              handleClick("https://discord.com/users/722271902856380498")
            }
            className="bg-white p-2 rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
            title="Discord"
          >
            <img
              src="/images/dc.png"
              alt="dc"
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto"
            />
          </button>
          <button
            onClick={() =>
              handleClick("https://www.facebook.com/alestaircyril.coyoca.1")
            }
            className="bg-white p-2 rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
            title="Facebook"
          >
            <img
              src="/images/fb.png"
              alt="fb"
              className="w-20 h-16 sm:w-26 sm:h-20"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
