import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const imgUrl = form.imgUrl.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const products = {
      imgUrl,
      name,
      brandName,
      price,
      type,
      description,
      rating,
    };

    fetch(
      "https://reeftech-server-h7d6u6kgy-fajle-rabbys-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(products),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate("/");
      });
  };
  return (
    <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5">
      <div className="mx-auto mt-20 text-center">
        <h1 className="text-3xl text-black font-semibold">
          Add Your <span className="text-[#00A3D1] font-light">Product</span>
        </h1>
      </div>
      <div className="flex justify-center mx-auto">
        <form className="w-[600px]" onSubmit={handleAddProduct}>
          <label className="label">
            <span className="label-text-base">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered input-info w-full"
            name="imgUrl"
          />
          <label className="label">
            <span className="label-text-base">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-info w-full"
            name="name"
          />
          <label className="label">
            <span className="label-text-base">Brand Name</span>
          </label>
          <input
            type="text"
            placeholder="Brand Name"
            className="input input-bordered input-info w-full"
            name="brandName"
          />
          <label className="label">
            <span className="label-text-base">Type</span>
          </label>
          <input
            type="text"
            placeholder="Type"
            className="input input-bordered input-info w-full"
            name="type"
          />
          <label className="label">
            <span className="label-text-base">Price</span>
          </label>
          <input
            type="text"
            placeholder="Price"
            className="input input-bordered input-info w-full"
            name="price"
          />
          <label className="label">
            <span className="label-text-base">Short Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Short Description"
            className="input input-bordered input-info w-full"
            name="description"
          />
          <label className="label">
            <span className="label-text-base">Rating</span>
          </label>
          <input
            type="text"
            placeholder="Rating"
            className="input input-bordered input-info w-full"
            name="rating"
          />
          <input
            type="submit"
            className="btn input-info w-full mt-8 bg-[#00A3D1] uppercase text-white hover:bg-black hover:border hover:border-black"
            value="ADD Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
