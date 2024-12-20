import React, { createContext, useState, useContext } from "react";
const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <SearchContext.Provider value={{ searchTerm, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
export const useSearch = () => useContext(SearchContext);
