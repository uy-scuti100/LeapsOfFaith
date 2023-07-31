// import  components
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";

// images for promo

import Promo1 from "../img/adshoe1.png";
import Promo2 from "../img/adshoe2.png";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* mainslider */}
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* promo images */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 28% on all Monk strap shoes
                </div>
                <a href="#" className="uppercase text-accent">
                  Shop now
                </a>
              </div>
              <img
                className="absolute z-20 -top-[50px] md:-top-[20px] -right-4 -scale-x-100  w-[200px] md:w-[300px]"
                src={Promo1}
                alt="promo image"
                // width={300}
              />
            </div>
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 40% on all Boots
                </div>
                <a href="#" className="uppercase text-accent">
                  Shop now
                </a>
              </div>
              <img
                className="absolute z-20 -top-[30px] md:-top-[20px] -right-4 -scale-x-100 w-[200px] md:w-[300px]"
                src={Promo2}
                alt="promo image"
                // width={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
