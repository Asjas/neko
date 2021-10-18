import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData, Link } from "remix";
import VideoPlayer from "../components/VideoPlayer";

export const meta: MetaFunction = () => ({
  title: "Remix Starter",
  description: "Welcome to remix!",
});

export const loader: LoaderFunction = async () => ({ message: "this is awesome 😎" });

export default function Index() {
  const data = useLoaderData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      <VideoPlayer />
      <p>
        <a href="https://docs.remix.run">Check out the docs</a> to get started.
      </p>
      <p>Message from the loader: {data.message}</p>
      <p>
        <Link to="not-found">Link to 404 not found page.</Link> Clicking this link will land you in your root
        CatchBoundary component.
      </p>
    </div>
  );
}
