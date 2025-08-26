import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      // style={{
      //   backgroundImage: "url('/starry-bg.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-light mb-4">
          <Typewriter
            words={[
              "Welcome to my portfolio!",
              "Click the button below to continue.",
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </h1>
        <button
          onClick={() => navigate("/home")}
          className="my-4 px-6 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-200 transition hover:scale-110"
        >
          Enter!
        </button>
      </div>
    </div>
  );
}
