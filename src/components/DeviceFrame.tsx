import React from "react";
import TiltCard from "./TiltCard";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function DeviceFrame({ children, title = "Portfolio OS" }: Props) {
  return (
    <TiltCard className="relative rounded-3xl p-[1px] bg-[linear-gradient(135deg,rgba(255,27,76,.55),rgba(255,27,76,.08),rgba(0,0,0,0))]">
      {/* outer shell */}
      <div className="relative rounded-3xl bg-black/55 border border-[rgba(255,27,76,0.25)] shadow-[0_0_60px_rgba(255,27,76,0.18)] overflow-hidden">
        {/* glossy highlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_200px_at_30%_0%,rgba(255,27,76,0.16),transparent_60%)]" />

        {/* top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,27,76,0.18)] bg-black/40">
          <span className="h-3 w-3 rounded-full bg-[rgba(255,27,76,0.55)] shadow-[0_0_14px_rgba(255,27,76,.55)]" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/10" />
          <div className="ml-3 text-xs text-white/55 tracking-wide">{title}</div>
        </div>

        {/* screen wrapper - IMPORTANT: no bottom padding */}
        <div className="relative px-4 pt-4 pb-0 sm:px-5 sm:pt-5 sm:pb-0">
          <div className="relative rounded-2xl border border-[rgba(255,27,76,0.18)] bg-black/35 overflow-hidden">
            {/* scanline overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,.06),rgba(255,255,255,.06)_1px,transparent_1px,transparent_4px)]" />
            <div className="relative">{children}</div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
