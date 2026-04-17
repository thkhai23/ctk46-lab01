export default function Loading() {
  return (
    <div className="p-4 animate-pulse">
      {/* Category + date */}
      <div className="flex gap-3 mb-4">
        <div className="h-5 w-20 bg-gray-300 rounded"></div>
        <div className="h-5 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* Title */}
      <div className="h-8 bg-gray-300 rounded w-2/3 mb-6"></div>

      {/* Content */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
}