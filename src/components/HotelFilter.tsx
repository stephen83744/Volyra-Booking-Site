const Filter = ({ filters, setFilters }: any) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sticky top-20">
        <h2 className="font-bold text-lg mb-4 text-white">Filters</h2>

        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-gray-300">Price Range</h3>

          <div className="space-y-2">
            {[
              { value: "all", label: "All Prices" },
              { value: "budget", label: "Budget (< $300)" },
              { value: "mid", label: "Mid-range ($300–$500)" },
              { value: "luxury", label: "Luxury (> $700)" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="priceRange"
                  value={option.value}
                  checked={filters.priceRange === option.value}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      priceRange: e.target.value,
                    })
                  }
                  className="w-4 h-4 text-blue-600"
                />

                <span className="text-sm text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
