import React, { memo, useEffect, useCallback, useState } from "react";
import { FractionStyle } from "./style";
import { useNavigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";

import TheAnswer from "@/components/the-answer";
import TheChoice from "@/components/the-choice";
import TheFill from "@/components/the-fill";
import TheRadio from "@/components/the-radio";
import EditAnswer from "@/components/edit-answer";
import EditChoice from "@/components/edit-choice";
import EditFill from "@/components/edit-fill";
import EditRadio from "@/components/edit-radio";
import { Input, TreeSelect, Select } from "antd";

import { getTeacherNameList, postAddQue } from "@/servers";
import { queScoreTemplate } from "@/base-data";

const Fraction = memo(() => {
  const navigate = useNavigate();
  // 请求classTPropsValue
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    getTeacherNameList().then((res) => {
      setClassData(res.data);
    });
  }, []);
  // 班级选择
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };
  const tProps = {
    treeData: classData,
    value,
    onChange,
    placeholder: "请选择班级",
  };

  // 控制新增题目出现选项
  const [topicType, setTopicType] = useState(false);

  // 题目的类型
  const [tmType, setTmType] = useState("");

  // 切换题目值
  const [queTitle, setQueTitle] = useState("");
  const changeTitle = useCallback((e) => {
    setQueTitle(e.target.value);
  }, []);

  //点击了新增题目
  const handleAddClick = useCallback(() => {
    setTopicType(!topicType);
  }, [topicType]);

  // 切换了题目类型
  const handleChangeClick = useCallback(
    (e) => {
      setTmType(e.target.value);
      setTopicType(!topicType);
    },
    [topicType]
  );

  // 具体题目列表
  const [topicList, setTopicList] = useState([]);

  // 获取到子组件传递过来的值
  const handleSubmitClick = useCallback(
    (payload) => {
      if (payload.type === "radio" || payload.type === "choice") {
        payload?.options?.forEach((item, index) => {
          item.value = "option" + (index + 1) + "_number";
        });
      }
      const newTopicList = [...topicList];
      payload.qid = newTopicList.length + 1;
      newTopicList.push(payload);
      setTopicList(newTopicList);

      //清空数据
      setTopicType(false);
      setTmType("");
    },
    [topicList]
  );

  // 监听新增题目切换
  const [editElement, setEditElement] = useState("");
  useEffect(() => {
    switch (tmType) {
      case "answer":
        setEditElement(<EditAnswer handleSubmitClick={handleSubmitClick} />);
        break;
      case "radio":
        setEditElement(
          <EditRadio handleSubmitClick={handleSubmitClick}></EditRadio>
        );
        break;
      case "fill":
        setEditElement(
          <EditFill handleSubmitClick={handleSubmitClick}></EditFill>
        );
        break;
      case "choice":
        setEditElement(
          <EditChoice handleSubmitClick={handleSubmitClick}></EditChoice>
        );
        break;
      default:
        setEditElement(<span></span>);
    }
  }, [tmType, handleSubmitClick]);

  // 提交表单
  const submitQue = useCallback(() => {
    if (queTitle === "") {
      React.showMessage("请输入问卷标题后提交", "warning");
      return;
    }
    if (!value) {
      React.showMessage("请选取教师后提交", "warning");
      return;
    }
    if (!topicList.length) {
      React.showMessage("请拟出题目后提交", "warning");
      return;
    }
    const submitObject = {};
    submitObject.title = queTitle;
    submitObject.teacherId = value;
    submitObject.topic = topicList;
    // 返回给后端
    postAddQue(submitObject, 1).then((res) => {
      React.showMessage("提交问卷成功");
      navigate("/home/questionnaire/summary");
    });
  }, [topicList, queTitle, value, navigate]);

  // 模板选择
  const [templateValue, setTemplateValue] = useState();
  const handleClickChangeTemplate = useCallback((e) => {
    setTemplateValue(e);
    // 获取数据
    const data = queScoreTemplate[e];
    setQueTitle(data.data.titleValue);
    setTopicList(data.data.topic);
  }, []);

  // 删除题目
  const emitDeteteTopic = (index) => {
    const newTopicList = [...topicList];
    newTopicList.splice(index, 1);
    newTopicList.forEach((item, index) => {
      item.qid = index + 1;
    });
    setTopicList(newTopicList);
  }
  return (
    <FractionStyle>
      <div className="title">
        <span>问卷标题 : </span>
        <Input
          className="title-input"
          value={queTitle}
          onChange={changeTitle}
          placeholder="请输入问卷标题"
        ></Input>
        <span style={{ paddingLeft: "10px" }}>选取教师:</span>
        <TreeSelect className="tree-select" {...tProps} />
        <Select
          className="template-select"
          value={templateValue}
          onChange={(e) => handleClickChangeTemplate(e)}
          options={queScoreTemplate}
          placeholder="没思路? 点击选择模板!"
        ></Select>
        <Button
          onClick={submitQue}
          className="submit-items"
          variant="contained"
          size="small"
        >
          提交
        </Button>
      </div>
      <div className="topic">
        {topicList?.map?.((item, index) => {
          switch (item.type) {
            case "answer":
              return (
                <TheAnswer
                  key={item.qid}
                  itemData={item}
                  isTeacherEdit={true}
                  emitDeteteTopic={() => emitDeteteTopic(index)}
                />
              );
            case "radio":
              return (
                <TheRadio
                  key={item.qid}
                  itemData={item}
                  isTeacherEdit={true}
                  emitDeteteTopic={() => emitDeteteTopic(index)}
                ></TheRadio>
              );
            case "fill":
              return (
                <TheFill
                  key={item.qid}
                  itemData={item}
                  isTeacherEdit={true}
                  emitDeteteTopic={() => emitDeteteTopic(index)}
                ></TheFill>
              );
            case "choice":
              return (
                <TheChoice
                  key={item.qid}
                  itemData={item}
                  isTeacherEdit={true}
                  emitDeteteTopic={() => emitDeteteTopic(index)}
                ></TheChoice>
              );
            default:
              return <span key={item.qid}></span>;
          }
        })}
      </div>
      <div className="edit">{editElement}</div>
      <div className="xuanx">
        {topicType === true ? (
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={tmType}
            onChange={(e) => handleChangeClick(e)}
          >
            <FormControlLabel
              value="radio"
              control={<Radio />}
              label="单选题"
            />
            <FormControlLabel
              value="choice"
              control={<Radio />}
              label="多选题"
            />
            <FormControlLabel value="fill" control={<Radio />} label="填空题" />
            <FormControlLabel
              value="answer"
              control={<Radio />}
              label="简答题"
            />
          </RadioGroup>
        ) : (
          ""
        )}
      </div>
      <div className="btn">
        <Button
          variant="contained"
          onClick={() => handleAddClick()}
          sx={{ marginTop: "20px" }}
          size="small"
        >
          新增题目
        </Button>
      </div>
    </FractionStyle>
  );
});

export default Fraction;
