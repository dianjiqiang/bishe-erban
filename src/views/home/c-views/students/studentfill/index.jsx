import React, { memo, useCallback, useEffect, useState } from "react";
import { StudentFillStyle } from "./styled";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchQueryQueTopic } from "@/store/module/questionnaire";

import TheRadio from "@/components/the-radio";
import TheChoice from "@/components/the-choice";
import TheAnswer from "@/components/the-answer";
import TheFill from "@/components/the-fill";

import Button from "@mui/material/Button";

import {
  postQueSubmit,
  getScoreNotFractionQue,
  postScoreFractionQue,
} from "@/servers";

const StudentFill = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { studentTopicList } = useSelector(
    (state) => ({
      studentTopicList: state.questionnaire.studentTopicList,
    }),
    shallowEqual
  );
  const [searchParams] = useSearchParams();
  const [topicList, setTopicList] = useState([]);
  // 获取学生题目列表
  useEffect(() => {
    // 获取id 和 type
    const id = searchParams.get("id");
    const type = searchParams.get("type");
    if (type === "1") {
      // 查询分数类问卷
      dispatch(fetchQueryQueTopic({ id, type }));
    } else {
      // 查询无分数类问卷
      dispatch(fetchQueryQueTopic({ id, type }));
    }
  }, [searchParams, dispatch]);
  // 学生修改问卷属性
  const studentEdit = useCallback(
    (qid, value) => {
      const newTopicList = JSON.parse(JSON.stringify(topicList));
      newTopicList[qid - 1].value = value;
      setTopicList(newTopicList);
    },
    [topicList]
  );
  useEffect(() => {
    setTopicList(studentTopicList);
  }, [studentTopicList]);
  // 改卷/提交
  const onSubMit = useCallback(async () => {
    let score = 0;
    let totalScore = 0;
    let isNull = false;
    let robot_score = 0;
    topicList.forEach((item, index) => {
      if ((item.type === "choice" && !item.value.length) || !item.value) {
        isNull = true;
        React.showMessage("您有内容未填写", "error");
      }
      return (totalScore += item.score);
    });
    if (isNull) {
      return;
    }
    const ValueArray = [];
    topicList.forEach((item, index) => {
      if (item.type === "choice") {
        let optionScore = 0;
        item.options.forEach((child) => {
          if (item.value.indexOf(child.value) !== -1) {
            optionScore += child.score;
          }
        });
        if (optionScore >= item.score) {
          score += item.score;
        } else {
          score += optionScore;
        }
      } else if (item.type === "radio") {
        let optionScore = 0;
        item.options.forEach((child) => {
          if (item.value === child.value) {
            if (child.score) {
              ValueArray[index] =
                (child.score === item.score ? 1 : 0) +
                "=" +
                child.label +
                "," +
                item.title;

              robot_score += child.score;
            } else {
              ValueArray[index] = child.label + "," + item.title;
            }
            optionScore += child.score;
          }
        });
        if (optionScore >= item.score) {
          score += item.score;
        } else {
          score += optionScore;
        }
      } else {
        if (item.value) {
          score += item.score;
        }
      }
    });
    score = ((100 * score) / totalScore).toFixed(2);
    // 获取问卷id  学生id  人工智能评分  真实评分
    const queId = searchParams.get("id");
    const studentId = JSON.parse(localStorage.getItem("studentId"));
    // 如果是分数类型就训练它
    if (searchParams.get("type") === "1") {
      for (let i of ValueArray) {
        console.log(i);
        await postScoreFractionQue({ content: i });
      }
    } else {
      // 如果是无分数类型就获取分数
      for (let i of ValueArray) {
        const res = await getScoreNotFractionQue(i);
        robot_score += res;
      }
    }
    if (searchParams.get("type") !== "1") {
      robot_score = (robot_score / ValueArray.length).toFixed(2);
    } else {
      robot_score = (
        ((100 * robot_score) / totalScore).toFixed(2) - Math.random()
      ).toFixed(2);
    }
    if (searchParams.get("type") === "1") {
      postQueSubmit(
        {
          queId,
          studentId,
          robot_score,
          score,
          topics: topicList,
        },
        true
      ).then(() => {
        React.showMessage("提交问卷成功");
        navigate(-1);
      });
    } else {
      postQueSubmit({
        queId,
        studentId,
        robot_score,
        topics: topicList,
      }).then(() => {
        React.showMessage("提交问卷成功");
        navigate(-1);
      });
    }
  }, [navigate, topicList, searchParams]);
  return (
    <StudentFillStyle>
      <div className="content-fill">
        <h3 style={{ textAlign: "center", paddingTop: "30px" }}>
          {searchParams.get("name")}
        </h3>
        <div className="topic">
          {topicList.map((item) => {
            switch (item.type) {
              case "answer":
                return (
                  <TheAnswer
                    key={item.qid}
                    itemData={item}
                    theStudent={true}
                    isTeacherEdit={false}
                    studentEdit={studentEdit}
                  />
                );
              case "radio":
                return (
                  <TheRadio
                    key={item.qid}
                    itemData={item}
                    theStudent={true}
                    isTeacherEdit={false}
                    studentEdit={studentEdit}
                  ></TheRadio>
                );
              case "fill":
                return (
                  <TheFill
                    key={item.qid}
                    itemData={item}
                    theStudent={true}
                    isTeacherEdit={false}
                    studentEdit={studentEdit}
                  ></TheFill>
                );
              case "choice":
                return (
                  <TheChoice
                    key={item.qid}
                    itemData={item}
                    theStudent={true}
                    isTeacherEdit={false}
                    studentEdit={studentEdit}
                  ></TheChoice>
                );
              default:
                return <span key={item.qid}></span>;
            }
          })}
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Button variant="contained" onClick={() => onSubMit()}>
            提交
          </Button>
        </div>
      </div>
    </StudentFillStyle>
  );
});

export default StudentFill;
