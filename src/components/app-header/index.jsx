import React, { memo, useCallback, useEffect, useState } from "react";
import { AppHeaderStyle } from "./style";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate, useLocation } from "react-router-dom";

const AppHeader = memo(() => {
  const location = useLocation();
  const [mbxue, setMbxue] = useState([]);
  // 路由守卫
  useEffect(() => {
    switch (location.pathname) {
      case "/home/questionnaire/summary":
        localStorage.setItem(
          "breadCrumbs",
          JSON.stringify([
            "问卷列表",
            "问卷汇总",
            "/#/home/questionnaire/summary",
          ])
        );
        setMbxue(["问卷列表", "问卷汇总", "/#/home/questionnaire/summary"]);
        return;
      case "/home/questionnaire/favorites":
        localStorage.setItem(
          "breadCrumbs",
          JSON.stringify([
            "问卷列表",
            "收藏夹",
            "/#/home/questionnaire/summary",
          ])
        );
        setMbxue(["问卷列表", "收藏夹", "/#/home/questionnaire/summary"]);
        return;
      case "/home/questionnaire/fill":
        localStorage.setItem(
          "breadCrumbs",
          JSON.stringify(["问卷列表", "问卷填写", "/#/home/questionnaire/fill"])
        );
        setMbxue(["问卷列表", "问卷填写", "/#/home/questionnaire/fill"]);
        return;
      case "/home/techers/seventh":
        localStorage.setItem(
          "breadCrumbs",
          JSON.stringify(["教师列表", "一年级组", "/#/home/techers/seventh"])
        );
        setMbxue(["教师列表", "一年级组", "/#/home/techers/seventh"]);
        return;
      case "/home/techers/eighth":
        localStorage.setItem(
          "breadCrumbs",
          JSON.stringify(["教师列表", "二年级组", "/#/home/techers/seventh"])
        );
        setMbxue(["教师列表", "二年级组", "/#/home/techers/seventh"]);
        return;
      case "/home/techers/ninth":
        localStorage.setItem(
          "breadCrumbs",
          JSON.stringify(["教师列表", "三年级组", "/#/home/techers/seventh"])
        );
        setMbxue(["教师列表", "三年级组", "/#/home/techers/seventh"]);
        return;
      case "/home/students/seventh":
        localStorage.setItem(
          "breadCrumbs",
          JSON.stringify(["学生列表", "一年级组", "/#/home/students/seventh"])
        );
        setMbxue(["学生列表", "一年级组", "/#/home/students/seventh"]);
        return;
      case "/home/students/eighth":
        localStorage.setItem(
          "breadCrumbs",
          JSON.stringify(["学生列表", "二年级组", "/#/home/students/seventh"])
        );
        setMbxue(["学生列表", "二年级组", "/#/home/students/seventh"]);
        return;
      case "/home/students/ninth":
        localStorage.setItem(
          "breadCrumbs",
          JSON.stringify(["学生列表", "三年级组", "/#/home/students/seventh"])
        );
        setMbxue(["学生列表", "三年级组", "/#/home/students/seventh"]);
        return;
      default:
        return;
    }
  }, [location]);
  const navigate = useNavigate();
  const editChangeClick = useCallback(() => {
    // 退出登录
    localStorage.clear();
    navigate("/login");
  }, [navigate]);
  return (
    <AppHeaderStyle>
      <div className="left">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href={
              mbxue[2]
                ? mbxue[2]
                : JSON.parse(localStorage.getItem("breadCrumbs"))?.[2]
            }
          >
            {mbxue[0]
              ? mbxue[0]
              : JSON.parse(localStorage.getItem("breadCrumbs"))?.[0]}
          </Link>
          <Typography color="text.primary">
            {mbxue[1]
              ? mbxue[1]
              : JSON.parse(localStorage.getItem("breadCrumbs"))?.[1]}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="center">智能评教系统</div>
      <div className="right">
        <Avatar
          className="user"
          src={require("@/assets/image/1 (1).jpg")}
          alt=""
        />
        <span className="name">
          你好, {JSON.parse(localStorage.getItem("name"))}
        </span>
        <Button
          variant="contained"
          sx={{
            height: "25px",
            marginLeft: "10px",
          }}
          className="exit-btn"
          size="small"
          onClick={editChangeClick}
        >
          退出登录
        </Button>
      </div>
    </AppHeaderStyle>
  );
});

export default AppHeader;
