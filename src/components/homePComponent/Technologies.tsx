import Marquee from "react-fast-marquee";
import TitleSeparator from "../common/TitleSeparator";
import TechSlider from "./TechSlider";
const Technologies = () => {
  return (
    <div className="py-16">
      <TitleSeparator>Technologies</TitleSeparator>
      <div className="flex flex-col items-start mb-10">
        <h2 className="text-4xl font-semibold text-gray-800 text-left ">
          Cutting-Edge
          <br /> Technologies We Use
        </h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Embracing the latest tools & frameworks to deliver
          <br /> — innovative & high-performance solutions.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <Marquee gradient gradientColor="#f0f0f0" gradientWidth={200}>
          <TechSlider></TechSlider>
        </Marquee>
        <Marquee
          direction="right"
          gradient
          gradientColor="#f0f0f0"
          gradientWidth={200}
        >
          <TechSlider></TechSlider>
        </Marquee>
        <Marquee gradient gradientColor="#f0f0f0" gradientWidth={200}>
          <TechSlider></TechSlider>
        </Marquee>
      </div>
    </div>
  );
};

export default Technologies;
