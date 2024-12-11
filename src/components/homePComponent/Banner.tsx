const Banner = () => {
  return (
    <div className="bg-[#f0f0f0]">
      {/* <!-- Banner Section --> */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f0f0f0] py-12 px-6 md:px-16 gap-8">
        {/* <!-- Left Section --> */}
        <div
          id="desc-part"
          className=" text-black p-8 md:p-10 rounded-lg shadow-lg md:w-1/2"
        >
          <h1 className="font-sans text-4xl md:text-6xl mb-5 font-bold leading-tight">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            We build innovative, robust, and scalable digital solutions tailored
            to transform your business.
          </p>
          <p className=" text-md mb-6">
            -- Tailored to transform your business
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white py-3 px-6 rounded  transition duration-300">
              Hire The Best Team
            </button>
            <button className="bg-white text-black py-3 px-6 rounded border border-gray-300  transition duration-300">
              Get A Free Consultation
            </button>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="mt-6 md:mt-0  md:w-1/2 flex justify-center">
          <img
            className="max-w-full h-auto rounded-lg "
            src="../../../public/images/coding_website.png"
            alt="Banner-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
