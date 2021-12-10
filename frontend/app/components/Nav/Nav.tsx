import type { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

export default function Nav({ children }: NavProps) {
  return (
    <nav>
      <ul className="flex-col hidden p-0 m-0 text-right uppercase list-none md:flex">{children}</ul>
    </nav>
  );
}
