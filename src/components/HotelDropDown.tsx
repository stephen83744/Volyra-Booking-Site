import { MapPin } from "lucide-react";

const SearchResults = ({ results, handleClick }) => {
  if (!results.length) return null;
  return (
    <div>
      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-gray-900 rounded-xl overflow-hidden z-20 border border-gray-800">
          {results.map((result: any, index) => (
            <button
              key={index}
              onClick={() => handleClick(result)}
              className="w-full text-left px-4 py-3 hover:bg-gray-800 flex gap-3 items-center text-white"
            >
              <MapPin className="w-4 h-4" />
              {result.city_name || result.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchResults;
