"use client";

import FilterAccordion from "./FilterAccordion";

const FilterSection = () => {
  const sizeFilters = ["XS", "S", "M", "L", "XL", "XXL"];
  const availabilityFilters = ["In Stock", "Out of Stock"];
  const priceFilters = ["Low to High", "High to Low"];
  const colorFilters = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
  const materialFilters = ["Cotton", "Polyester", "Silk", "Wool"];
  const brandFilters = ["Brand 1", "Brand 2", "Brand 3"];
  const categoryFilters = ["Category 1", "Category 2", "Category 3"];
  const ratingFilters = ["1", "2", "3", "4", "5"];
  const discountFilters = ["10%", "20%", "30%", "40%", "50%"];
  const sortFilters = ["Newest", "Oldest", "Best Selling"];
  const filterOptions = {
    availability: availabilityFilters,
    price: priceFilters,
    color: colorFilters,
    material: materialFilters,
    brand: brandFilters,
    category: categoryFilters,
    rating: ratingFilters,
    discount: discountFilters,
    sort: sortFilters,
  };

  return (
    <div className="h-max col-span-1">
      <h2 className="pb-5">Filter</h2>
      <div className="flex flex-col border-b">
        <div className="pb-2">Size</div>
        <div className="flex flex-wrap gap-2 pb-5">
          {sizeFilters.map((size) => (
            <button key={size} className="p-2 border border-black">{size}</button>
          ))}
        </div>
      </div>
      {Object.entries(filterOptions).map(([title, options]) => {
        return <FilterAccordion key={title} title={title} options={options} />;
      })}
    </div>
  );
};

export default FilterSection;
