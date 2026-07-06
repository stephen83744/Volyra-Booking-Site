import { Star,Navigation } from "lucide-react";
interface ItemsHotelProps{
     item :any
}
 const ItemsHotel:React.FC<ItemsHotelProps> =({item})=>{
    return(
                <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors" >
                  <div className="aspect-video overflow-hidden">
                   
                  </div>
                  <div className="p-4">
                    <div className="flex  gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1">{item.tag}</h3>
                        <Star className="w-4 h-4 fill-current" />
                        <p className="text-sm text-gray-400">{item.average_out_of_10}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Navigation className="w-3 h-3" />
                     {item?.distance?.toFixed(2)} km away
                    </div>
                  </div>
                </div>
    )
 };
 export default ItemsHotel