import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./navbar";

export default function Certificate() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen font-sans bg-neutral-200 dark:bg-neutral-900">
        <Navbar />
        <div className="max-w-3xl mx-auto py-12 px-10 mt-7 shadow-md text-black bg-neutral-100 dark:bg-stone-800 dark:text-white rounded-4xl text-justify">
          <div className="text-left">
            <button
              onClick={() => navigate("/home")}
              className="flex items-center gap-1 bg-[#43766C] hover:bg-teal-600 dark:bg-sky-600 dark:hover:bg-sky-500 text-white py-2 mt-3 px-3 rounded-md transition-all duration-300 ease-in-out"
            >
              <ArrowLeft /> Go Back
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-3xl mb-4">
            These are my certificates and achievements I got in recent years.
          </p>
          <hr className="border-gray-500" />
          <div className="mt-3 mb-16">
            <h2 className="text-3xl font-bold mb-3 text-center">
              SQL Intermediate by HackerRank
            </h2>
            <iframe
              src="https://www.hackerrank.com/certificates/iframe/e049fd423b5f"
              frameborder="1"
              width={700}
              height={400}
              className="outline outline-neutral-300 dark:outline-neutral-900 rounded-lg"
            ></iframe>
          </div>
          <div className="mt-3 mb-16">
            <h2 className="text-3xl font-bold mb-3 text-center">
              JavaScript by HackerRank
            </h2>
            <iframe
              src="https://www.hackerrank.com/certificates/iframe/e615465db510"
              frameborder="1"
              width={700}
              height={400}
              className="outline outline-neutral-300 rounded-lg dark:outline-neutral-900"
            ></iframe>
          </div>
          <div className="mt-3 justify-items-center">
            <h2 className="text-3xl font-bold text-center">
              Intern Certificate at PT. Hartadinata Abadi Tbk. (6 Months)
            </h2>
            <img
              className="rounded-2xl gap-0 w-md rotate-90 outline outline-neutral-400 dark:outline-neutral-900"
              src="/hrta.png"
              alt="sql"
            />
          </div>
          <div className="mt-3 mb-16">
            <h2 className="text-3xl font-bold mb-3 text-center">
              Data Management Staff from BNSP
            </h2>
            <img
              className="rounded-2xl outline outline-neutral-400 dark:outline-neutral-900"
              src="/bnsp.png"
              alt="sql"
            />
          </div>
        </div>
        <footer className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Yefta Steven Marcellius. All rights
          reserved.
        </footer>
      </div>
    </>
  );
}
