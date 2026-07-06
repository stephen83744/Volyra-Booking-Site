import { Car, Hotel, Star } from "lucide-react";
import {useNavigate} from "react-router-dom";

const Dashboardhome : React.FC = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: Car,
      title: "Reliable Rides",
      description: "Book rides with verified drivers for luxurious comfort",
    },
    {
      icon: Hotel,
      title: "Best Hotels",
      description: "Choose from different hotels at competitive prices",
    },
    {
      icon: Star,
      title: "Quality Service",
      description: "24/7 customer support and verified reviews",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Start Your Next Journey
            </h1>
            <p className="text-xl mb-12 text-blue-100">
              Find the best rides and hotels all in one place. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a href ="" onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard/rides");
              }}
                className="bg-white text-gray-900 px-8 py-6 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 group" >
                <Car className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">Find a Ride</span>
              </a>
              <a href=""
                onClick={(e) => { e.preventDefault();
                                   navigate("/dashboard/hotels");}}
                className="bg-white text-gray-900 px-8 py-6 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 group">
                <Hotel className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">Find Hotels</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Volyra</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}
                  className="text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors" >
                  <div className="w-16 h-16 bg-blue-900/50 rounded-ful  flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of satisfied travelers booking with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href=""
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                onClick={(e) => { e.preventDefault();
                           navigate("/dashboard/rides");
                }} > 
                Book a Ride Now
              </a>
              <a href=""
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/dashboard/hotels");
                }} >
                Explore Hotels
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 
export default Dashboardhome;