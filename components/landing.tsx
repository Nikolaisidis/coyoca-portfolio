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
    <div className="flex relative justify-center gap-x-44 mt-36">
      <div className="flex flex-col p-7 gap-y-10 w-fit ml-9 mt-7 text-white">
        <h2 className="font-K2D font-bold text-7xl">
          Alestair <br /> Cyril <br /> Coyoca
        </h2>
        <p className="font-poppins font-normal text-sm text-justify w-64">
          A dedicated and adaptable web developer currently studying at Cebu
          Institute of Technology University with hands-on experience in
          building web applications using React.js, Next.js, Java Spring Boot,
          and Tailwind CSS.
        </p>
      </div>
      <div className="sphere-container mt-20 relative flex items-center justify-center">
        <div className="sphere w-64 h-64 rounded-full"></div>
        <div className="absolute grid grid-cols-2 gap-20 text-center">
          <button
            onClick={handleDownloadCV}
            className="bg-white p-2 rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
          >
            <img src="/images/cv.png" alt="cv" className="w-20 h-20" />
          </button>
          <button
            onClick={() => handleClick("https://github.com/Nikolaisidis")}
            className="bg-white p-2 rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
          >
            <img
              src="/images/github2.png"
              alt="github2"
              className="w-20 h-24 mx-auto"
            />
          </button>
          <button
            onClick={() =>
              handleClick("https://discord.com/users/722271902856380498")
            }
            className="bg-white p-2 rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
          >
            <img src="/images/dc.png" alt="dc" className="w-20 h-20 mx-auto" />
          </button>
          <button
            onClick={() =>
              handleClick("https://www.facebook.com/alestaircyril.coyoca.1")
            }
            className="bg-white p-2 rounded-full flex items-center justify-center hover:scale-110 transform transition duration-300"
          >
            <img src="/images/fb.png" alt="fb" className="w-26 h-20" />
          </button>
        </div>
      </div>
    </div>
  );
}
