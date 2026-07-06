import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-400 max-w-md">
          The page you're looking for doesn't exist .
        </p>

        <Link
          to="/"                          
          className="inline-block mt-8 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;