import type { ReactNode } from "react";
import { NavLink as RemixNavLink } from "remix";

interface NavLink {
  to: string;
  children: ReactNode;
  fragmentedNav?: boolean;
}

interface NavLinkProps {
  isActive: boolean;
}

export default function NavLink({ to, children, fragmentedNav }: NavLink) {
  if (fragmentedNav) {
    return (
      <li className="mb-1">
        <RemixNavLink
          className="p-1 text-xl font-medium tracking-wide text-white no-underline rounded-sm opacity-50 hover:opacity-100"
          to={to}
        >
          {children}
        </RemixNavLink>
      </li>
    );
  }

  return (
    <li className="mb-1">
      <RemixNavLink
        className={(props: NavLinkProps) =>
          `text-xl text-white p-1 rounded-sm tracking-wide font-medium no-underline ${
            props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"
          }`
        }
        to={to}
      >
        {children}
      </RemixNavLink>
    </li>
  );
}
