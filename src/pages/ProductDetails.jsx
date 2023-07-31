// import hooks
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext, useState } from "react";

// context
import { CartContext } from "../context/CartContext";

// import components
import RelatedProducts from "../components/RelatedProducts";
import { TailSpin } from "react-loader-spinner";
import Accordion from "../components/Accordion";
import Gurantee from "../components/Gurantee";
import { Shipping } from "../components/Shipping";
import ColorBox from "../components/ColorBox";
import SizeBox from "../components/SizeBox";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  // console.log(id);
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  // console.log(data);
  const imageUrl = import.meta.env.VITE_REACT_APP_IMAGE_URL;

  // Keep track of open accordion state
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to handle toggling of accordions
  const handleAccordionToggle = (header) => {
    setOpenAccordion((prev) => (prev === header ? null : header));
  };
  if (!data) {
    return (
      <div className="grid place-items-center">
        <TailSpin color="#000000" width={80} height={80} />
      </div>
    );
  }

  const categoryTitle =
    data[0]?.attributes?.categories?.data?.[0]?.attributes?.name ??
    "Default Category Title";
  const url = data[0].attributes?.image.data[0].attributes.url;
  // = data[0]?.attributes?.image[0]?.data[0]?.attributes?.url;
  return (
    <section className="mb-16 pt-[200px] lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              src={`${imageUrl}${url}`}
              alt=""
              className="w-full max-w-[65%] mix-blend-darken"
            />
          </div>
          <div className="flex-1 bg-red-100/10 p-3 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* categorie name */}
            <div className="uppercase text-accent text-lg font-medium mb-2">
              {data[0].attributes.categories.data[0].attributes.name.slice(
                0,
                -1
              )}
            </div>
            {/* title */}
            <h2 className="h2 mb-4 ">{data[0].attributes.name}</h2>
            {/* product description */}
            <p className="mb-12">{data[0].attributes.description}</p>

            {/* sizes and color */}
            <div className="pb-20">
              <div className="pb-4">
                <h3 className="text-xl font-semibold mb-2">Available Colors</h3>
                <div className="flex gap-x-6">
                  {data[0].attributes.colors.data.map((color) => (
                    <ColorBox
                      key={color.id}
                      colorValue={color.attributes.value}
                    />
                  ))}
                </div>
              </div>
              <div className="pb-4">
                <h3 className="text-xl font-semibold mb-2">Available Sizes</h3>
                <div className="flex gap-x-6">
                  {data[0].attributes.sizes.data.map((size) => (
                    <SizeBox key={size.id} sizeName={size.attributes.name} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-6">
              <div className="text-3xl text-accent font-semibold basis-1/2">
                $ {data[0].attributes.Price}
              </div>
              <button
                onClick={() => addToCart(data[0], id ?? "")}
                className="btn btn-accent text-white basis-1/2"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* miore information */}
        <div className="mb-10">
          <div className="pb-4">
            <Accordion
              header="Upper Features"
              content={data[0].attributes.Upper_Features}
              isOpen={openAccordion === "Upper Features"}
              onToggle={() => handleAccordionToggle("Upper Features")}
            />
          </div>
          <div className="pb-4">
            <Accordion
              header="Internal Details"
              content={data[0].attributes.Internal_Details}
              isOpen={openAccordion === "Internal Details"}
              onToggle={() => handleAccordionToggle("Internal Details")}
              table={false} // Set table prop to false since it's not a table
            />
          </div>
          <div className="pb-4">
            <Accordion
              header="Sole Details"
              content={data[0].attributes.Sole_Details}
              isOpen={openAccordion === "Sole Details"}
              onToggle={() => handleAccordionToggle("Sole Details")}
              table={false} // Set table prop to false since it's not a table
            />
          </div>
          <div className="pb-4">
            <Accordion
              header="Sizing"
              table={true} // Set table prop to true to render SizeChart
              isOpen={openAccordion === "Sizing"}
              onToggle={() => handleAccordionToggle("Sizing")}
            />
          </div>

          <div className="pb-4">
            <Accordion
              header="Guarantee"
              content={<Gurantee />} // Pass Guarantee component as content
              isOpen={openAccordion === "Guarantee"}
              onToggle={() => handleAccordionToggle("Guarantee")}
              table={false} // Set table prop to false since it's not a table
            />
          </div>
          <div className="pb-4">
            <Accordion
              header="Shipping"
              content={<Shipping />} // Pass Guarantee component as content
              isOpen={openAccordion === "Shipping"}
              onToggle={() => handleAccordionToggle("Shipping")}
              table={false} // Set table prop to false since it's not a table
            />
          </div>
        </div>
        <h2 className="h2 mb-6 text-center xl:text-left">YOU MAY ALSO LIKE</h2>
        <p className="mb-6 text-center xl:text-left">
          Shop similar items to the{" "}
          {data[0].attributes.name
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </p>

        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </section>
  );
};

export default ProductDetails;
