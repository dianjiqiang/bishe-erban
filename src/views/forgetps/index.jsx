import React, { memo, useCallback, useState } from "react";
import { ForgetpsStyle } from "./style";
import Card from "@/base-ui/card";

import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";

import { editPassword } from "@/servers";

const Forgetps = memo(() => {
  const navigate = useNavigate();

  // 学号身份证密码
  const [studentId, setUser] = useState("");
  const [userId, setIdCard] = useState("");
  const [password, setPassword] = useState("");
  const changeUser = useCallback(
    (e) => {
      setUser(e.target.value);
    },
    [setUser]
  );
  const changeIdCard = useCallback(
    (e) => {
      setIdCard(e.target.value);
    },
    [setIdCard]
  );
  const changePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );
  const changeOK = useCallback(() => {
    // 点击了修改密码
    editPassword({ studentId, userId, password }).then((res) => {
      if (res.code !== 200) {
        React.showMessage(res.message, "error");
      } else {
        React.showMessage(res.message, "success");
        navigate("/login");
      }
    });
  }, [navigate, studentId, userId, password]);
  return (
    <ForgetpsStyle>
      <div className="wrapper">
        <Card>
          <div className="title">
            <h2>找回密码</h2>
          </div>
          <div className="logins">
            <label>
              <span className="ch-user">学号: </span>
              <TextField
                className="user"
                label="请输入您的学号"
                variant="outlined"
                size="small"
                value={studentId}
                onChange={(e) => changeUser(e)}
              />
            </label>
            <label>
              <span className="ch-password">身份证: </span>
              <TextField
                className="user"
                label="请输入您的身份证"
                variant="outlined"
                size="small"
                value={userId}
                onChange={(e) => changeIdCard(e)}
              />
            </label>
            <label>
              <span className="ch-password">密码: </span>
              <TextField
                className="user"
                label="请填写密码"
                variant="outlined"
                type="password"
                size="small"
                value={password}
                onChange={(e) => changePassword(e)}
              />
            </label>
          </div>
          <div className="btns">
            <Button variant="outlined" size="large" onClick={changeOK}>
              修改
            </Button>
          </div>
        </Card>
      </div>
    </ForgetpsStyle>
  );
});

export default Forgetps;
