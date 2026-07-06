import { Maximize,Users } from "lucide-react";
interface RoomListProps {
   room : any
   hotels:any
}
 const RoomList:React.FC <RoomListProps>=({room, hotels})=>{
    return(
     <div
               
                className="bg-gray-900 border rounded-xl overflow-hidden transition-all">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  <div className="md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={room.photos?.[0].url_original || "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"}
                      alt={room.room_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-white">{room.room_name}</h3>
                        <p className="text-gray-400 mb-4">{room.description}</p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Maximize className="w-4 h-4 text-gray-500" />
                            <span>{room.room_surface_in_m2} m²</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span>{room.max_occupancy} guests</span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-gray-400">{room.bed_configurations?.bed_types?.name_with_count}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {room.highlights?.map((feature: any, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                            >
                              {feature.translated_name}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex-shrink-0 text-right">
                        <div className="text-3xl font-bold text-blue-400 mb-1">
                          ${Math.round(
               hotels.product_price_breakdown.gross_amount_per_night.value
              ).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500 mb-4">per night</div>
                        <button
                          className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >   
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
 }; export default RoomList
