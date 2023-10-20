import About from "../../AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Purchase from "../../Components/Purchase/Purchase";
import ContactUs from "../../ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Purchase></Purchase>
      <About></About>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
