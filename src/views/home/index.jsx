import React, { memo, Suspense, useEffect } from "react";
import AppHeader from "../../components/app-header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavMenu from "../../components/nav-memu";
import { HomeStyle } from "./style";

const Home = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("role")) === "student" &&
      location.pathname === "/home/questionnaire/summary"
    ) {
      navigate("/home/questionnaire/fill");
    }
  }, [navigate, location]);
  return (
    <HomeStyle>
      <NavMenu></NavMenu>
      <AppHeader></AppHeader>
      <div className="content">
        <Suspense>
          <Outlet></Outlet>
        </Suspense>
      </div>
    </HomeStyle>
  );
});

export default Home;
