import React, { memo, useCallback, useState } from "react";
import { RegisterStyle } from "./style";
import { useNavigate } from "react-router-dom";

import Card from "@/base-ui/card";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

import { studentRegister } from "@/servers";

const Registre = memo(() => {
  // 表单逻辑
  let [studentMessage, setStudentMessage] = useState({
    name: "",
    password: "",
    classes: "5",
    studentId: "",
    userId: "",
  });
  const changeStudent = useCallback(
    (e, type) => {
      switch (type) {
        case "name":
          setStudentMessage({ ...studentMessage, name: e.target.value });
          break;
        case "password":
          setStudentMessage({ ...studentMessage, password: e.target.value });
          break;
        case "classes":
          setStudentMessage({ ...studentMessage, classes: e.target.value });
          break;
        case "studentId":
          setStudentMessage({ ...studentMessage, studentId: e.target.value });
          break;
        case "userId":
          setStudentMessage({ ...studentMessage, userId: e.target.value });
          break;
        default:
          break;
      }
    },
    [studentMessage]
  );
  //跳转
  const navigate = useNavigate();
  const regiserClick = useCallback(() => {
    // 获取信息
    studentRegister(studentMessage).then((res) => {
      if (res.code !== 200) {
        React.showMessage(res.message, "error");
        return;
      } else {
        React.showMessage(res.message, "success");
      }
      navigate("/login");
    });
    //
  }, [navigate, studentMessage]);
  return (
    <RegisterStyle>
      <div className="wrapper">
        <Card>
          <div className="title">
            <h2>注册</h2>
          </div>
          <div className="logins">
            <label className="labels">
              <span className="sspan ch-password">姓名: </span>
              <TextField
                sx={{ width: "400px" }}
                className="user"
                label="请输入您的姓名"
                variant="outlined"
                value={studentMessage.name}
                onChange={(e) => changeStudent(e, "name")}
                size="small"
              />
            </label>
            <label className="labels">
              <span className="sspan ch-password">班级: </span>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  请选择您的班级
                </InputLabel>
                <Select
                  className="user"
                  labelId="demo-simple-select-label"
                  value={studentMessage.classes}
                  label="请选择您的班级"
                  size="small"
                  onChange={(e) => changeStudent(e, "classes")}
                >
                  <MenuItem value={"5"}>一(1)班</MenuItem>
                  <MenuItem value={"6"}>一(2)班</MenuItem>
                  <MenuItem value={"7"}>一(3)班</MenuItem>
                  <MenuItem value={"8"}>二(1)班</MenuItem>
                  <MenuItem value={"9"}>二(2)班</MenuItem>
                  <MenuItem value={"10"}>二(3)班</MenuItem>
                  <MenuItem value={"11"}>三(1)班</MenuItem>
                  <MenuItem value={"12"}>三(2)班</MenuItem>
                  <MenuItem value={"13"}>三(3)班</MenuItem>
                </Select>
              </FormControl>
            </label>
            <label className="labels">
              <span className="sspan ch-user">学号: </span>
              <TextField
                className="user"
                label="请输入您的学号"
                variant="outlined"
                value={studentMessage.studentId}
                onChange={(e) => changeStudent(e, "studentId")}
                size="small"
              />
            </label>
            <label className="labels">
              <span className="sspan ch-password">密码: </span>
              <TextField
                className="user"
                label="请输入您的密码"
                variant="outlined"
                value={studentMessage.password}
                onChange={(e) => changeStudent(e, "password")}
                type="password"
                size="small"
              />
            </label>
            <label className="labels">
              <span className="sspan ch-password">身份证: </span>
              <TextField
                className="user"
                label="请输入您的身份证"
                variant="outlined"
                value={studentMessage.userId}
                onChange={(e) => changeStudent(e, "userId")}
                size="small"
              />
            </label>
          </div>
          <div className="btns">
            <Button variant="outlined" size="large" onClick={regiserClick}>
              确认注册
            </Button>
          </div>
        </Card>
      </div>
    </RegisterStyle>
  );
});

export default Registre;
