interface ModalButtonProps {
  isLoading: boolean;
  label : string;
  handleBooking:()=>void;
}

const ModalButton: React.FC<ModalButtonProps> = ({
  isLoading,label,handleBooking,
}) => {
  return (
    <button onClick={handleBooking}
      disabled={isLoading}
      className={`w-full rounded-lg p-2 text-white
      ${
        isLoading
          ? "opacity-50 cursor-not-allowed bg-black"
          : "bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white"
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

export default ModalButton;