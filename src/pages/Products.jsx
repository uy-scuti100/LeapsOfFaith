import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import { TailSpin } from "react-loader-spinner";

const Products = () => {
  const { id } = useParams();
  const { data: productListData } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  // console.log(productListData);

  const { data: catInfo } = useFetch(`/categories/${id}?populate=*`);
  // console.log(catInfo);
  const imageUrl = import.meta.env.VITE_REACT_APP_IMAGE_URL;

  const [title, setTitle] = useState(null);
  const [catImage, setCatImage] = useState(null);
  const [catImageLoaded, setCatImageLoaded] = useState(false);

  useEffect(() => {
    if (productListData && productListData.length > 0) {
      const firstProduct = productListData[0];
      if (firstProduct.attributes?.categories?.data[0]?.attributes?.name) {
        setTitle(firstProduct.attributes.categories.data[0].attributes.name);
      }
    }

    if (catInfo && catInfo.attributes.image?.data?.attributes?.url) {
      setCatImage(catInfo.attributes.image.data.attributes.url);
    }
  }, [productListData, catInfo]);

  // Handle loading state for catImage
  useEffect(() => {
    if (catImage) {
      const img = new Image();
      img.src = `${imageUrl}${catImage}`;
      img.onload = () => {
        setCatImageLoaded(true);
      };
    }
  }, [catImage]);

  // Handle loading state
  if (!productListData || !catInfo || !catImageLoaded) {
    return (
      <div className="grid place-items-center mb-16 w-full h-[500px]">
        <TailSpin color="#000000" width={80} height={80} />
      </div>
    );
  }

  return (
    <div className="mb-16 pt-[200px] lg:pt-0">
      <div className="container mx-auto">
        <div className="mb-16 w-full h-[500px] relative">
          {catImage && (
            <img
              src={`${imageUrl}${catImage}`}
              alt="product"
              className="object-cover w-full h-full"
            />
          )}
          <div className="py-3 absolute inset-0 flex items-center justify-center text-[60px] uppercase text-center lg:text-left text-white z-30">
            {title}
          </div>
          <div className="absolute bg-black/30 inset-0"></div>
        </div>
        <div className="lg:flex gap-x-[30px]">
          <CategoryNav />
          <main>
            {/* product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {productListData.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
