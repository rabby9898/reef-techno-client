import { useLoaderData } from "react-router-dom";
import BrandProducts from "../BrandProducts/BrandProducts";

const BrandProduct = () => {
  const loadProducts = useLoaderData();

  return (
    <>
      <div>
        <div className="carousel w-full h-[600px]">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/TYjm5qr/samsung.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/tssD5P8/microsoft1.png"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="https://i.ibb.co/vYLLYbq/apple2.jpg" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
      <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5">
        {loadProducts.length > 0 ? (
          loadProducts.map((product) => (
            <BrandProducts key={product._id} product={product}></BrandProducts>
          ))
        ) : (
          <p>No product found</p>
        )}
      </div>
    </>
  );
};

export default BrandProduct;
