import { useState } from "react";
import { fetchDestination, fetchData } from "../api/apicalls";
import { useQuery } from "@tanstack/react-query";
import HotelSearch from "../components/HotelSearch";
import Filter from "../components/HotelFilter";
import HotelCard from "../components/Hotel";
import { useHotels } from "../Hooks/HotelsLoading";

const HotelPage: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [filters, setFilters] = useState({ priceRange: "all" });
  const [searchParams, setSearchParams] = useState<{
    dest_id: string;
    search_type: string;
  } | null>(null);

  const ids = ["-126693", "-1456928", "-2092174"];
  const loadFeaturedHotels = async () => {
    const responses = await Promise.all(ids.map((id) => fetchData(id, "CITY")));
    return responses.flatMap((res) => res?.data?.hotels || []);
  };

  const { data: featuredHotels = [], isLoading: featuredLoading } = useQuery({
    queryKey: ["featuredHotels"],
    queryFn: loadFeaturedHotels,
  });

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);

    if (!text.trim()) {
      setResults([]);
      return;
    }

    try {
      const data = await fetchDestination(text);
      setResults(data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (result: any) => {
    setSearchText(result.city_name || result.label);
    setResults([]);
    setSearchParams({
      dest_id: result.dest_id,
      search_type: result.search_type,
    });
  };
  const { data: hotels = [], isLoading } = useHotels(searchParams);

  const filteredHotels = hotels.filter((hotel: any) => {
    const price = hotel.property?.priceBreakdown?.grossPrice?.value || 0;

    if (filters.priceRange === "budget") {
      return price < 300;
    }
    if (filters.priceRange === "mid") {
      return price >= 300 && price <= 500;
    }
    if (filters.priceRange === "luxury") {
      return price > 700;
    }

    return true;
  });

  const displayedHotels = searchParams ? filteredHotels : featuredHotels;

  return (
    <div className="min-h-screen bg-gray-950">
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Find Your Perfect Stay</h1>
          <HotelSearch
            searchText={searchText}
            results={results}
            handleClick={handleClick}
            handleSearch={handleSearch}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Filter filters={filters} setFilters={setFilters} />

          <div className="lg:col-span-3">
            {(featuredLoading || isLoading) && (
              <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="mt-4 text-lg text-gray-300 font-medium">
                  Loading hotels...
                </p>
              </div>
            )}

            {!isLoading && displayedHotels.length > 0 && (
              <>
                <p className="text-gray-400 mb-6">
                  Showing {displayedHotels.length} hotels
                </p>
                {displayedHotels.map((hotel: any) => (
                  <HotelCard hotel={hotel} />
                ))}
              </>
            )}
            {!isLoading &&
              hotels.length > 0 &&
              displayedHotels.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                  No hotels match this filter
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
