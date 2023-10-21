import { Link, useParams } from "react-router-dom";
import { Rating } from "@material-tailwind/react";
const BrandProducts = ({ product }) => {
  const { _id, imgUrl, name, brandName, price, type, rating } = product;
  const ratingInt = parseInt(rating);
  const { brand } = useParams();

  return (
    <>
      {brand.toLowerCase() === brandName.toLowerCase() && (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full md:w-96 rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img src={imgUrl} className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {name}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ${price}
              </p>
            </div>
            <h5>{brandName}</h5>
            <h5>{type}</h5>
            <div>
              <Rating value={ratingInt} />
            </div>
          </div>
          <div className="p-6 pt-0">
            <Link to={`/productDetails/${_id}`}>
              <button
                className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                See Details
              </button>
            </Link>
          </div>
          <div className="p-6 pt-0">
            <Link to={`/updateForm/${_id}`}>
              <button
                className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Update Product
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandProducts;
