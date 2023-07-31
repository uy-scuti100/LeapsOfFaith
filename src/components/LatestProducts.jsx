// import the useFetch hook
import useFetch from "../hooks/useFetch";

// import componenents
import ProductSlider from "./ProductSlider";

import { TailSpin } from "react-loader-spinner";

const LatestProducts = () => {
  // get the new products
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");

  // this is an array of objects and each object representing a single product
  // console.log(data);
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      </div>
      {data ? (
        <ProductSlider products={data} />
      ) : (
        <div className="flex justify-center items-center flex-col h-full">
          <div className="mb-20">
            <TailSpin color="#000000" width={50} height={50} />
          </div>
          <div> My Database sub has prolly expired 😒🤦‍♂️</div>
        </div>
      )}
    </div>
  );
};

export default LatestProducts;
