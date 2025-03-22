import { createContext, ReactNode, useContext, useState } from "react";

const FilterContext = createContext(
    {} as {
        filter: string;
        setFilter: (filter: string) => void;
    }
);

export const FilterProvider = ({ children }: { children : ReactNode}) => {
    const [filter, setFilter] = useState("");
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};

export default FilterContext;