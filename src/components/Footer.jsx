// icons

import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-grad">
      {" "}
      <div className="container mx-auto">
        <div className="text-center ">
          <h2 className="h2 uppercase mb-6 font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className="text-[#777777]">
            Be the first to get the latest news about trends, promotions, and
            much more
          </p>
        </div>
        {/* form */}
        <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14">
          <input
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button className="btn btn-accent min-w-[150px] text-white">
            Join
          </button>
        </form>
        {/* links */}
        <div className="text-base text-primary flex gap-x-6 capitalize max-w-max mx-auto mb-9 ">
          <a href="#" className="hover:text-primary transition-all">
            {" "}
            Returns Policy
          </a>
          <a href="#" className="hover:text-primary transition-all">
            {" "}
            Track your order
          </a>
          <a href="#" className="hover:text-primary transition-all">
            {" "}
            Shipping & delivery
          </a>
        </div>
        {/* social buttons */}
        <div className="flex gap-x-6 max-w-max mx-auto text-lg mb-16">
          <a href="#" className="hover:text-primary transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-primary transition-all">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-primary transition-all">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-primary transition-all">
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className="py-10 bprder-t border-t-primary">
        <div className="container mx-auto">
          <div className="text-center text-sm text-primary">
            copyright &copy; Leap Of Faith Inc 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
