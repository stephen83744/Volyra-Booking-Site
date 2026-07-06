import ModalButton from "./Modalbutton";

interface ModalProps{
 Popup :any;
 isLoading: boolean;
   handleBooking:()=>void;
}

 const Modal:React.FC<ModalProps> =({Popup,isLoading,handleBooking,})=>{
return(
<div>
      {Popup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="w-[90%] max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl animate-in fade-in zoom-in duration-300">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-8 w-8 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-slate-900">
        Volyra
      </h1>
      <h3 className="mt-3 text-lg font-medium text-slate-600">
        Your ride has been booked successfully
      </h3>
    <ModalButton isLoading={isLoading} label="Return" handleBooking ={handleBooking}/>
    </div>
  </div>
)}
</div>
)
}; export default Modal