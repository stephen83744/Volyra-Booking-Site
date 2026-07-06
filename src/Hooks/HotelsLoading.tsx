import { fetchData } from "../api/apicalls";
import { useQuery } from "@tanstack/react-query";

export const useHotels = (searchParams : any ) =>{
    return useQuery({
    queryKey: ["hotels", searchParams],
    queryFn:  async () => {
      if (!searchParams) return [];

      const hotelData = await fetchData(
        searchParams.dest_id,
        searchParams.search_type
      );

      return (
        hotelData?.data?.hotels ||
        hotelData?.data ||
        hotelData?.hotels ||
        []
      );
    },
    enabled: !!searchParams,
  });
}