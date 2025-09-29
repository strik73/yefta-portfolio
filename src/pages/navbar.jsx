import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    // Also update <html> class for Tailwind's dark mode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <div className={`sticky top-0 z-50 mb-1 ${darkMode ? "dark" : ""}`}>
        <nav className="relative shadow-md bg-gray-200 dark:bg-gray-900 dark:text-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => navigate("/home")}
                      className="rounded-md px-5 py-2 text-2xl font-medium shadow-sm text-black bg-gray-300/40 outline-gray-400/20 dark:text-white dark:bg-gray-500/20 hover:scale-110 transition-all duration-200 ease-in-out"
                    >
                      Yefta's Portfolio
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={toggleTheme}
                  className="px-4 py-2 shadow-md rounded-lg bg-gray-300/40 outline outline-gray-400/20 dark:bg-gray-500/20 text-gray-900 dark:text-gray-100 transition"
                >
                  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
