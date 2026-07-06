import { Outlet, useLocation, Link } from "react-router-dom";
import {  Car, Hotel, Home, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
 
  const [loggingOut, setLoggingOut] =useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Rides", href: "/dashboard/rides", icon: Car },
    { name: "Hotels", href: "/dashboard/hotels", icon: Hotel },
  ];

  const isActive = (path: string) => {
    if (path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname.startsWith(path);
  };
  const handleLogout = () => {
    setLoggingOut(true)
    setTimeout(() => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
      setLoggingOut(false)
      navigate("/");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-950 pb-16 md:pb-0">
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 hidden md:block">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-white hidden sm:block">
                  Volyra
                </span>
              </a>
            </div>

            <div className="hidden  md:flex  gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                      isActive(item.href)
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}
               <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="ml-0 px-4 py-2 rounded-lg flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium transition-colors"
              >
                {loggingOut ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Logging out...
                  </>
                ) : (
                  <>
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </>
                )}
              </button>
            </div>
          </div>

        </nav>
      </header>

      <div className="md:hidden bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">Volyra</span>
          </Link>
            <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="ml-4 px-4 py-2 rounded-lg flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium transition-colors"
              >
                {loggingOut ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Logging out...
                  </>
                ) : (
                  <>
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </>
                )}
              </button>
        </div>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-50">
        <div className="grid grid-cols-3 gap-1 p-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <footer className="bg-gray-900 border-t border-gray-800 text-white mt-16">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold">Volyra</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your one-stop platform for booking rides and finding the perfect
                hotel.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    to="/dashboard/rides"
                    className="hover:text-white transition-colors"
                  >
                    Ride Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/hotels"
                    className="hover:text-white transition-colors"
                  >
                    Hotel Reservations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2026 TravelBook. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
