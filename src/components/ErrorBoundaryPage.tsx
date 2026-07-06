import { useRouteError, Link } from "react-router-dom";

const ErrorBoundaryPage = () => {
  const error:any = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-4">
      <h1 className="text-6xl font-bold">Oops!</h1>

      <p className="mt-4 text-slate-400">
        Something went wrong.
      </p>

      <p className="mt-2 text-red-400">
        {error?.statusText || error?.message}
      </p>

      <Link
        to="/dashboard"
        className="mt-6 rounded-xl bg-white text-black px-5 py-3"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorBoundaryPage;