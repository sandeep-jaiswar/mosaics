import { useFilterContext } from "@/contexts/FilterContext";
import Image from "next/image";
import { useState } from "react";

const FilterAccordion = ({
  title,
  options,
}: {
  title: string;
  options: string[];
}) => {
  const [expanded, setExpanded] = useState(false);
  const { filter, setFilter } = useFilterContext();
  console.log(filter);
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border w-full">
      <button
        className="flex justify-between items-center w-full p-4 text-lg font-medium bg-gray-100 hover:bg-gray-200 transition"
        onClick={handleExpand}
      >
        <span>{title}</span>
        <Image
          src="/icons/chevrondown.png"
          alt="Chevron down"
          width={24}
          height={24}
          className={`w-5 h-5 transition-transform ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {expanded && (
        <div className="p-4 border-t border-gray-300">
          {options.map((option: string) => (
            <div key={option}>
              <input type="checkbox" id={option} name={option} value={option} onChange={handleFilterChange} />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterAccordion;
