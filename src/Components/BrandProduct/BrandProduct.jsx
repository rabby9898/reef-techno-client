import { useLoaderData } from "react-router-dom";
import BrandProducts from "../BrandProducts/BrandProducts";

const BrandProduct = () => {
  const loadProducts = useLoaderData();

  return (
    <div>
      <div>
        <div className="carousel w-full h-[600px]">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/gmS9s59/big-sale-discounts-products.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/CKN2VYV/abstract-colorful-sales-banner-23-2148345455.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/VSJ3S4y/discount-dslr-camera-podium.jpg"
              className="w-full"
            />
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

      {loadProducts.length > 0 ? (
        <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5">
          {
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {loadProducts.map((product) => (
                <BrandProducts
                  key={product._id}
                  product={product}
                ></BrandProducts>
              ))}
            </div>
          }
        </div>
      ) : (
        <h1>NO Data Found</h1>
      )}
    </div>
  );
};

export default BrandProduct;
