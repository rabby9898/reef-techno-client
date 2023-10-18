import { createBrowserRouter } from "react-router-dom";
import MainPageLayout from "../MainPageLayout/MainPageLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import BrandProduct from "../Components/BrandProduct/BrandProduct";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import UpdateForm from "../Components/UpdateForm/UpdateForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout></MainPageLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/add-to-cart"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/brandProducts/:brand",
        element: <BrandProduct></BrandProduct>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/updateForm/:id",
        element: <UpdateForm></UpdateForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
