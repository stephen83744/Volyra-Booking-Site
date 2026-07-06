import { MapPin } from "lucide-react";

interface ResultProps {
  locations: any[];
  onSelect: (location: any) => void;
}

const Result: React.FC<ResultProps> = ({ locations, onSelect }) => {
  if (!locations.length) return null;

  return (
    <div>
      {locations.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg overflow-hidden z-20 shadow-xl max-h-52 overflow-y-auto">
          {locations.map((location) => (
            <button
              key={location.googlePlaceId}
              type="button"
              onClick={() => onSelect(location)}
              className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 flex items-center gap-3 transition-colors"
            >
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              {location.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;
