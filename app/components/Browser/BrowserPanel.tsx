import { ReactNode } from "react";

export default function BrowserPanel({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[400px] h-[200px] bg-[radial-gradient(63.94%_63.94%_at_50%_0%,_rgba(255,255,255,0.12)_0%,_rgba(255,255,255,0)_100%),_rgba(255,255,255,0.01)] backdrop-blur-[6px] rounded-[10px] before:content-[''] before:absolute before:top-[-1px] before:left-[-1px] before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:bg-[linear-gradient(180deg,_rgba(255,255,255,0.12)_0%,_rgba(255,255,255,0)_74.04%),_linear-gradient(0deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.04))] before:mask-[url('data:image/svg+xml,%3Csvg_width='402'_height='202'_viewBox='0_0_402_202'_fill='none'_xmlns='http://www.w3.org/2000/svg'%3E%3Crect_width='402'_height='202'_rx='10'_fill='black'/%3E%3C/svg%3E%0A')] before:mask-mode-alpha before:pointer-events-none after:content-[''] after:absolute after:top-[12px] after:left-[12px] after:w-[52px] after:h-[12px] after:bg-[url('data:image/svg+xml,%3Csvg_width='52'_height='12'_viewBox='0_0_52_12'_fill='none'_xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle_cx='6'_cy='6'_r='6'_fill='%23020308'_fill-opacity='0.12'/%3E%3Ccircle_cx='6'_cy='6'_r='5.5'_stroke='white'_stroke-opacity='0.1'/%3E%3Ccircle_cx='26'_cy='6'_r='6'_fill='%23020308'_fill-opacity='0.12'/%3E%3Ccircle_cx='26'_cy='6'_r='5.5'_stroke='white'_stroke-opacity='0.1'/%3E%3Ccircle_cx='46'_cy='6'_r='6'_fill='%23020308'_fill-opacity='0.12'/%3E%3Ccircle_cx='46'_cy='6'_r='5.5'_stroke='white'_stroke-opacity='0.1'/%3E%3C/svg%3E%0A')]">
      {children}
    </div>
  );
}
