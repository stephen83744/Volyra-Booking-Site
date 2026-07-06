interface HotelPhotosProps{
  photos:any
}
const HotelPhotos :React.FC <HotelPhotosProps>=({photos})=>{
    return(
<div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-2">
            <div className="lg:col-span-2 aspect-[16/10] overflow-hidden rounded-lg">
              <img
                src={photos?.[0]?.url}
                alt="hotel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {photos.slice(1, 5).map((photo:any) => (
                <div
                  key={photo.id}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity" >
                  <img src={photo?.url} alt="hotel" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
    )
};
 export default HotelPhotos
