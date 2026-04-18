export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
      <p className="text-lg text-gray-500">Đang tải dữ liệu quốc gia...</p>
    </div>
  );
}
