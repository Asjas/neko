import { Link, Outlet, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

interface Member {
  id: string;
  login: string;
}

export const loader: LoaderFunction = () => {
  // you can point to whatever org you want, ofc
  console.log("catalogue loader");
  return fetch("https://api.github.com/orgs/reacttraining/members");
};

export default function Team() {
  const data = useLoaderData<Member[]>();

  return (
    <div>
      <Header />
      <main>
        <h2>Team</h2>
        <ul>
          {data.map((member) => (
            <li key={member.id}>
              <Link to={member.login}>{member.login}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
