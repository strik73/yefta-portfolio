import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto py-12 px-10 mt-10 bg-stone-900 rounded-4xl text-justify">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg mb-4">
        Hello! I'm{" "}
        <span className="font-semibold">Yefta Steven Marcellius</span>, a
        passionate web developer with a love for crafting clean, modern, and
        user-friendly websites. I specialize in PHP, HTML, CSS, and SQL.
      </p>
      <p className="text-lg mb-4">
        I have a background in software engineering and a strong interest in
        backend and frontend. I enjoy transforming ideas into beautiful,
        functional code.
      </p>
      <p className="text-lg">
        Outside of coding, I love drawing, playing music, and exploring new
        technologies. I'm always looking to collaborate and grow as a developer.
        I'm also interested in learning game development such as Unity and
        Godot, and learning to create the assets using 3D and 2D softwares. I'm
        currently learning front-end development with React and Tailwind CSS.
      </p>
      <div className="text-center">
        <button
          onClick={() => navigate("/home")}
          className="bg-sky-600 text-white px-3 py-1 mt-3 ml-5 rounded-md hover:bg-sky-500 transition-all duration-300 ease-in-out"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
