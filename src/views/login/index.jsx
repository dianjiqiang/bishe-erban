import React, { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginStyle } from "./style";
import Card from "@/base-ui/card";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { studentLogin } from "@/servers";

import { changeUserMessage } from "@/store/module/home";

const Login = memo(() => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeUser = useCallback((newVal, flag) => {
    if (flag) {
      setUser(newVal.target.value);
    } else {
      setPassword(newVal.target.value);
    }
  }, []);
  const gotoPath = useCallback(
    (path) => {
      if (path === "/home") {
        // 获取密码
        if (!user || !password) {
          React.showMessage("请输入账号密码", "error");
          return;
        }
        studentLogin({ user, password }).then((res) => {
          if (res.code !== 200) {
            React.showMessage(res.message, "error");
            return;
          }
          // 将数据丢给 redux处理
          dispatch(changeUserMessage(res.data));
          navigate(path);
        });
        return;
      }
      navigate(path);
    },
    [navigate, user, password, dispatch]
  );
  return (
    <LoginStyle>
      <div className="wrapper">
        <Card>
          <div className="title">
            <h2>智能评语评教系统</h2>
          </div>
          <div className="logins">
            <label>
              <span className="ch-user">账号: </span>
              <TextField
                className="user"
                label="请输入您的账号"
                variant="outlined"
                size="small"
                value={user}
                onChange={(e) => changeUser(e, true)}
              />
            </label>
            <label>
              <span className="ch-password">密码: </span>
              <TextField
                className="user"
                label="请输入您的密码"
                variant="outlined"
                type="password"
                size="small"
                value={password}
                onChange={(e) => changeUser(e, false)}
              />
            </label>
          </div>
          <div className="btns">
            <span className="forget" onClick={() => gotoPath("/forgetps")}>
              忘记密码?
            </span>
            <Button
              variant="outlined"
              size="large"
              onClick={() => gotoPath("/register")}
            >
              注册
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => gotoPath("/home")}
            >
              登录
            </Button>
          </div>
        </Card>
      </div>
    </LoginStyle>
  );
});

export default Login;
