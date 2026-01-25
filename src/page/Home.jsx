import React, { useState, useMemo } from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { cardData } from "../data/cardData";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [priceRange, setPriceRange] = useState(200);
  const [rating, setRating] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const filteredData = useMemo(() => {
    return cardData.filter((item) => {
      
      if (
        searchInput &&
        !item.title.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return false;
      }

      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }

      
      if (
        selectedCuisines.length > 0 &&
        !selectedCuisines.includes(item.cuisine)
      ) {
        return false;
      }

      
      if (item.price > priceRange) {
        return false;
      }

      
      if (rating > 0 && item.rating < rating) {
        return false;
      }

      return true;
    });
  }, [searchInput, selectedCategory, selectedCuisines, priceRange, rating]);

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSelectedCuisines([]);
    setPriceRange(200);
    setRating(0);
    setSearchInput("");
  };

  const toggleCuisine = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine)
        ? prev.filter((c) => c !== cuisine)
        : [...prev, cuisine],
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Food & Hotel</h1>
          <p className="text-muted-foreground">
            Find your favorite places and dishes
          </p>
        </div>
        <SearchBar
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        <aside className="w-full lg:w-64 shrink-0">
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedCuisines={selectedCuisines}
            toggleCuisine={toggleCuisine}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            rating={rating}
            setRating={setRating}
            handleClearFilters={handleClearFilters}
          />
        </aside>

        
        <main className="flex-1">
          <Card data={filteredData} />
        </main>
      </div>
    </div>
  );
};

export default Home;
