import { NavLink } from "remix";

interface NavLinkProps {
  isActive: boolean;
}

export default function Nav() {
  return (
    <nav>
      <ul className="flex-col hidden p-0 m-0 text-right uppercase list-none md:flex">
        <li className="mb-1">
          <NavLink
            className={(props: NavLinkProps) =>
              `text-xl text-white p-1 rounded-sm tracking-wide font-medium no-underline ${
                props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="mb-1">
          <a
            className="p-1 text-xl font-medium tracking-wide text-white no-underline rounded-sm opacity-50 hover:opacity-100"
            href="/#technology"
          >
            Technology
          </a>
        </li>
        <li className="mb-1">
          <a
            className="p-1 text-xl font-medium tracking-wide text-white no-underline rounded-sm opacity-50 hover:opacity-100"
            href="/#catalogue"
          >
            Catalogue
          </a>
        </li>
        <li>
          <NavLink
            className={(props: NavLinkProps) =>
              `text-xl text-white p-1 rounded-sm tracking-wide no-underline ${
                props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
