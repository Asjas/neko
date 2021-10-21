import { NavLink } from "remix";

export default function Nav() {
  return (
    <nav>
      <ul role="list" className="flex-col hidden p-0 m-0 text-right uppercase list-none md:flex">
        <li className="w-auto">
          <NavLink
            className={(props) =>
              `text-xl text-white no-underline ${props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"}`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(props) =>
              `text-xl text-white no-underline ${props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"}`
            }
            to="/technology"
          >
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(props) =>
              `text-xl text-white no-underline ${props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"}`
            }
            to="/sunglasses"
          >
            Sunglasses
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(props) =>
              `text-xl text-white no-underline ${props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"}`
            }
            to="/prescription-frames"
          >
            Prescription Frames
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(props) =>
              `text-xl text-white no-underline ${props.isActive ? "nav-link__active" : "opacity-50 hover:opacity-100"}`
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
