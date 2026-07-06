interface InputFieldProps{
 label: string;
  type: string;
  value: string;
  placeholder: string;
  icon: React.ReactNode;
  onChange: (value: string) => void;
}
const InputField:React.FC<InputFieldProps>=({
label,
  type,
  value,
  placeholder,
  icon,
  onChange,
})=>{
    return(
<div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          {icon}
        </div>

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg"
        />
      </div>
    </div>

    );
}; export default InputField