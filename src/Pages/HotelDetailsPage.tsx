import { fetchDetails, fetchPhotos, fetchLocation } from "../api/apicalls";
import { ArrowLeft, MapPin, HelpCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import RoomList from "../components/detailRooms";
import HotelDetails from "../components/HotelsDetails";
import HotelPhotos from "../components/HotelPhotos";
import ItemsHotel from "../components/ItemsHotel";

const HotelDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { hotelId } = useParams();
  const { data, isLoading,  error,
  isError,} = useQuery({
    queryKey: ["hotel", hotelId],
    queryFn: async () => {
      if (!hotelId) return ;
      const answer = await fetchDetails(hotelId);

      return {
        hotel: answer?.data,
        rooms: Object.values(answer?.data?.rooms || {}),
      };
    },
    enabled: !!hotelId,
  });

  const hotels = data?.hotel;
  const rooms = data?.rooms || [];

  const { data: photos = [] } = useQuery({
    queryKey: ["hotelPhotos", hotelId],
    queryFn: async () => {
      if (!hotelId) return [];
      const response = await fetchPhotos(hotelId);
      return response?.data;
    },
    enabled: !!hotelId,
  });
   
  const{ data :Location= [] } =useQuery({
    queryKey: ["locations",hotelId],
    queryFn:async () =>{
      if (!hotelId) return []
      const answer =await fetchLocation(hotelId);
      return answer?.data?.data?.popular_landmarks || [];
    },
    enabled:!!hotelId
  })

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-300 font-medium">
          Loading hotels...
        </p>
      </div>
    );
  }
  if (isError) {
  console.log(error);

  return (
    <div className="text-red-500">
      Failed to load hotel details
    </div>
  );
}console.log("Location:", Location);


  return (
    <div className="min-h-screen bg-gray-950">
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/dashboard/hotels")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Hotels
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-8">
          <HotelPhotos photos={photos} />
          <HotelDetails hotels={hotels} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Available Rooms
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {rooms.map((room: any, index) => (
              <RoomList room={room} key={index} hotels={hotels} />
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Nearby Places</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Location?.map((item: any, index: number) => {
              return <ItemsHotel key={index} item={item} />;
            })}
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">
              Have questions about this hotel?
            </h2>
            <p className="text-gray-400 text-sm">
              Browse our hotel-specific FAQ for policies, amenities, and more.
            </p>
          </div>
          <a
            href=""
           onClick={() => navigate(`/dashboard/faq/hotels/${hotelId}`)}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            View Hotel FAQ
          </a>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Location</h2>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-400">Map view would be displayed here</p>
              <p className="text-sm text-gray-500 mt-1">{hotels?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelDetailsPage;
