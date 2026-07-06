import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLocation } from "../api/apicalls";
import RideSearch from "../components/RideSearch";
import Rides from "../components/Rides";
import BookingSummary from "../components/BookingSummary";
import LoadingSpinner from "../components/Spinner";
import { useRides } from "../Hooks/RideLoading";
import { Car, Search, Users, Zap } from "lucide-react";
import Modal from "../components/Modal";
import DefaultRides from "../components/DefaultRides";
import ComfortCar from "../assets/ComfortCar.jpg";
import PremiumCar from "../assets/PremiumCars.jpg";
import SpaciousCar from "../assets/SpaciousCar.jpg";
const RideBooking: React.FC = () => {
  const navigate = useNavigate();
  const [selectRide, setSelectRide] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [Popup, setPopup] = useState(false);
  const [dropText, setDropText] = useState("");
  const [pickupLocation, setPickupLocation] = useState<any>(null);
  const [dropoffLocation, setDropoffLocation] = useState<any>(null);
  const [dropOffResults, setDropoffResults] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [params, setParams] = useState<{
    pickUpId: string;
    dropOffId: string;
  } | null>(null);
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    if (!text.trim()) {
      setResults([]);
      return;
    }
    try {
      const response = await fetchLocation(text);
      setResults(response?.data || []);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDropOffSearch = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const search = e.target.value;
    setDropText(search);
    if (!search.trim()) {
      setDropoffResults([]);
      return;
    }
    const response = await fetchLocation(search);
    setDropoffResults(response?.data || []);
  };

  const handleClick = (location: any) => {
    setPickupLocation(location);
    setSearchText(location.name);
    setResults([]);
  };
  const handleDropOffClick = (location: any) => {
    setDropoffLocation(location);
    setDropText(location.name);
    setDropoffResults([]);
  };

  const handleSubmit = () => {
    if (!pickupLocation || !dropoffLocation) {
      alert("Please fill in all fields");
      return;
    }
    setParams({
      pickUpId: pickupLocation.googlePlaceId,
      dropOffId: dropoffLocation.googlePlaceId,
    });
  };
  const { data: taxis, isLoading } = useRides(params);
  const searched = params !== null;
  const booking = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (selectRide === null) {
        setError("Please select a ride");
        setIsLoading(false);
        return;
      }
      setError("");
      setPopup(true);
      setIsLoading(false);
    }, 3000);
  };

  const HandleBooking = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDropText("");
      setSearchText("");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
      setIsLoading(false);
    }, 3000);
  };
  useEffect(() => {
    if (!Popup) return;
    const Timer = setTimeout(() => {
      navigate("/dashboard");
    }, 4000);
    return () => clearTimeout(Timer);
  }, [Popup, navigate]);

  const rideTypes = [
    {
      id: "ride1",
      name: "Standard",
      description: "Comfortable and affordable for daily journies",
      price: "$10-15",
      passengerCapacity: "4 passengers",
      ETA: "2-5 min",
      image: ComfortCar,
      icon: Car,
    },
    {
      id: "ride2",
      name: "Large",
      description: "Spacious vehicles for groups and families",
      price: "$18-25",
      passengerCapacity: "6 passengers",
      ETA: "3-8 min",
      image: SpaciousCar,
      icon: Users,
    },
    {
      id: "ride3",
      name: "Luxury",
      description: "Premium cars for a first-class experience",
      price: "$30-50",
      passengerCapacity: "4 passengers",
      ETA: "5-12 min",
      image: PremiumCar,
      icon: Zap,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-950">
      <Modal
        Popup={Popup}
        isLoading={IsLoading}
        handleBooking={HandleBooking}
      />
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Book Your Ride
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-6 text-white">
                Trip Details
              </h2>
              <form className="space-y-4">
                <RideSearch
                  searchText={searchText}
                  dropText={dropText}
                  handleSearch={handleSearch}
                  handleDropOffSearch={handleDropOffSearch}
                  results={results}
                  dropOffResults={dropOffResults}
                  handleClick={handleClick}
                  handleDropOffClick={handleDropOffClick}
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"></div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  <Search className="w-5 h-5" />
                  Search Available Rides
                </button>
              </form>
            </div>

            {isLoading && <LoadingSpinner text="Loading taxis..." />}
            <div className=" brounded-xl p-6">
              <h2 className="text-xl font-bold mb-6 text-white">
                Choose Your Ride
              </h2>
              {!searched && (
                <DefaultRides
                  rides={rideTypes}
                  selectedRide={selectRide}
                  setSelectedRide={setSelectRide}
                />
              )}

              {searched && taxis?.length > 0 && (
                <Rides
                  taxis={taxis}
                  selectedRide={selectRide}
                  setSelectedRide={setSelectRide}
                />
              )}
              {searched && taxis?.length === 0 && (
                <>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white">
                      No rides available
                    </h3>

                    <p className="text-gray-400 mt-2">
                      We couldn't find rides for this route.
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      Here are our standard ride options.
                    </p>
                  </div>

                  <DefaultRides
                    rides={rideTypes}
                    selectedRide={selectRide}
                    setSelectedRide={setSelectRide}
                  />
                </>
              )}
            </div>
          </div>

          <BookingSummary
            searchText={searchText}
            dropText={dropText}
            handleSubmit={booking}
            taxi={taxis}
            isLoading={IsLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};
export default RideBooking;
