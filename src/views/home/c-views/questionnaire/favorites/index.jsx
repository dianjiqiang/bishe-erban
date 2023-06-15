import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { FavoritesStyle } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchQueryStarList } from "@/store/module/questionnaire";

import HomeTop from "@/components/home-top";
import QuestionnaireList from "@/components/questionnaire-list";

import { getQuestionnaireStar, deleteQuestionnaire } from "@/servers";

const Favorites = memo(() => {
  const { questionsStarList } = useSelector(
    (state) => ({
      questionsStarList: state.questionnaire.questionsStarList,
    }),
    shallowEqual
  );
  // 拉取收藏夹
  const dispatch = useDispatch();
  useEffect(() => {
    // 获取教师id
    const id = JSON.parse(localStorage.getItem("id"));
    dispatch(fetchQueryStarList(id));
  }, [dispatch]);

  // 保存信息
  const [questionsData, setQuestionsData] = useState([]);
  useEffect(() => {
    setQuestionsData(questionsStarList);
  }, [questionsStarList]);

  // 搜索信息
  const frontRef = useRef("");
  const searchText = useCallback(
    (payload) => {
      if (payload) {
        if (payload !== frontRef) {
          const newData = [];
          questionsStarList.forEach((item) => {
            if (item.name.includes(payload)) {
              newData.push(item);
            }
          });
          setQuestionsData(newData);
        }
      } else {
        setQuestionsData(questionsStarList);
      }
      frontRef.current = payload;
    },
    [questionsStarList]
  );

  // 取消收藏
  const emitChangeStarClick = useCallback(
    (item, flag) => {
      if (flag) {
        getQuestionnaireStar(item.id).then((res) => {
          React.showMessage(res.message);
          // 重新请求收藏问卷列表
          const id = JSON.parse(localStorage.getItem("id"));
          dispatch(fetchQueryStarList(id));
        });
      }
    },
    [dispatch]
  );
  // 删除问卷
  const emitDeleteQue = useCallback(
    (item) => {
      // 执行删除操作
      deleteQuestionnaire(item.id).then((res) => {
        React.showMessage(res.message);
        const id = JSON.parse(localStorage.getItem("id"));
        dispatch(fetchQueryStarList(id));
      });
    },
    [dispatch]
  );
  return (
    <FavoritesStyle>
      <HomeTop
        title="问卷总览"
        defaultValue="总览"
        placeholderSearch="请输入问卷名"
        searchUser={searchText}
      ></HomeTop>
      <QuestionnaireList
        questions={questionsData}
        isStarList={true}
        emitDeleteQue={emitDeleteQue}
        emitChangeStarClick={emitChangeStarClick}
      ></QuestionnaireList>
    </FavoritesStyle>
  );
});

export default Favorites;
