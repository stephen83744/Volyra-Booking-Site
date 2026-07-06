import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, User, Phone } from "lucide-react";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import TermsCheckbox from "../components/CheckBox";
import SubmitButton from "../components/SubmitButton";
export type User = {
  fullName: string;
  password: string;
  email: string;
  phone: number;
};

const STORAGE_KEY = "logindata";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const retrieve = (): User[] => {
    const info = localStorage.getItem(STORAGE_KEY);
    if (!info) {
      console.log("No data is saved");
      return [];
    }
    const parse = JSON.parse(info);
    return parse;
  };

  const saving = (users: User[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (!fullName || !email || !password || !confirmPassword || !phone) {
        setError("Please fill all fields");
        setIsLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError(" Passwords do not match");
        setIsLoading(false);
        return;
      }

      if (!agree) {
        setError("please agree to the terms and conditions");
        setIsLoading(false);
        return;
      }

      const users = retrieve();
      const existing = users.find((user) => user.email === email);

      if (existing) {
        setMessage("Email already registered. Please login");
        setIsLoading(false);
        return;
      }

      const newUser: User = {
        fullName,
        email,
        password,
        phone: parseInt(phone),
      };
      saving([...users, newUser]);
      setMessage("processing ...");
      setError("");

      setTimeout(() => {
        navigate("/");
      }, 2000);

      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
        <div className="w-full max-w-xl mx-auto md:min-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-400">Join Volyra today</p>
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
          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
              label="Full Name"
              type="text"
              value={fullName}
              placeholder="Enter your full name"
              icon={<User className="w-5 h-5 text-gray-500" />}
              onChange={setFullName}
            />

            <InputField
              label="Email"
              type="email"
              value={email}
              placeholder="Enter your email"
              icon={<Mail className="w-5 h-5 text-gray-500" />}
              onChange={setEmail}
            />

            <InputField
              label="Phone Number"
              type="tel"
              value={phone}
              placeholder="Phone no"
              icon={<Phone className="w-5 h-5 text-gray-500" />}
              onChange={setPhone}
            />

            <PasswordField
              label="Password"
              value={password}
              show={showPassword}
              placeholder="Create a password"
              toggleShow={() => setShowPassword(!showPassword)}
              onChange={setPassword}
            />

            <PasswordField
              label="ConfirmPassword"
              value={confirmPassword}
              show={showConfirmPassword}
              placeholder="Confirm password"
              toggleShow={() => setShowConfirmPassword(!showConfirmPassword)}
              onChange={setConfirmPassword}
            />

            <TermsCheckbox checked={agree} onChange={setAgree} />

           <SubmitButton
  isLoading={isLoading}
  label="Sign Up"
/>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
