interface SubmitButtonProps {
  isLoading: boolean;
  label : string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading,label,
}) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`w-full rounded-lg p-2 text-white
      ${
        isLoading
          ? "opacity-50 cursor-not-allowed bg-black"
          : "bg-black hover:bg-gray-800"
      }`}
    >
      {isLoading ? (
        <div className="flex justify-center gap-2">
          <div className="animate-spin rounded-full h-5 w-5 border-t-transparent border-2 border-white"></div>
          <span>Processing...</span>
        </div>
      ) : (
       label
      )}
    </button>
  );
};

export default SubmitButton;