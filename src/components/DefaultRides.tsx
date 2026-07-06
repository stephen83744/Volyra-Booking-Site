interface DefaultRidesProps {
  rides: any[];
  selectedRide: number | null;
  setSelectedRide: React.Dispatch<React.SetStateAction<number | null>>;
}

const DefaultRides: React.FC<DefaultRidesProps> = ({
  rides,
  selectedRide,
  setSelectedRide,
}) => {
  return (
    <div className="space-y-4">
      {rides?.map((ride, index) => {
        return (
          <div
            key={index}
            onClick={() => setSelectedRide(index)}
            className={`cursor-pointer rounded-xl border  p-4
            ${
              selectedRide === index
                ? "border-blue-800 bg-gray-800"
                : "bg-gray-900 border border-gray-700"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={ride.image}
                  alt={ride.supplierName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-white">{ride.description}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  {ride.descriptionLocalised}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                  <span>{ride.passengerCapacity}</span>
                  <span>•</span>
                  <span>
                    ETA: {ride.ETA}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-white">
                  {ride.price}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DefaultRides;
