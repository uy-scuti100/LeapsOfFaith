// usefetch
import useFetch from "../hooks/useFetch";
// components
import ProductSlider from "./ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
  const { data } = useFetch(
    `/products?populate=*&filters[categories][name]=${categoryTitle}`
  );
  // console.log(data);
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <ProductSlider products={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
