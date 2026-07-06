import ModalButton from "./Modalbutton";
interface BookingSummaryProps {
  searchText: string;
  dropText: string;
  handleSubmit: () => void;
  taxi:any
  isLoading: boolean;
  error:any
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  searchText,
  dropText,
  handleSubmit,
  taxi,
isLoading, error
}) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sticky top-20">
        <h2 className="text-xl font-bold mb-4 text-white">Booking Summary</h2>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Pickup:</span>
            <span className="font-medium text-white">
              {searchText || "Not set"}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Drop-off:</span>
            <span className="font-medium text-white">
              {dropText || "Not set"}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-300">Estimated Fare: {taxi?.price?.amount}</span>
            <span className="text-2xl font-bold text-blue-400"></span>
          </div>
        </div>
        {error && (
          <div className="mb-6 p-3 rounded-lg text-sm text-center bg-red-100 text-red-700">
            {error}
          </div>
        )}
      < ModalButton isLoading={isLoading} label="Confirm Booking" handleBooking ={handleSubmit}/>
      </div>
    </div>
  );
};
export default BookingSummary;
