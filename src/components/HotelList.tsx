import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const List = ({ hotel }: any) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/dashboard/hotels/${hotel.hotel_id}`)}
      className=" cursor-pointer mb-3 hover:border-gray-700 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300"
    >
      <div className="grid md:grid-cols-3">
        <img
          src={
            hotel.property?.photoUrls?.[0] ||
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
          }
          alt={hotel.property?.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 "
        />

        <div className="md:col-span-2 p-6">
          <div className="flex justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">
                {hotel.property?.name}
              </h2>
              <p className="text-gray-400 mt-2">
                {hotel.property?.wishlistName}
              </p>
            </div>

            <p className="text-blue-400 text-2xl font-bold whitespace-nowrap">
              $
              {Math.round(
                hotel.property?.priceBreakdown?.grossPrice?.value || 0,
              ).toLocaleString()}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />

            <span className="text-white">
              {hotel.property?.reviewScore || "N/A"}
            </span>
          </div>

          <p className="text-gray-400 font-bold mt-4 text-sm leading-relaxed">
            {hotel.accessibilityLabel}
          </p>
        </div>
      </div>
    </div>
  );
};
export default List;
