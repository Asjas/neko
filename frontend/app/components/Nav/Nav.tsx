import { NavLink } from "remix";

interface NavLinkProps {
  isActive: boolean;
}

export default function Nav() {
  return (
    <nav>
      <ul className="flex-col hidden p-0 m-0 text-right uppercase list-none md:flex">
        <li className="w-auto">
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
        <li>
          <NavLink
            className={(props: NavLinkProps) =>
              `text-xl text-white p-1 rounded-sm tracking-wide font-medium no-underline ${
                props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"
              }`
            }
            to="/technology"
          >
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(props: NavLinkProps) =>
              `text-xl text-white p-1 rounded-sm no-underline tracking-wide font-medium ${
                props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"
              }`
            }
            to="/sunglasses"
          >
            Sunglasses
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(props: NavLinkProps) =>
              `text-xl text-white p-1 rounded-sm tracking-wide font-medium no-underline ${
                props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"
              }`
            }
            to="/prescription-frames"
          >
            Prescription Frames
          </NavLink>
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
