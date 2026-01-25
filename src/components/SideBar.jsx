import React from "react";
import { CiStar, CiFilter } from "react-icons/ci";

const SideBar = ({
  selectedCategory,
  setSelectedCategory,
  selectedCuisines,
  toggleCuisine,
  priceRange,
  setPriceRange,
  rating,
  setRating,
  handleClearFilters,
}) => {
  const cuisines = ["American", "Chinese", "Italian", "Seafood"];

  return (
    <div className="space-y-8 p-6 bg-card border border-border rounded-2xl shadow-sm">
      <div className="flex items-center gap-2 pb-4 border-b border-border">
        <CiFilter className="text-xl text-primary" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      
      <div className="space-y-3">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Category
        </span>
        <div className="flex flex-wrap gap-2">
          {["all", "place", "dish",].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}s
            </button>
          ))}
        </div>
      </div>

      
      <div className="space-y-3">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Cuisines
        </span>
        <div className="space-y-2">
          {cuisines.map((cuisine) => (
            <label
              key={cuisine}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => toggleCuisine(cuisine)}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-input transition-all checked:bg-primary checked:border-primary"
                />
                <svg
                  className="absolute h-3.5 w-3.5 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-primary-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                {cuisine}
              </span>
            </label>
          ))}
        </div>
      </div>

      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Price Range
          </span>
          <span className="text-sm font-bold text-primary">
            Up to ${priceRange}
          </span>
        </div>
        <input
          type="range"
          min="10"
          max="200"
          step="10"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$10</span>
          <span>$200</span>
        </div>
      </div>

   
      <div className="space-y-3">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Minimum Rating
        </span>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border transition-all ${
                rating === star
                  ? "bg-primary/10 border-primary text-primary shadow-sm"
                  : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              <CiStar className={`${rating >= star ? "fill-primary" : ""}`} />
              <span className="text-xs font-semibold">{star}</span>
            </button>
          ))}
        </div>
      </div>

      
      <button
        onClick={handleClearFilters}
        className="w-full py-3 rounded-xl border border-destructive/50 text-destructive text-sm font-semibold hover:bg-destructive hover:text-white transition-all active:scale-95"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default SideBar;
