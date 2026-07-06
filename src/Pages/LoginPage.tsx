import PageLoader from "./SuspensePage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import SubmitButton from "../components/SubmitButton";
const STORAGE_KEY = "logindata";

type User = {
  fullName: string;
  password: string;
  email: string;
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const  [pageLoading, setPageLoading] = useState(false);

  const retrieve = (): User[] => {
    const info = localStorage.getItem(STORAGE_KEY);
    if (!info) {
      console.log("No data");
      return [];
    }
    const parsed = JSON.parse(info);
    return parsed;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonLoading(true);
      setError("");
      setMessage("");
      if (!email || !password) {
        setError("Please enter both email and password");
        setButtonLoading(false);
        return;
      }

      const users = retrieve();
      const existing = users.find(
        (user) => user.email === email && user.password === password,
      );
      if (!existing) {
        setError("invalid Email or Password");
        setButtonLoading(false);
        return;
      }
     
    setTimeout(() => {
    setMessage("Login successful"); 
    setError("")
    setButtonLoading(false)
     localStorage.setItem("isLoggedIn", "true");
     localStorage.setItem("currentUser", existing.email);
  }, 1000);

    setTimeout(() => {
    setButtonLoading(false);
    setPageLoading(true);
  }, 3000);

   setTimeout(() => { navigate("/dashboard");
  }, 5000);

  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
      {pageLoading && <PageLoader />}
      {!pageLoading &&(
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
        <div className="w-full w-full max-w-xl mx-auto md:min-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Log in to your Voyra account</p>
          </div>
          {error && (
            <div className="mb-6 p-3 rounded-lg text-sm text-center bg-red-100 text-red-700">
              {error}
            </div>
          )}
          {message && (
            <div className="mb-6 p-3 rounded-lg text-sm text-center bg-green-100 text-green-700">
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Email"
              type="email"
              value={email}
              placeholder="Enter your email"
              icon={<Mail className="w-5 h-5 text-gray-500" />}
              onChange={setEmail}
            />
            <PasswordField
              label="Password"
              value={password}
              show={showPassword}
              placeholder="Create a password"
              toggleShow={() => setShowPassword(!showPassword)}
              onChange={setPassword}
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </a>
            </div>

            <SubmitButton isLoading={buttonLoading} label="Sign In" />
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signup");
                }}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      )}
      
    </div>
  );
};
export default LoginPage;
