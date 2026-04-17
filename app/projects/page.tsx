import Link from "next/link";

const projects = [
  { id: "1", name: "Website bán hàng", desc: "HTML, CSS, JS" ,status: "Hoàn thành", tech: ["HTML", "CSS", "JavaScript"],title: "Website bán hàng", description: "Một website bán hàng đơn giản với các tính năng cơ bản."},
  { id: "2", name: "App quản lý sinh viên", desc: "Java, SQLite" ,status: "Đang thực hiện", tech: ["Java", "SQLite"],title: "App quản lý sinh viên", description: "Một ứng dụng quản lý thông tin sinh viên."},
  { id: "3", name: "AI Image Generator", desc: "NextJS + API" ,status: "Hoàn thành", tech: ["NextJS", "API"],title: "AI Image Generator", description: "Một công cụ tạo hình ảnh bằng trí tuệ nhân tạo."},
];

export default function ProjectsPage() {	
  return (	
    <div className="max-w-5xl mx-auto px-4 py-12">	
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>	
	
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">	
        {projects.map((project, index) => (	
          <div	
            key={index}	
            className="border rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col"	
          >	
            <div className="flex items-center justify-between mb-2">	
              <h2 className="text-xl font-semibold">{project.title}</h2>	
              <span	
                className={`text-xs px-2 py-1 rounded-full ${	
                  project.status === "Hoàn thành"	
                    ? "bg-green-100 text-green-700"	
                    : "bg-yellow-100 text-yellow-700"	
                }`}	
              >	
                {project.status}	
              </span>	
            </div>	
	
            <p className="text-gray-600 mb-4 flex-1">{project.description}</p>	
	
            <div className="flex flex-wrap gap-2">	
              {project.tech.map((t) => (	
                <span	
                  key={t}	
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded full"	
                >	
                  {t}	
                </span>	
              ))}	
            </div>	
          </div>	
        ))}	
      </div>	
        </div>	
  );	
}
