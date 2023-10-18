import { Rating } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loadDetails = useLoaderData();
  const { _id, imgUrl, name, brandName, price, type, rating, description } =
    loadDetails;
  const ratingInt = parseInt(rating);
  console.log(loadDetails._id);
  return (
    <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5">
      <div className="hero h-[700px]">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="w-full text-center lg:text-left">
            <h1 className="text-4xl font-bold mt-8">{name}</h1>
            <p className="text-lg mt-8 ">
              Product id: <span className="text-gray-600">LPZ02-{_id}</span>
            </p>
            <h1 className="text-2xl  mt-8">
              Brand: <span className="">{brandName}</span>
            </h1>
            <h1 className="text-2xl  mt-8">
              Type: <span className="">{type}</span>
            </h1>
            <p className="text-base mt-8 ">
              <span className="text-gray-600">{description}</span>
            </p>
            <Rating value={ratingInt} className="mt-8" />
            <div>
              <h1 className="font-extralight text-2xl text-black mt-8">
                Price : ${price}
              </h1>
            </div>
            <div>
              <button className="bg-[#00A3D1] px-10 py-2 rounded-md text-lg mt-16 text-white border border-[#00A3D1]">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="card w-full ">
            <div>
              <img className="w-full" src={imgUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
