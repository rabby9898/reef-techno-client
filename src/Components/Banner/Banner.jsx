import { Carousel } from "@material-tailwind/react";
const Banner = () => {
  return (
    <div>
      <Carousel className="rounded-xl">
        <div
          className="hero h-[700px]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/xSGjrm2/flat-lay-notebook-with-shopping-bag-cyber-monday-tag.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-8 text-xl md:text-3xl text-white bg-black font-bold uppercase ">
                Cyber Friday
              </h1>
              <h1 className="mb-3 text-4xl md:text-9xl  text-[#00A3D1] font-extrabold uppercase">
                Special Sale!
              </h1>
              <h1 className="mb-3 text-sm  text-white font-extrabold uppercase">
                up to
              </h1>
              <h1 className="mb-3 text-xl md:text-4xl text-white font-extrabold uppercase">
                50% Discount
              </h1>

              <button className="btn btn-primary mt-10 px-12 py-5 bg-[#00A3D1] text-white uppercase rounded-none border-0 hover:outline-none hover:bg-transparent hover:border hover:border-[#00A3D1]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="hero h-[700px]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/z6jbGDc/set-various-digital-devices.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-8 text-xl md:text-3xl text-white bg-black font-bold uppercase ">
                Cyber Friday
              </h1>
              <h1 className="mb-3 text-4xl md:text-9xl  text-[#00A3D1] font-extrabold uppercase">
                Limited Discount
              </h1>
              <h1 className="mb-3 text-xl md:text-4xl text-white font-extrabold uppercase">
                special product
              </h1>

              <button className="btn btn-primary mt-10 px-12 py-5 bg-[#00A3D1] text-white uppercase rounded-none border-0 hover:outline-none hover:bg-transparent hover:border hover:border-[#00A3D1]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="hero h-[700px]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/VWXHM1h/business-office-scene.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-8 text-xl md:text-3xl text-white bg-black font-bold uppercase ">
                Cyber Friday
              </h1>
              <h1 className="mb-3 text-4xl md:text-9xl  text-[#00A3D1] font-extrabold uppercase">
                new product
              </h1>
              <h1 className="mb-3 text-xl md:text-4xl  text-white font-extrabold uppercase">
                2023
              </h1>
              <h1 className="mb-3 text-xl md:text-7xl text-white font-extrabold uppercase">
                future experience
              </h1>

              <button className="btn btn-primary mt-10 px-12 py-5 bg-[#00A3D1] text-white uppercase rounded-none border-0 hover:outline-none hover:bg-transparent hover:border hover:border-[#00A3D1]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
