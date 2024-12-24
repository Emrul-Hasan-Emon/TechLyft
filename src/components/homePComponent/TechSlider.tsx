const TechSlider = () => {
  return (
    <>
      <div className="flex gap-5 mr-5">
        {/* <!-- Repeat logos --> */}
        <div className="flex border border-gray-500 items-center justify-center bg-white shadow-md  px-4 py-2 ">
          <img
            src="../../../public/images/react.png"
            alt="React"
            className="w-8 h-8"
          />
          <span className="ml-2 capitalize font-bold text-2xl text-gray-500">
            React
          </span>
        </div>
        <div className="flex border border-gray-500 items-center justify-center bg-white shadow-md  px-4 py-2">
          <img
            src="../../../public/images/vue.png"
            alt="Vue"
            className="w-8 h-8"
          />
          <span className="ml-2 capitalize font-bold text-2xl text-gray-500">
            Vue
          </span>
        </div>
        <div className="flex border border-gray-500 items-center justify-center bg-white shadow-md  px-4 py-2">
          <img
            src="../../../public/images/svelte.png"
            alt="Svelte"
            className="w-8 h-8"
          />
          <span className="ml-2 capitalize font-bold text-2xl text-gray-500">
            Svelte
          </span>
        </div>{" "}
        <div className="flex border border-gray-500 items-center justify-center bg-white shadow-md  px-4 py-2">
          <img
            src="../../../public/images/svelte.png"
            alt="Svelte"
            className="w-8 h-8"
          />
          <span className="ml-2 capitalize font-bold text-2xl text-gray-500">
            Svelte
          </span>
        </div>
        <div className="flex border border-gray-500 items-center justify-center bg-white shadow-md  px-4 py-2">
          <img
            src="../../../public/images/nextjs.png"
            alt="NextJS"
            className="w-8 h-8"
          />
          <span className="ml-2 capitalize font-bold text-2xl text-gray-500">
            NextJS
          </span>
        </div>
        <div className="flex border border-gray-500 items-center justify-center bg-white shadow-md  px-4 py-2">
          <img
            src="../../../public/images/nextjs.png"
            alt="NextJS"
            className="w-8 h-8"
          />
          <span className="ml-2 capitalize font-bold text-2xl text-gray-500">
            NextJS
          </span>
        </div>
        <div className="flex border border-gray-500 items-center justify-center bg-white shadow-md  px-4 py-2">
          <img
            src="../../../public/images/angular.png"
            alt="Angular"
            className="w-8 h-8"
          />
          <span className="ml-2 capitalize font-bold text-2xl text-gray-500">
            Angular
          </span>
        </div>
        <div className="flex border border-gray-500 items-center justify-center bg-white shadow-md  px-4 py-2">
          <img
            src="../../../public/images/tailwind.png"
            alt="Tailwind"
            className="w-8 h-8"
          />
          <span className="ml-2 capitalize font-bold text-2xl text-gray-500">
            Tailwind
          </span>
        </div>
      </div>
    </>
  );
};

export default TechSlider;
