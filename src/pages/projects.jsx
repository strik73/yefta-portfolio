import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const navigate = useNavigate();

  const slidesCms = ["/cmsdashboard.png", "/cmspage.png", "/cmsaddcontent.png"];

  const slidesBook = ["/booking.png", "/bookadmin.png", "/createbook.png"];

  return (
    <div className="max-w-3xl mx-auto py-12 px-8 bg-stone-900 rounded-4xl">
      <button
        onClick={() => navigate("/home")}
        className="flex items-center gap-1 bg-sky-600 text-white py-2 mt-3 px-3 rounded-md hover:bg-sky-500 transition-all duration-300 ease-in-out"
      >
        <ArrowLeft /> Go Back
      </button>
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className="my-8">
        <img src="/dashboard.png" className="rounded-2xl" alt="dashboard" />
      </div>
      <p className="text-lg mb-4">
        This page showcases some of my past projects. The projects are mostly
        made using Laravel and MySQL.
      </p>
      <hr className="border-gray-500" />
      <h3 className="text-3xl font-bold mt-5 mb-3">Projects List</h3>
      <ul className="list-disc text-xl ml-5">
        <li>Conten Management System</li>
        <li>Room Booking System</li>
      </ul>
      <div className="mt-10">
        <Collapse
          title="Content Management System"
          content="This is a CMS system where admins can manage the contents of a website. On the
          side panel there are a list of page where the admins can open and manage the corresponding data"
          slides={slidesCms}
        />
      </div>
      <div className="mt-10">
        <Collapse
          title="Room Booking System"
          content="This is a room booking system where users can book a room online. Users can
          see the available rooms and book them. Admins can manage the bookings and the rooms data on the separate admin panel, they also can approve the booking request.
          There is also a calendar view to see the booked rooms."
          slides={slidesBook}
        />
      </div>
    </div>
  );
}

function Collapse({ title, content, slides }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mx-auto border border-stone-600 rounded-xl shadow-sm"
      style={{ width: "700px" }}
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left font-medium"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-full p-4" : "max-h-0"
        }`}
      >
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-2xl shadow-lg"
          >
            {slides?.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-gray-200 mt-6 text-justify">{content}</p>
      </div>
    </div>
  );
}
