import { useLoaderData } from "react-router-dom";
import Brands from "../Brand/Brands";

const Purchase = () => {
  const brands = useLoaderData();

  return (
    <>
      <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5">
        <div className="mx-auto my-20 text-center">
          <h1 className="text-3xl md:text-6xl text-black font-semibold">
            Purchase From Our{" "}
            <span className="text-[#00A3D1] font-light">Trusted Brands</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center content-center place-content-center gap-8 mb-20">
          {brands.map((brand) => (
            <Brands key={brand.id} brand={brand}></Brands>
          ))}
        </div>
      </div>
    </>
  );
};

export default Purchase;
