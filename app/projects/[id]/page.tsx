const projects = [
  { id: "1", name: "Website bán hàng", desc: "HTML, CSS, JS" },
  { id: "2", name: "App quản lý sinh viên", desc: "Java, SQLite" },
  { id: "3", name: "AI Image Generator", desc: "NextJS + API" },
];

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <h1>Không tìm thấy dự án</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{project.name}</h1>
      <p className="mt-4">{project.desc}</p>
    </div>
  );
}