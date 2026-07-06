import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordFieldProps {
  label: string;
  value: string;
  show: boolean;
  placeholder: string;
  toggleShow: () => void;
  onChange: (value: string) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  show,
  placeholder,
  toggleShow,
  onChange,
}) => {
    return(
         <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>

      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

        <input
          type={show ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg"
        />

        <button
          type="button"
          onClick={toggleShow}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          {show ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
    )
}; 
export default PasswordField