"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-4">
        😵 Có lỗi xảy ra!
      </h1>

      <p className="text-gray-600 mb-6">
        Đã xảy ra lỗi không mong muốn.
      </p>

      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Thử lại
      </button>
    </div>
  );
}