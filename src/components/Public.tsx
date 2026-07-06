import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const PublicRoute = ({ children }: Props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;