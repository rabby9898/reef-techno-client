import { useContext } from "react";
import { Link } from "react-router-dom";
import { ModeContext } from "../../DarkModeProvider/DarkModeProvider";

const Brands = ({ brand }) => {
  const { image, name } = brand;
  const { isDarkMode } = useContext(ModeContext);
  return (
    <div className={`purchase ${isDarkMode ? "dark-mode" : ""}`}>
      <Link to={`/brandProducts/${name}`}>
        <div className="card w-full md:w-96 bg-base-100 shadow-2xl hover:shadow-inner rounded-none">
          <div className="px-10 pt-10">
            <img
              className="w-[400px] h-[120px] my-8 rounded-lg"
              src={image}
              alt="brand"
            />
          </div>

          <div className="card-body items-center text-center">
            <p className="card-title text-3xl uppercase ">{name} →</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brands;
