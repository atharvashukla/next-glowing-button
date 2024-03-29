import { ReactNode } from "react";

export default function Tabs({ children }: { children: ReactNode }) {
  return <div className="flex items-center ml-[84px] h-[36px]">{children}</div>;
}
