const Footer = () => {
  return (
    <div className="bg-black px-5  text-white">
      {/* <!-- Footer Section --> */}
      <footer className="relative py-16  bg-black text-white">
        {/* <!-- Top Left Logo --> */}
        <div className="max-w-[1370px] mx-auto">
          <img
            src="../../../public/images/techlyftlogo.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-xl "
          />

          {/* <!-- Main Footer Content --> */}
          <div className="container mx-auto flex flex-wrap justify-between mt-10 ">
            {/* <!-- Left Section --> */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              {/* <!-- Heading --> */}
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Collaborating With Us Is <br /> Your Pathway to Success.
              </h2>

              {/* <!-- Buttons --> */}
              <div className="flex space-x-4">
                <button className="bg-white text-black py-2 px-4 rounded">
                  Get A Free Consultation
                </button>
                <button className="border border-gray-400 py-2 px-4 rounded">
                  Hire The Best Team
                </button>
              </div>
            </div>

            {/* <!-- Right Section --> */}
            <div className="w-full md:w-1/2 flex justify-between">
              {/* <!-- Email Section --> */}
              <div className="mb-8 md:mb-0">
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-200">techlyft.net@gmail.com</p>
              </div>

              {/* <!-- Navigation Links Section --> */}
              <div className="mb-8 md:mb-0">
                <ul className="text-gray-200 space-y-1">
                  <a href="#">
                    <li className="font-semibold text-md mb-2">Service</li>
                  </a>
                  <a href="#">
                    <li className="font-semibold text-md mb-2">Work Process</li>
                  </a>
                  <a href="#">
                    <li className="font-semibold text-md mb-2">Blogs</li>
                  </a>
                  <a href="#">
                    <li className="font-semibold text-md mb-2">Contact</li>
                  </a>
                </ul>
              </div>

              {/* <!-- Services List --> */}
              <div>
                <ul className="text-white space-y-2">
                  <li>Custom Web Development</li>
                  <li>Digital Marketing & SEO</li>
                  <li>Cloud Services</li>
                  <li>UI/UX Design</li>
                  <li>API Development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Bottom Section --> */}
          <div className="mt-12 flex flex-wrap justify-between items-center border-t border-gray-800 pt-8">
            {/* <!-- Copyright --> */}
            <p className="text-gray-400 text-sm">
              © Techlyft, All rights reserved.
            </p>

            {/* <!-- Social Media Icons --> */}
            <div className="flex space-x-10">
              <a href="#" className="hover:text-gray-300 text-2xl p-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300 text-2xl p-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300 text-2xl p-2">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="hover:text-gray-300 text-2xl p-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-gray-300 text-2xl p-2">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
