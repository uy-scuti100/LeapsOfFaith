import { useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const SearchResult = ({ product }) => {
  const imageUrl = import.meta.env.VITE_REACT_APP_IMAGE_URL;
  const [imageLoaded, setImageLoaded] = useState < boolean > true;

  if (
    !product ||
    !product.attributes ||
    !product.attributes.image ||
    !product.attributes.image.data ||
    !product.attributes.image.data[0].attributes
  ) {
    // Handle the scenario where data is missing or not properly structured
    return <div>Product data is missing or not properly structured.</div>;
  }

  // Extract the image URL from the product data
  const { url } = product.attributes.image.data[0].attributes;

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group bg-gradient-to-t from-[#ffffff]  to-[#f4f0f0] w-full h-[362px] rounded-[8px] overflow-hidden relative">
        {/* badge */}
        {product.attributes?.isNew && (
          <div className="absolute bg-accent text-white text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        )}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          {!imageLoaded && <TailSpin color="#000000" width={50} height={50} />}
          <img
            className={`w-[160px] h-[160px] group-hover:scale-90 transition-all duration-[.4s] mix-blend-darken ${
              !imageLoaded ? "hidden" : ""
            }`}
            src={`${imageUrl}${url}`}
            alt="latest products"
            loading="lazy"
            onLoad={() => setImageLoaded(true)} // You can directly set imageLoaded to true without a separate function
          />
        </div>
        {/* product name and information */}
        <div className="px-6 pb-8 flex flex-col">
          {/* category title */}
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data.length > 0
              ? product.attributes.categories.data[0]?.attributes?.name ||
                "Unknown Category"
              : "No Category"}
          </div>

          {/* product title */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.name.substring(0, 25)}...
          </div>
          {/* price */}
          <div className="text-lg text-accent">${product.attributes.Price}</div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResult;
