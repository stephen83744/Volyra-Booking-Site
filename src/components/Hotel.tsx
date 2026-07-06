import List from "./HotelList";

const HotelCard = ({ hotel }: any) => {
  return (
    <List
      key={hotel.hotel_id}
      hotel={hotel}
    />
  );
};

export default HotelCard;