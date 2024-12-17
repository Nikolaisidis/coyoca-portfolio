import "../css/styles.css";

export default function Navbar() {
  return (
    <div className="navbar flex justify-center p-8">
      <div className="w-fit flex gap-6 p-5 rounded-3xl justify-center font-poppins font-semibold bg-white shadow-white">
        <a
          href="#home"
          className="hover:text-[#4F98CA] transition-colors duration-300"
        >
          HOME
        </a>
        <a
          href="#projects"
          className="hover:text-[#4F98CA] transition-colors duration-300"
        >
          PROJECTS
        </a>
        <a
          href="#skills"
          className="hover:text-[#4F98CA] transition-colors duration-300"
        >
          SKILLS
        </a>
        <a
          href="#contact"
          className="hover:text-[#4F98CA] transition-colors duration-300"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
}
