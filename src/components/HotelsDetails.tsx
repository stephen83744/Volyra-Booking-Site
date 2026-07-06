import { MapPin, Star, Check} from "lucide-react";
interface HotelDetailsProps{
   hotels:any
}
const HotelDetails :React.FC <HotelDetailsProps>=({hotels})=>{
    return(
      <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-white">{hotels?.hotel_name}</h1>
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <MapPin className="w-5 h-5" />
                  <span>{hotels?.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-current" />
                   </div>
                  <span className="text-gray-400">
                    ({hotels?.review_nr.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6">{hotels?.city}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-bold text-lg mb-4 text-white">Amenities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {hotels?.top_ufi_benefits.map((amenity, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <span>{amenity.translated_name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="font-bold text-lg mb-4 text-white">Hotel Features</h2>
                <div className="grid grid-cols-2 gap-2">
                  {hotels?.facilities_block?.facilities.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
    )
};export default HotelDetails