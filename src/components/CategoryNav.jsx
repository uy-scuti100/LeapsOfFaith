import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const CategoryNav = () => {
  const { data } = useFetch("/categories?populate=*");
  const imageUrl = import.meta.env.VITE_REACT_APP_IMAGE_URL;

  // State to track loaded images
  const [loadedImages, setLoadedImages] = useState([]);

  // Effect to update the loadedImages state when data changes
  useEffect(() => {
    if (data) {
      const loadedImageIds = data.map((category) => category.id);
      setLoadedImages(loadedImageIds);
    }
  }, [data]);

  return (
    <aside className="hidden xl:flex">
      <div className="bg-red-100/20 flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-white uppercase font-semibold flex items-center justify-center">
          Categories
        </div>
        <div>
          {data ? (
            <div className="flex flex-col gap-y-6 p-6">
              {data.map((category) => {
                const { id, attributes } = category;
                const { name, image } = attributes;

                const isImageLoaded = loadedImages.includes(id);

                return (
                  <Link
                    className="cursor-pointer transition-all uppercase hover:bg-red-100/60 hover:rounded-md hover:px-1"
                    key={id}
                    to={`/products/${id}`}
                  >
                    <div className="flex justify-between items-center">
                      {name}
                      {!isImageLoaded ? (
                        <TailSpin color="#000000" width={50} height={50} />
                      ) : (
                        <img
                          src={`${imageUrl}${image.data.attributes.url}`}
                          alt="category image"
                          className="w-[50px] h-[50px] rounded-full"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col h-full">
              <div className="mb-20">
                <TailSpin color="#000000" width={50} height={50} />
              </div>
              <div> My Database sub has prolly expired 😒🤦‍♂️</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
