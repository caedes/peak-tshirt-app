import React from "react";
import { useSet } from "react-use";

const FilterContext = React.createContext();

export function useStyleFilters() {
  return React.useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [selectedStyles, { toggle }] = useSet(new Set());

  const selectFilter = (id) => () => {
    toggle(id);
  };

  return (
    <FilterContext.Provider value={[selectedStyles, { selectFilter }]}>
      {children}
    </FilterContext.Provider>
  );
}
