import React, { memo } from "react";

interface BadgeProps {
  title: string;
}
const Badge = ({ title }: BadgeProps) => {
  return (
    <div className="flex items-center justify-center w-full mt-14 mb-6">
      <span className="relative inline-flex items-center rounded-full bg-white border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
        <span className="flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        {title}
      </span>
    </div>
  );
};

export default memo(Badge);