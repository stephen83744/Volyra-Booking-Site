import { Navigate } from "react-router-dom";
import PageLoader from "../Pages/SuspensePage";
import { Suspense } from "react";
type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return(
      <Suspense fallback ={<PageLoader/>}>
     {children}
    </Suspense>
  )
  
    
};

export default ProtectedRoute;