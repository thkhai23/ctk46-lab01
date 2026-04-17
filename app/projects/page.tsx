import Link from "next/link";

const projects = [
  { id: "1", name: "Website bán hàng", desc: "HTML, CSS, JS" },
  { id: "2", name: "App quản lý sinh viên", desc: "Java, SQLite" },
  { id: "3", name: "AI Image Generator", desc: "NextJS + API" },
];

export default function Projects() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🚀 Dự án của tôi</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="bg-white rounded-2xl shadow-md p-5 border hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
              
              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800">
                {project.name}
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">
                {project.desc}
              </p>

              {/* Button giả */}
              <div className="mt-4 text-blue-600 text-sm font-medium">
                Xem chi tiết →
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}