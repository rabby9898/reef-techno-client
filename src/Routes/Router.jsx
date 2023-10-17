import { createBrowserRouter } from "react-router-dom";
import MainPageLayout from "../MainPageLayout/MainPageLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout></MainPageLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
