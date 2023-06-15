import React, { memo, Suspense, useCallback, useEffect, useState } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";

import { AppStyle } from "./AppStyle";
import routes from "./router";
import { Snackbar, Alert } from "@mui/material";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const App = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  // 路由守卫
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (location.pathname.includes("/home")) {
      // 验证token是否存在 跳转到登录页
      if (!token) {
        navigate("/login");
      }
    } else {
      // 验证是否已经存在token 存在滚到详情页
      if (token) {
        navigate("/home/questionnaire/summary");
      }
    }
  }, [location, navigate]);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [open, setOpen] = useState(false);
  const [timeout, setTimeout] = useState(3000);
  const [message, setMessage] = useState("默认提示");
  const [type, setType] = useState("success");
  const [isLoading, setIsLoading] = useState(false);
  React.showLoading = useCallback((flag) => {
    setIsLoading(flag);
  }, []);
  React.showMessage = useCallback((message, type, timeout = 3000) => {
    setType(type);
    setTimeout(timeout);
    setMessage(message);
    setOpen(true);
  }, []);
  React.handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  // react路由守卫

  return (
    <AppStyle>
      <div className="bg-bilibili">
        {/* <video
          src={require("@/assets/video/bg.mp4")}
          autoPlay
          loop
          muted
        ></video> */}
        {/* <img src={require("@/assets/image/105622388_p0.jpg")} alt="" /> */}
      </div>
      {isLoading && (
        <div className="isLoading">
          <Spin className="loading" indicator={antIcon} />
        </div>
      )}
      <Snackbar
        open={open}
        autoHideDuration={timeout}
        onClose={React.handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={React.handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </AppStyle>
  );
});

export default App;
