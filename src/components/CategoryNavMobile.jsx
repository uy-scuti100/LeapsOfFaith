// import close icon
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Logo from "../img/logo-removebg-preview.png";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch("/categories?populate=*");
  const imageUrl = import.meta.env.VITE_REACT_APP_IMAGE_URL;

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCatNavMobile(false);

    // Alternatively, to refresh the page, you can use the following line
    // window.location.reload();
  };

  return (
    <nav className="w-full md:w-[500px] h-full bg-white p-8 xl:hidden">
      <div
        onClick={() => setCatNavMobile(false)}
        className="float-right mb-8 cursor-pointer"
      >
        <FiX size={24} className="bg-accent-hover text-white rounded" />
      </div>

      <div className="my-10 flex items-center justify-center border-b pb-3">
        <div>
          <img src={Logo} alt="logo" className="w-[100px]" />
        </div>
      </div>

      <div className="flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
            <Link
              className="cursor-pointer transition-all uppercase hover:bg-red-100/60 hover:rounded-md hover:px-1"
              key={category.id}
              to={`products/${category.id}`}
              onClick={handleClick}
            >
              <div className="flex justify-between items-center w-full">
                {category?.attributes.name}
                <img
                  src={`${imageUrl}${category?.attributes.image.data.attributes.url}`}
                  alt="category image"
                  className="w-[50px] h-[50px] rounded object-cover"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryNavMobile;
