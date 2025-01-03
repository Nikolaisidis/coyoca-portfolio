import "../css/styles.css";

const skills = [
  { name: "ReactJS", image: "/images/reactjs.png" },
  { name: "Next.js", image: "/images/nextjs.png" },
  { name: "JavaScript", image: "/images/javascript.png" },
  { name: "TypeScript", image: "/images/typescript.png" },
  { name: "Flask", image: "/images/flask.png" },
  { name: "Python", image: "/images/python.png" },
  { name: "Java", image: "/images/java.png" },
  { name: "Spring Boot", image: "/images/springboot.png" },
  { name: "HTML", image: "/images/html.png" },
  { name: "Tailwind", image: "/images/tailwind.png" },
  { name: "Prisma", image: "/images/prisma.png" },
  { name: "Supabase", image: "/images/supabase.png" },
  { name: "Firebase", image: "/images/firebase.png" },
  { name: "MySQL", image: "/images/mysql.png" },
  { name: "GitHub", image: "/images/github.png" },
  { name: "Vercel", image: "/images/vercel.png" },
  { name: "Render", image: "/images/render.png" },
  { name: "Aiven", image: "/images/aiven.png" },
  { name: "Git", image: "/images/git.png" },
  { name: "Postman", image: "/images/postman.png" },
  { name: "XAMPP", image: "/images/xampp.png" },
];
export default function Skills() {
  return (
    <div className="h-screen bg-black text-white">
      <div className="dotted-square absolute bottom-5 left-12 sm:left-24 transform -translate-x-1/2"></div>
      <div className="dotted-square absolute top-9 right-[-50px] sm:right-[-100px] transform -translate-x-1/2"></div>
      <h1 className="font-K2D font-bold text-4xl sm:text-6xl lg:text-7xl text-center sm:p-8 pt-28">
        My Skills
      </h1>
      <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-12 md:gap-16 justify-items-center p-4 sm:p-7">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-14 h-14 sm:w-28 sm:h-28 p-2 bg-gradient-to-r from-[rgb(80,216,144)] via-[rgb(255,255,255)] to-[rgb(79,152,202)] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_4px_15px_rgba(255,255,255,0.6)]"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-full h-full object-contain swing"
            />
            <p className="font-poppins font-semibold text-center mt-2 sm:mt-4 text-sm sm:text-lg">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
