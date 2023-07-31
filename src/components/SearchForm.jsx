// import icons
import { useState, useEffect } from "react";

import { FiSearch } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import {} from "react-icons";
const SearchForm = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchTerm);
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    } else {
      setIsLoading(true);
    }
  };
  return (
    <form
      className={`${
        isLoading ? "animate-shake" : "animate-none"
      } w-full relative`}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleSearch}
        value={searchTerm}
        type="text"
        className="input"
        placeholder="Search for a product"
      />
      <button
        type="submit"
        className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none"
      >
        <FiSearch size={24} style={{ color: "white" }} />
      </button>
    </form>
  );
};

export default SearchForm;
