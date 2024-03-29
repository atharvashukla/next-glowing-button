import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-[165px]">{children}</div>
  );
};

export default Content;
