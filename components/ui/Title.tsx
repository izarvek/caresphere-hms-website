import React, { memo } from "react";

interface TitleProps {
  title: string;
}

const Title = memo(({ title }: TitleProps) => {
  return (
    <div className="flex justify-center mt-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-800 leading-tight">
        {title}
      </h1>
    </div>
  );
});

export default Title;
