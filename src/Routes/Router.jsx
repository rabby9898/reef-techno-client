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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout></MainPageLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/updateForm/:id",
        element: (
          <PrivateRoute>
            <UpdateForm></UpdateForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
