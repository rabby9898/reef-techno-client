import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import img3 from "../../public/assets/undraw_wait_in_line_o2aq.svg";

const ContactUs = () => {
  return (
    <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-10">
      <div className="flex justify-center mx-auto items-center">
        <div className="text-center">
          <h1 className="text-4xl text-black font-semibold">Contact Us</h1>

          <div className="grid col-span-1 md:grid-cols-2 gap-5 md:gap-10 justify-items-center items-center content-center">
            <div className="col-span-1">
              <div className="flex justify-start gap-4 mt-8">
                <div>
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div className="text-lg">
                  <p>Phone:+99439458395</p>
                  <p>Customer Support:585</p>
                </div>
              </div>
              <div className="flex justify-start mt-10 gap-4">
                <div>
                  <AiOutlineMail className="text-2xl" />
                </div>
                <div className="text-left text-lg">
                  <p>Email: reeftecht@yahoo.com</p>
                  <p>
                    1234 Elm Street Springfield, Anytown 56789 Fictional Country
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
