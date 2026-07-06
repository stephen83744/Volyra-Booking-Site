import { useQuery } from "@tanstack/react-query";
import {  fetchTaxi } from "../api/apicalls";

export const useRides = (params : any ) =>{
   return  useQuery({
    queryKey: [
      "taxi-search",
      params?.pickUpId,
      params?.dropOffId,
    ],
    queryFn: async () => {
      if (!params) return [];
      const data = await fetchTaxi(
        params.pickUpId,
        params.dropOffId,

      );
      return data?.data?.results || [];
    },
    enabled: !!params,
  });
   
}