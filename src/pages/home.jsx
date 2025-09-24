import React, { useEffect, useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Home() {
  const contentsRef = useRef(null);

  const scrollToContents = () => {
    contentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans">
      {/*Header*/}
      <header className="relative shadow-sm">
        {/* BG Image (blurred) */}
        <div className="absolute inset-0 bg-[url(/living.jpg)] bg-cover bg-fixed bg-center blur-xs"></div>

        {/* Content (not blurred) */}
        <div className="relative z-10 max-w-xl mx-auto py-10 text-center text-white rounded-4xl">
          <h1 className="text-4xl font-bold mb-2">
            Hi, I'm Yefta Steven Marcellius
          </h1>
          <CircularPhoto />
          <div className="text-center mt-8">
            <button
              onClick={scrollToContents}
              className="bg-gray-800 hover:bg-gray-600 hover:scale-110 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out"
            >
              Learn More!
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12 text-2xl">
        <div className="max-w-4xl mx-auto px-6 bg">
          <h2 className="text-4xl font-semibold mb-4">Hello.</h2>
          <p className="leading-relaxed text-justify">
            I'm <span className="font-semibold">Yefta Steven Marcellius </span>a
            passionate developer focused on web development based on Bandung,
            Jawa Barat.
          </p>
          <p className="font-light leading-relaxed mt-4 text-justify">
            I mainly use <span className="font-semibold">Laravel</span> for web
            development.
          </p>
          <p className="font-light leading-relaxed mt-4 text-justify">
            I am also interested in graphics design and video editing, such as
            Adobe Photoshop, Canva, and Adobe Premiere Pro.
          </p>
        </div>
      </section>

      {/* Contents Section */}
      <section ref={contentsRef} className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl text-center font-semibold mb-6">
            Learn More About Me
          </h2>
          <div className="mx-auto max-w-3xl h-0.5 bg-gray-500 mb-6"></div>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="About Me"
              desc="This is my information page."
              link="/about"
              buttonText="Learn More"
              image="/ProfilePicture.JPG"
            />
            <ProjectCard
              title="Projects"
              desc="Collection of my projects."
              link="/projects"
              buttonText="Learn More"
              image="/projectsheader.png"
            />
            <ProjectCard
              title="Other Projects"
              desc="Collection of my other projects, such as graphics design and video editing."
              link="/otherprojects"
              buttonText="Learn More"
              image="/quiz.png"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
        <div className="text-center justify-self-center mb-4 columns-3">
          <a className="" href="https://www.facebook.com/share/1aFzUgxR4d/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-facebook-icon lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            className=""
            href="https://www.instagram.com/yefta_s.m?igsh=Z3Nrcm9kcnBmMjNt"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram-icon lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a className="" href="https://github.com/strik73">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>
        <a
          href="mailto:yeftasm73@gmail.com"
          className="inline-flex items-center gap-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail-icon lucide-mail"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Yefta Steven Marcellius. All rights
        reserved.
      </footer>
    </div>
  );
}

function ProjectCard({ title, desc, link, buttonText, image }) {
  const navigate = useNavigate();

  return (
    <div className="bg-neutral-900 w-3/4 py-4 px-2 rounded-lg shadow hover:shadow-md transition">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg mb-4 px-4"
      />

      <h3 className="text-xl font-semibold ml-4 mb-2">
        {<Badge text={title} />}
      </h3>
      <p className="ml-5">{desc}</p>
      <button
        onClick={() => navigate(link)}
        className="bg-sky-600 text-white px-3 py-1 mt-3 ml-5 rounded-md hover:bg-sky-500 transition-all duration-300 ease-in-out"
      >
        {buttonText}
      </button>
    </div>
  );
}

function CircularPhoto() {
  return (
    <div className="flex justify-center items-center mb-2">
      <img
        src="/bgputih.jpg"
        alt="Profile"
        className="w-60 h-60 rounded-full object-cover object-[center_20%] border-4 border-gray-200"
      />
    </div>
  );
}

function Badge({ text, color = "bg-blue-500", textColor = "text-white" }) {
  return (
    <span
      className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${color} ${textColor}`}
    >
      {text}
    </span>
  );
}
