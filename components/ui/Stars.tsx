import {Star} from "lucide-react";
import { memo } from "react";

const Stars = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 text-blue-500 ${
            i < rating ? "fill-current" : ""
          }`}
        />
      ))}
    </div>
  );
}

export default memo(Stars);