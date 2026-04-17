import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      
      {/* Emoji lớn */}
      <div className="text-6xl mb-4 animate-bounce">🚫</div>

      <h1 className="text-3xl font-bold mb-2">404 - Không tìm thấy</h1>

      <p className="text-gray-600 mb-6">
        Trang bạn đang tìm không tồn tại hoặc đã bị xoá.
      </p>

      <Link
        href="/"
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Về trang chủ
      </Link>
    </div>
  );
}