"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold mb-4 text-red-600">Đã xảy ra lỗi!</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Không thể tải dữ liệu quốc gia. Vui lòng kiểm tra lại kết nối hoặc thử lại sau.
      </p>
      <Button onClick={() => reset()} variant="default">
        Thử lại
      </Button>
    </div>
  );
}
