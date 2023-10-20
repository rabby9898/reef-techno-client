import aboutImg from "../../public/assets/undraw_personal_website_re_c8dv.svg";
import aboutImg2 from "../../public/assets/undraw_wait_in_line_o2aq.svg";
const About = () => {
  return (
    <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5">
      <h1 className="text-4xl text-black font-semibold text-center py-10 mb-16">
        About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center items-center gap-3 md:gap-8">
        <div className="col-span-1">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className=" col-span-1">
          <h1 className="text-2xl text-black font-semibold">About Us</h1>
          <p className="text-base text-gray-500 my-10">
            At Reef Tech, we are fervently dedicated to delivering cutting-edge
            technology experiences. Our mission is to ignite the curiosity of
            tech enthusiasts and assist them in exploring the world's most
            innovative and transformative developments, all while providing
            exceptional tech solutions and support.
          </p>
          <h1 className="text-2xl text-black font-semibold">Who We Are</h1>
          <p className="text-base text-gray-500 my-10">
            We are a team of dedicated tech enthusiasts, experts, and innovators
            who have explored every corner of the digital realm and want to
            share our passion with you. With years of experience in the tech
            industry, we've meticulously crafted a selection of unique and
            captivating tech solutions to satisfy every tech-savvy heart.
          </p>
          <h1 className="text-2xl text-black font-semibold">Get in Touch</h1>
          <p className="text-base text-gray-500 my-10">
            We're here to answer your tech-related questions, provide
            recommendations, and assist with your digital plans. Feel free to
            contact us anytime via email, phone, or through our website's chat
            support. Join us in exploring the digital beauty of the tech world
            and creating solutions that will transform your online journey.
            Let's embark on your next tech adventure together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
