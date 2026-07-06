import Result from "./RideResult";
import { MapPin} from "lucide-react";
interface RideSearchProps {
  searchText: string;
  dropText: string;

  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropOffSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;

  results: any[];
  dropOffResults: any[];

  handleClick: (location: any) => void;
  handleDropOffClick: (location: any) => void;

}

const RideSearch: React.FC<RideSearchProps> = ({
  searchText,
  dropText,
  handleSearch,
  handleDropOffSearch,
  results,
  dropOffResults,
  handleClick,
  handleDropOffClick,
}) => {
  return (
    
    <div>
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Pickup Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Enter pickup location"
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-500"
            required
          />
          <Result locations={results} onSelect={handleClick} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Drop-off Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />
          <input
            type="text"
            value={dropText}
            onChange={handleDropOffSearch}
            placeholder="Enter drop-off location"
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-500"
            required
          />
          <Result locations={dropOffResults} onSelect={handleDropOffClick} />
        </div>
      </div>
     
    </div>
  );
};
export default RideSearch;
