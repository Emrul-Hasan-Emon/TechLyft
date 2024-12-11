const Navbar = () => {
  return (
    <>
      <div className="mx-10 py-10 bg-[#F0F0F0]">
        <div
          className="w-full h-fit   flex justify-between gap-10 "
          id="header"
        >
          <div className="items bg-[#F0F0F0] w-full h-fit m-3 flex justify-around align-middle  ">
            <img
              className="h-14  bg-none static p-1 "
              src="../../../public/images/techlyftlogo.jpg"
              alt="company-logo"
            />
            <a href="#" className="items-center  text-2xl my-3 ml-5 px-2">
              Services
            </a>
            <a href="#" className="items-center  text-2xl my-3 ml-5">
              Blogs
            </a>
            <a href="#" className="items-center  text-2xl my-3 ml-5">
              Contact
            </a>
          </div>
          <div className="items  w-full h-fit  m-3">
            <button className="h-14 w-40 text-[20px] font-normal text-white bg-black float-end ">
              Schedule A Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
