import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  const { image, name } = brand;
  return (
    <div>
      <Link>
        <div className="card w-96 bg-base-100 shadow-2xl hover:shadow-inner rounded-none">
          <div className="px-10 pt-10">
            <img
              className="w-[400px] h-[120px] my-8 rounded-lg"
              src={image}
              alt="brand"
            />
          </div>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl uppercase">{name} →</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brands;
