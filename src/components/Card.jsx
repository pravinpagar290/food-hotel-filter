import React from "react";
import { CiStar } from "react-icons/ci";

const Card = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted-foreground w-full col-span-full">
        <div className="text-6xl mb-4">🍽️</div>
        <p className="text-xl font-medium">No results found</p>
        <p className="text-sm">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-5"
        >
        
          <div className="relative h-56 overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-2.5 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm border border-white/20">
              <CiStar className="text-orange-500 fill-orange-500" />
              <span className="text-sm font-bold">{item.rating}</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                {item.category}
              </span>
            </div>
          </div>

    
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                {item.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-muted-foreground px-2 py-1 bg-secondary rounded-md">
                {item.cuisine}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                  Price
                </span>
                <span className="text-xl font-black text-foreground">
                  ${item.price}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                  Delivery
                </span>
                <span className="text-sm font-bold text-primary">
                  {item.min} mins
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
