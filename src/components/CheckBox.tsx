interface TermsCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 mt-1"
      />

      <label className="text-sm text-gray-400">
        I agree to the{" "}
        <a href="#" className="text-blue-400">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-400">
          Privacy Policy
        </a>
      </label>
    </div>
  );
};

export default TermsCheckbox;