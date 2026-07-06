const Dashboard = lazy(() => import("./Layouts/DashboardLayout"));
import Signup from "./Pages/SignupPage";// add lazy import for SignupPage
import LoginPage from "./Pages/LoginPage";
const Dashboardhome = lazy(()=> import("./Pages/Dashboardhome"));
const HotelPage =lazy(()=> import("./Pages/ExplorePage"));
const RidePage =lazy(()=> import("./Pages/TripPage")) ;
const HotelDetailsPage =lazy (()=> import("./Pages/HotelDetailsPage")) ;
const FAQPage = lazy(()=> import( "./Pages/FAQPage"));
const ErrorPage = lazy(()=> import( "./Pages/ErrorPage"));
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import PublicRoute from "./components/Public";
import ProtectedRoute from "./components/Protected";
import { lazy } from "react";
import ErrorBoundaryPage from "./components/ErrorBoundaryPage";
  
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>    
  ), 
},
  {
    path: "/signup",
    element: (
       <PublicRoute>
      <Signup />
    </PublicRoute>
    ),
  },

  {
    path: "/dashboard",
    element: (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
    ),
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        index: true,
        element: <Dashboardhome />,
      },

      {
        path: "hotels",
        element: <HotelPage />,
      },
      {
        path: "rides",
        element: <RidePage />,
      },
      {
      path:"hotels/:hotelId",
      element: <HotelDetailsPage />
    },
  {
    path: "faq/hotels/:hotelId",
    element: <FAQPage />,
  }
    ],
  },{
     path:"*",
     element: <ErrorPage/>
  }
     
])

export default function App(){  
  return <RouterProvider router={router} />;
}