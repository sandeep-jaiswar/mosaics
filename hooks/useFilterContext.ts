import FilterContext from "@/contexts/FilterContext";
import { useContext } from "react";

const useFilterContext = () => {    
    const { filter, setFilter } = useContext(FilterContext);
    return { filter, setFilter };
}

export default useFilterContext;