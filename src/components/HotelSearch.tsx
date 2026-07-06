import SearchResults from "./HotelDropDown";
import { Search } from "lucide-react";

const HotelSearch = ({
  searchText,
  handleSearch,
  results,
  handleClick,
}: any) => {
  return (
    <div className="relative max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        id="form"
        placeholder="Search destination..."
        className="w-full pl-12 pr-4 py-4 bg-gray-900 rounded-xl border border-gray-700 text-white outline-none"
      />

      <SearchResults results={results} handleClick={handleClick} />
    </div>
  );
};
export default HotelSearch;
