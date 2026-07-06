import axios from "axios";

const key = import.meta.env.VITE_RAPIDAPI_KEY;
const host = import.meta.env.VITE_RAPIDAPI_HOST;
 const today = new Date();
  const arrivalDate = today.toISOString().split("T")[0];
  const departure = new Date();
  departure.setDate(departure.getDate() + 2);
  const departureDate = departure .toISOString().split("T")[0];
  
export const fetchData = async (dest_id: string, search_type: string) => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
      search_type: search_type,
      dest_id: dest_id,
       arrival_date: arrivalDate,
      departure_date: departureDate,
      adults: 1,
      room_qty: 1,
      page_number: 1,
      children_age: "0,17",
      units: "metric",
      temperature_unit: "c",
      languagecode: "en-us",
      currency_code: "AED",
      location: "US",
      
    },
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  };

  const response = await axios.request(options);
  return response.data;
};
export default fetchData;

export const fetchDestination = async (searchText: string) => {
  const response = await axios.request({
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
    params: {
      query: searchText
    },
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  });

  return response.data;
};

export const fetchDetails = async (hotelId: string) => {

  const answer = await axios.request({
   method: "GET",
   url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
   params: {
     hotel_id: hotelId,
        arrival_date: arrivalDate,
        departure_date: departureDate,
        adults: 1,
        room_qty: 1,
        units: "metric",
        temperature_unit: "c",
        languagecode: "en-us",
        currency_code: "EUR",
   },
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
});
    return answer.data;
};

export const fetchFaq = async (hotelId: string) => {
  const response = await axios.request({
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getQuestionAndAnswer",
    params: {
      hotel_id: hotelId,
      languagecode: "en-us"
    },
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  });
  return response.data;
};

export const fetchLocation = async (searchText: string) => {
  const answer = await axios.request({
    method: "GET",
    url:"https://booking-com15.p.rapidapi.com/api/v1/taxi/searchLocation",
    params: { 
      query: searchText
    },
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
     });
  return answer.data;
};

export const fetchTaxi = async (pickUpId: string, dropOffId: string) => {
  const response = await axios.request({
    method: "GET",
    url:"https://booking-com15.p.rapidapi.com/api/v1/taxi/searchTaxi",
    params:{
            pick_up_place_id: pickUpId,
          drop_off_place_id: dropOffId,
          currency_code: "EUR",
    },
      headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
});
return response
};

export const fetchPhotos = async (hotelId: string) => {
  const response = await axios.request({
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelPhotos",
    params: {
      hotel_id: hotelId,
    },
    headers: {
      "X-RapidAPI-Key": key,  
      "X-RapidAPI-Host": host,
    },
  });
  return response.data;
}

export const fetchPopularLocation=async(hotelId: string)=>{
  const answer =await axios.request({
    method:"GET",
    url :"https://booking-com15.p.rapidapi.com/api/v1/hotels/getPopularAttractionNearBy",
  params: {
      hotel_id: hotelId,
        languagecode: "en-us"
    },
    headers: {
      "X-RapidAPI-Key": key,  
      "X-RapidAPI-Host": host,
    },
  })
 return answer.data
}