import React, { memo, useCallback, useState, useRef, useEffect } from "react";
import { SummaryStyle } from "./style";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import HomeTop from "@/components/home-top";
import QuestionnaireList from "@/components/questionnaire-list";

import {
  fetchQueryQuestionnaireList,
  fetchStudentNeedList,
} from "@/store/module/questionnaire";

import { getQuestionnaireStar, deleteQuestionnaire } from "@/servers";

const Summary = memo(() => {
  const { questions } = useSelector(
    (state) => ({
      questions: state.questionnaire.questions,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const [isStudent, setIsStudent] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("employee")) {
      const id = JSON.parse(window.localStorage.getItem("employee"));
      dispatch(fetchQueryQuestionnaireList(id));
    } else {
      // 获取学生需要填写的问卷列表
      setIsStudent(true);
      dispatch(fetchStudentNeedList());
    }
  }, [dispatch]);

  // 获取请求结束后参数
  useEffect(() => {
    setQuestionsData(questions);
  }, [questions]);

  // 获取子组件搜索框值
  const [questionsData, setQuestionsData] = useState([]);
  const frontRef = useRef("");
  const searchText = useCallback(
    (payload) => {
      if (payload) {
        if (payload !== frontRef) {
          const newData = [];
          questions.forEach((item) => {
            if (item.name.includes(payload)) {
              newData.push(item);
            }
          });
          setQuestionsData(newData);
        }
      } else {
        setQuestionsData(questions);
      }
      frontRef.current = payload;
    },
    [questions]
  );

  // 取消收藏和收藏
  const emitChangeStarClick = useCallback(
    (item) => {
      getQuestionnaireStar(item.id).then((res) => {
        React.showMessage(res.message);
        const id = JSON.parse(window.localStorage.getItem("employee"));
        dispatch(fetchQueryQuestionnaireList(id));
      });
    },
    [dispatch]
  );
  // 删除问卷
  const emitDeleteQue = useCallback(
    (item) => {
      // 执行删除操作
      deleteQuestionnaire(item.id).then((res) => {
        React.showMessage(res.message);
        const id = JSON.parse(window.localStorage.getItem("employee"));
        dispatch(fetchQueryQuestionnaireList(id));
      });
    },
    [dispatch]
  );
  return (
    <SummaryStyle>
      <HomeTop
        title="问卷总览"
        defaultValue="总览"
        placeholderSearch="请输入问卷名"
        searchUser={searchText}
      ></HomeTop>
      <QuestionnaireList
        questions={questionsData}
        emitChangeStarClick={emitChangeStarClick}
        emitDeleteQue={emitDeleteQue}
        isStudent={isStudent}
      ></QuestionnaireList>
    </SummaryStyle>
  );
});

export default Summary;
