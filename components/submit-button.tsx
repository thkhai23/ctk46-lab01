"use client";

interface SubmitButtonProps {
  children: React.ReactNode;
  pendingText?: string;
  className?: string;
  disabled?: boolean;
  isPending?: boolean;
}

export default function SubmitButton({
  children,
  pendingText = "Đang xử lý...",
  className = "",
  disabled = false,
  isPending = false,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isPending || disabled}
      className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isPending ? pendingText : children}
    </button>
  );
}