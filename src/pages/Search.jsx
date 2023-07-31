import { useLocation } from "react-router-dom";

import useFetch from "../hooks/useFetch";

import CategoryNav from "../components/CategoryNav";

import SearchResult from "../components/SearchResult";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  const { data } = useFetch(
    `/products?populate=*&filters[name][$contains]=${searchTerm}`
  );
  // console.log(data);

  if (!data) {
    <div className="container flex justify-center">Loading...</div>;
  }

  return (
    <div className="mb-[30px] pt-40 lg:pt-4 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px] ">
          <CategoryNav />
          <div className="py-3 text-xl uppercase text-center lg:text-left">
            {data && data.length === 1 ? (
              <div className="mb-4">
                {`only ${data.length} result found for ${searchTerm}`}
              </div>
            ) : data && data.length > 1 ? (
              <div className="mb-4">
                {`${data.length} results found for ${searchTerm}`}
              </div>
            ) : (
              <div className="mb-4">
                😪😪 Sorry, no results found for {searchTerm}! 👟
              </div>
            )}
            {/* product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data && data.length > 0
                ? data.map((product, i) => {
                    return <SearchResult key={i} product={product} />;
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
