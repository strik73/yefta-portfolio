import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <p className="text-lg mb-4">
        This page showcases some of my past projects. The projects are mostly
        made using Laravel and MySQL.
      </p>
    </div>
  );
}
