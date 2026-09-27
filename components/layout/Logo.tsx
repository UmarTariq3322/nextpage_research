import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("group flex items-center gap-2.5 rounded-md", className)}
      aria-label="Nexpage Research, home"
    >
      <Image src="/logo-mark.png" alt="" width={256} height={256} priority className="h-9 w-9" sizes="36px" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[0.95rem] font-bold tracking-[0.08em] text-fg">NEXPAGE</span>
        <span className="mt-1 font-sans text-[0.62rem] font-semibold tracking-[0.34em] text-fg-mute">RESEARCH</span>
      </span>
    </Link>
  );
}
