import { useLoaderData } from "react-router-dom";
import Carts from "../../Components/Carts/Carts";
import { useState } from "react";

const MyCart = () => {
  const loadCarts = useLoaderData();
  const [carts, setCarts] = useState(loadCarts);
  return (
    <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5">
      <h1>Your Carts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {carts.map((cart) => (
          <Carts
            key={cart._id}
            cart={cart}
            setCarts={setCarts}
            carts={carts}
          ></Carts>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
