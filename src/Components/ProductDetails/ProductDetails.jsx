import { Rating } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const loadDetails = useLoaderData();
  const { _id, imgUrl, name, brandName, price, type, rating, description } =
    loadDetails;
  const ratingInt = parseInt(rating);

  //   backend
  const handleCartClick = (_id) => {
    fetch(
      "https://reeftech-server-h7d6u6kgy-fajle-rabbys-projects.vercel.app/add-to-cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id,
          imgUrl,
          name,
          brandName,
          price,
          type,
          rating,
          description,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Product Added To Your Cart",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5">
      <div className="hero h-full md:h-[700px]">
        <div className="hero-content flex-col lg:flex-row-reverse gap-5 md:gap-10 lg:gap-20">
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
              <button
                onClick={() => handleCartClick(_id)}
                className="bg-[#00A3D1] px-10 py-2 rounded-md text-lg mt-16 text-white border border-[#00A3D1]"
              >
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
