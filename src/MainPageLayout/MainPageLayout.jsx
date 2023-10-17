import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav";

const MainPageLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainPageLayout;
