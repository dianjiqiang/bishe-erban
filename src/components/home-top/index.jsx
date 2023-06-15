import React, { memo, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeTopStyle } from "./style";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

import { Input, Modal, Select } from "antd";

import { postAddTeacher } from "@/servers";

const HomeTop = memo((props) => {
  const {
    title = "问卷列表",
    addText = "新增问卷",
    placeholderSearch = "请输入姓名",
    options = [],
    optionsTootip = "请选择",
    changeOption,
    defaultValue = "七一班",
    plus = "",
    searchUser,
    isTeacherList = false,
    emitAddTeacher,
  } = props;
  const navigate = useNavigate();

  // 筛选小选项
  const handleChange = useCallback(
    (value) => {
      if (changeOption) {
        changeOption(value);
      }
    },
    [changeOption]
  );

  // 改变搜索框的值
  const searchValRef = useRef("");
  const setValueChange = useCallback((e) => {
    searchValRef.current = e.target.value;
  }, []);

  // 获取搜索框的值
  const handleSearchClick = useCallback(() => {
    if (searchUser) {
      searchUser(searchValRef.current);
    }
  }, [searchUser]);

  // 点击了新增问卷
  const handleAddQuestionnaire = useCallback(() => {
    navigate("/home/add");
  }, [navigate]);

  // 教师表单
  const [newTeacherForm, setNewTeacherForm] = useState({});
  const ChangeNewTeacherForm = useCallback(
    (e, key) => {
      const newFrom = { ...newTeacherForm };
      if (typeof e === "object") {
        newFrom[key] = e.target.value;
      } else {
        newFrom[key] = e;
      }
      setNewTeacherForm(newFrom);
    },
    [newTeacherForm]
  );
  // 点击了新增教师
  const [open, setOpen] = useState(false);
  const handleAddTeacher = useCallback(() => {
    setOpen(true);
  }, []);
  // 确定新增教师
  const handleOk = useCallback(() => {
    if (
      !newTeacherForm.name ||
      !newTeacherForm.employee ||
      !newTeacherForm.classes ||
      !newTeacherForm.charge ||
      !newTeacherForm.phone ||
      !newTeacherForm.password
    ) {
      React.showMessage("您有信息未填写", "error");
      return;
    }
    // 发送网络请求
    postAddTeacher(newTeacherForm).then((res) => {
      // 通知父页面刷新列表
      emitAddTeacher();
    });
    setNewTeacherForm({});
    setOpen(false);
  }, [newTeacherForm, emitAddTeacher]);
  // 取消新增教师
  const handleCancel = useCallback(() => {
    setNewTeacherForm({});
    setOpen(false);
  }, []);
  return (
    <HomeTopStyle>
      <div className="left">
        <h2 className="title">{title}</h2>
        {options.length ? (
          <Select
            placeholder={optionsTootip}
            style={{
              width: 120,
              position: "relative",
              top: "-3px",
              paddingLeft: "6px",
            }}
            onChange={handleChange}
            defaultValue={defaultValue}
            options={options}
          />
        ) : (
          ""
        )}
        <span className="plus">
          {plus
            ? plus.map((item, index) => <span key={index}>{item}</span>)
            : ""}
        </span>
      </div>
      <div className="right">
        <div className="search">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 180,
              height: 24,
              borderRadius: 10,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder={placeholderSearch}
              onChange={(e) => setValueChange(e)}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => handleSearchClick()}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="add-btn">
          {JSON.parse(localStorage.getItem("role")) === "administrator" ? (
            isTeacherList ? (
              <Button variant="contained" onClick={() => handleAddTeacher()}>
                新增教师
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => handleAddQuestionnaire()}
              >
                {addText}
              </Button>
            )
          ) : (
            ""
          )}
        </div>
        <Modal
          open={open}
          title="新增教师"
          onOk={handleOk}
          okText="确定"
          cancelText="取消"
          onCancel={handleCancel}
        >
          {/* 表单 */}
          <label className="item-form">
            <span className="form-text">姓名: </span>
            <Input
              className="form-input"
              value={newTeacherForm.name}
              onChange={(e) => ChangeNewTeacherForm(e, "name")}
              placeholder="请输入教师姓名"
            ></Input>
          </label>
          <label className="item-form">
            <span className="form-text">职工号: </span>
            <Input
              className="form-input"
              value={newTeacherForm.employee}
              onChange={(e) => ChangeNewTeacherForm(e, "employee")}
              placeholder="请输入教师职工号"
            ></Input>
          </label>
          <label className="item-form">
            <span className="form-text">班级: </span>
            <Select
              className="form-input"
              value={newTeacherForm.classes}
              onChange={(e) => ChangeNewTeacherForm(e, "classes")}
              options={[
                { value: "5", label: "一(1)班" },
                { value: "6", label: "一(2)班" },
                { value: "7", label: "一(3)班" },
                { value: "8", label: "二(1)班" },
                { value: "9", label: "二(2)班" },
                { value: "10", label: "二(3)班" },
                { value: "11", label: "三(1)班" },
                { value: "12", label: "三(2)班" },
                { value: "13", label: "三(3)班" },
              ]}
              placeholder="请选择班级"
            ></Select>
          </label>
          <label className="item-form">
            <span className="form-text">班主任: </span>
            <Select
              className="form-input"
              options={[
                { value: "1", label: "是" },
                { value: "0", label: "否" },
              ]}
              value={newTeacherForm.charge}
              onChange={(e) => ChangeNewTeacherForm(e, "charge")}
              placeholder="请选择是否为班主任"
            ></Select>
          </label>
          <label className="item-form">
            <span className="form-text">电话: </span>
            <Input
              className="form-input"
              value={newTeacherForm.phone}
              onChange={(e) => ChangeNewTeacherForm(e, "phone")}
              placeholder="请输入电话号码"
            ></Input>
          </label>
          <label className="item-form">
            <span className="form-text">密码: </span>
            <Input
              className="form-input"
              value={newTeacherForm.password}
              type="password"
              onChange={(e) => ChangeNewTeacherForm(e, "password")}
              placeholder="请输入密码"
            ></Input>
          </label>
        </Modal>
      </div>
    </HomeTopStyle>
  );
});

export default HomeTop;
