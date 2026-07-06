interface RidesProps {
  taxis: any[];
  selectedRide: number | null;
  setSelectedRide: React.Dispatch<React.SetStateAction<number | null>>;
}

const Rides: React.FC<RidesProps> = ({
  taxis,
  selectedRide,
  setSelectedRide,
}) => {
  return (
    <div className="space-y-4">
      {taxis?.map((taxi, index) => {
        return (
          <div
            key={index}
            onClick={() => setSelectedRide(index)}
            className={`cursor-pointer rounded-xl border p-4
            ${
              selectedRide === index
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={taxi.image_url}
                  alt={taxi.suppierName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-white">{taxi.description}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  {taxi.descriptionLocalised}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                  <span>{taxi.passengerCapacity}</span>
                  <span>•</span>
                  <span>
                    ETA: {Math.floor(taxi.cancellationLeadTimeMinutes / 60)}{" "}
                    mins
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-white">
                  {taxi?.price?.amount}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Rides;
