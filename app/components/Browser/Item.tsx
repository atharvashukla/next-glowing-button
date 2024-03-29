import React from "react";

interface ItemProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ active, onClick, children }, ref) => {
    return (
      <div
        ref={ref}
        className={`
        min-w-[80px] font-inter font-normal text-sm leading-6 text-center cursor-pointer relative 
        rounded-t-md before:content-[''] before:w-full before:h-[30px] before:absolute before:rounded-t-md 
        before:top-[-7px] before:left-0 before:overflow-hidden before:transition-all before:duration-300 
        ${
          active
            ? "before:opacity-50 before:transition-delay-[220ms]"
            : "before:opacity-0 before:transition-delay-0"
        }
        ${
          active
            ? "bg-gradient-to-b from-white/30 via-white/30 to-white"
            : "bg-gradient-to-b from-white/15 via-white/15 to-white/50"
        }
        bg-clip-text text-transparent
      `}
        style={{
          backgroundImage: active
            ? `radial-gradient(39% 100% at 48% -20%, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%), 
             radial-gradient(100% 100% at 30.75% 0%, rgba(255, 255, 255, 0.12) 60%, rgba(255, 255, 255, 0) 100%)`
            : undefined,
        }}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

export default Item;
