import TitleSeparator from "../common/TitleSeparator";

const WorkProcess = () => {
  return (
    <div className="bg-[#f0f0f0] py-16">
      <div className="container mx-auto text-center">
        <TitleSeparator>Work Process</TitleSeparator>
        <div className="flex flex-col items-start">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-4">
            Our Journey Of Innovation
          </h2>
          <p className="text-gray-600 mb-12">
            Each project brings us closer to redefining the future of digital
            experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f0f0f0] p-6 shadow rounded-lg text-center">
            <div className="text-6xl font-bold text-gray-200 mb-4">1</div>
            <img
              src="../../../public/images/card_1.png"
              alt="Foundation Icon"
              className="mx-auto mb-4  "
            />
          </div>

          <div className="bg-[#f0f0f0]p-6 shadow rounded-lg text-center">
            <div className="text-6xl font-bold text-gray-200 mb-4">2</div>
            <img
              src="../../../public/images/card_2.png"
              alt="Growth Icon"
              className="mx-auto mb-4"
            />
          </div>

          <div className="bg-[#f0f0f0] p-6 shadow rounded-lg text-center">
            <div className="text-6xl font-bold text-gray-200 mb-4">3</div>
            <img
              src="../../../public/images/card_3.png"
              alt="Innovation Icon"
              className="mx-auto mb-4"
            />
          </div>

          <div className="bg-[#f0f0f0] p-6 shadow rounded-lg text-center">
            <div className="text-6xl font-bold text-gray-200 mb-4">4</div>
            <img
              src="../../../public/images/card_4.png"
              alt="Collaboration Icon"
              className="mx-auto mb-4"
            />
          </div>

          <div className="bg-[#f0f0f0] p-6 shadow rounded-lg text-center">
            <div className="text-6xl font-bold text-gray-200 mb-4">5</div>
            <img
              src="../../../public/images/card_5.png"
              alt="Transformation Icon"
              className="mx-auto mb-4"
            />
          </div>

          <div className="bg-[#f0f0f0] p-6 shadow rounded-lg text-center">
            <div className="text-6xl font-bold text-gray-200 mb-4">6</div>
            <img
              src="../../../public/images/card_6.png"
              alt="Achievement Icon"
              className="mx-auto mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
