import Banner from "../../components/homePComponent/Banner";
import Blog from "../../components/homePComponent/Blog";
import Faq from "../../components/homePComponent/Faq";
import Footer from "../../components/homePComponent/Footer";
import Navbar from "../../components/homePComponent/Navbar";
import Services from "../../components/homePComponent/Services";
import Technologies from "../../components/homePComponent/Technologies";
import WorkProcess from "../../components/homePComponent/WorkProcess";

const Home = () => {
  return (
    <>
      <div className="bg-[#f0f0f0] max-w-[1370px] mx-auto px-5">
        <Navbar></Navbar>
        <Banner></Banner>
        <WorkProcess></WorkProcess>
        <Services></Services>
        <Technologies></Technologies>
        <Blog></Blog>
        <Faq></Faq>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
