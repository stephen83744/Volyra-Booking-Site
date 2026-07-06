import { useState } from "react";
import { fetchFaq } from "../api/apicalls";
import { useParams } from "react-router-dom";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const FAQPage: React.FC = () => {
 
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { hotelId } = useParams();

 const {data: faqs = [], isLoading} = useQuery({
    queryKey: ["faq", hotelId],
    queryFn: async () => {
        if (!hotelId) return [];
        const data = await fetchFaq(hotelId);
        return data?.data.q_and_a_pairs || [];
    },
   enabled: !!hotelId,
    });

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions about hotel bookings
          </p>
        </div>
      </div>
      {isLoading ? (
        <p>Loading FAQs...</p>
      ) : (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gray-900 border border-gray-800 rounded-xl">
            <div className="divide-y divide-gray-800">
              {faqs.map((faq: any, index: number) => (
                <div key={index} className="p-6">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openItems.includes(index) && (
                    <div className="mt-4 pr-10">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-blue-100 mb-6">
              Our support team is available 24/7 to help you with any inquiries
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Contact Support
            </button>
          </div>
        </div>
      )}
      ;
    </div>
  );
};
export default FAQPage;
