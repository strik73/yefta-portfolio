import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./navbar";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen font-sans bg-neutral-200 dark:bg-neutral-900">
        <Navbar />
        <div className="max-w-3xl mx-auto pt-7 mt-7 pb-20 px-12 shadow-md text-black bg-neutral-100 dark:bg-stone-800 dark:text-white rounded-4xl text-justify">
          <div className="text-left">
            <button
              onClick={() => navigate("/home")}
              className="flex items-center gap-1 bg-[#43766C] hover:bg-teal-600 dark:bg-sky-600 dark:hover:bg-sky-500 text-white py-2 mt-3 px-3 rounded-md  transition-all duration-300 ease-in-out"
            >
              <ArrowLeft /> Go Back
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Personal Information
          </h2>
          <table className="mx-auto mb-6">
            <tbody>
              <tr>
                <td className="pr-4 font-semibold">Name</td>
                <td className="pr-4">:</td>
                <td>Yefta Steven Marcellius</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Birth Place</td>
                <td className="pr-4">:</td>
                <td>Bandung, Jawa Barat, Indonesia</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Birth Date</td>
                <td className="pr-4">:</td>
                <td>07-03-2003</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Email</td>
                <td className="pr-4">:</td>
                <td>yeftasm73@gmail.com</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Instagram</td>
                <td className="pr-4">:</td>
                <td>@yefta_s.m</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Github</td>
                <td className="pr-4">:</td>
                <td>
                  <a
                    className="font-semibold"
                    href="https://github.com/strik73"
                  >
                    github.com/strik73
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg mb-4">
            Hello! I'm
            <span className="font-semibold"> Yefta Steven Marcellius</span>, a
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
            technologies. I'm always looking to collaborate and grow as a
            developer. I'm also interested in learning game development such as
            Unity and Godot, and learning to create the assets using 3D and 2D
            softwares. I'm currently learning front-end development with React
            and Tailwind CSS.
          </p>
        </div>
        <footer className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Yefta Steven Marcellius. All rights
          reserved.
        </footer>
      </div>
    </>
  );
}
