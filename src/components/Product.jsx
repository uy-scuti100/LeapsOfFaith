import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner"; // Replace 'react-loading-icons' with the correct package name you are using for TailSpin

const Product = ({ product }) => {
  const imageUrl = import.meta.env.VITE_REACT_APP_IMAGE_URL;
  const [imageLoaded, setImageLoaded] = useState(false); // State to track image loading

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Alternatively, to refresh the page, you can use the following line
    // window.location.reload();
  };

  return (
    <Link to={`/product/${product.id}`} onClick={handleClick}>
      <div className="group bg-gradient-to-t from-[#ffffff]  to-[#f4f0f0] w-full h-[362px] rounded-[8px] overflow-hidden relative">
        {/* badge */}
        {product.attributes?.isNew && (
          <div className="absolute bg-accent text-white text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        )}
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          {!imageLoaded && ( // Show TailSpin component while the image is not loaded
            <TailSpin color="#000000" width={50} height={50} />
          )}
          <img
            className={`w-[160px] h-[160px] group-hover:scale-90 transition-all mix-blend-darken ${
              !imageLoaded ? "hidden" : "" // Hide the image when it's not loaded
            }`}
            src={`${imageUrl}${product.attributes?.image?.data?.[0]?.attributes.url}`}
            alt="latest products"
            onLoad={handleImageLoad} // Set imageLoaded to true when the image is loaded
          />
        </div>
        {/* product name and information */}
        <div className="px-6 pb-8 flex flex-col">
          {/* category title */}
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.name.slice(0, -1)}
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

export default Product;
