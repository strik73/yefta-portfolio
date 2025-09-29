import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import Navbar from "./navbar";

export default function OtherProjects() {
  const navigate = useNavigate();

  const graphicsSlides = [
    "/yefta-portfolio/hack.jpg",
    "/yefta-portfolio/seeksave.png",
    "/yefta-portfolio/flyer.png",
    "/yefta-portfolio/Header.png",
    "/yefta-portfolio/quiz.png",
  ];

  const embeds = [
    "https://www.instagram.com/p/DM3Dp7Ev04v/",
    "https://www.instagram.com/p/DNgIlrPPlI2/",
    "https://www.instagram.com/p/DOEMHaajw1q/",
  ];

  const embedsRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Re-process embeds every time embeds are rendered
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [embeds]);

  return (
    <>
      <div className="min-h-screen font-sans bg-neutral-200 dark:bg-neutral-900">
        <Navbar />
        <div className="max-w-3xl mx-auto py-12 px-10 mt-10 text-black bg-neutral-100 dark:bg-stone-800 dark:text-white rounded-4xl text-justify">
          <div className="text-left">
            <button
              onClick={() => navigate("/home")}
              className="flex items-center gap-1 bg-[#43766C] hover:bg-teal-600 dark:bg-sky-600 dark:hover:bg-sky-500 text-white py-2 mt-3 px-3 rounded-md transition-all duration-300 ease-in-out"
            >
              <ArrowLeft /> Go Back
            </button>
          </div>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Other Projects
          </h1>
          <p className="text-lg mb-4">
            This page showcases some of my other projects, including graphics
            design and video editing works.
          </p>
          <ul className="list-disc text-xl ml-5">
            <li>Graphics Design</li>
            <li>Video Edits</li>
          </ul>
          {/* Photo Edits */}
          <div className="mt-10">
            <h2 className="text-center text-2xl">
              <span className="font-semibold">Graphics Design</span>
            </h2>
            {/* Carousel */}
            <div className="w-full mx-auto my-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="rounded-2xl shadow-md h-full bg-neutral-100"
              >
                {graphicsSlides?.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-80 object-contain rounded-2xl py-5"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <p className="text-lg mb-4">
              Here are some of my graphics design works, including posters,
              banners, and social media graphics.I mostly use Adobe Photoshop as
              my main tool. I also use Canva and Adobe Illustrator as other
              editing tools.
            </p>
          </div>
          {/* Video Edit */}
          <div className="mt-10">
            <h2 className="text-center text-2xl my-4">
              <span className="font-semibold">Video Edits</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl mx-auto" ref={embedsRef}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                  className="rounded-2xl shadow-md bg-neutral-100"
                >
                  {embeds.map((url, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full object-contain rounded-2xl flex justify-center items-center">
                        <blockquote
                          className="instagram-media py-5"
                          data-instgrm-permalink={url}
                          data-instgrm-version="14"
                          style={{
                            background: "#fff",
                            border: 0,
                            margin: "20px auto",
                          }}
                        ></blockquote>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <p className="text-lg my-4">
                  Here are some of my video editing works. I usually use Adobe
                  Premiere Pro as my main video editing tools.
                </p>
              </div>
            </div>
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
