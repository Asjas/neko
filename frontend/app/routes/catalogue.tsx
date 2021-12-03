import { Outlet } from "remix";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Team() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
