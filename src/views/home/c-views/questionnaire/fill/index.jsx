import React, { memo, useCallback, useState, useRef, useEffect } from "react";
import { FillStyle } from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import HomeTop from "@/components/home-top";
import QuestionnaireList from "@/components/questionnaire-list";
import { fetchNeedStudentList } from "@/store/module/students";

const Fill = memo(() => {
  const { questions } = useSelector(
    (state) => ({
      questions: state.students.needStudentQue,
    }),
    shallowEqual
  );
  // 获取学生需要填写的问卷列表
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNeedStudentList());
  }, [dispatch]);

  useEffect(() => {
    setQuestionsData(questions);
  }, [questions]);

  // 获取子组件搜索框值
  const [questionsData, setQuestionsData] = useState(questions);
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
  return (
    <FillStyle>
      <HomeTop
        title="问卷填写"
        defaultValue="总览"
        placeholderSearch="请输入问卷名"
        searchUser={searchText}
      ></HomeTop>
      <QuestionnaireList
        questions={questionsData}
        isStudent={true}
      ></QuestionnaireList>
    </FillStyle>
  );
});

export default Fill;
