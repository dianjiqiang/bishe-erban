import React, { memo, useCallback, useState, useRef, useEffect } from "react";
import { TeacherDetailStyled } from "./style";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import HomeTop from "@/components/home-top";
import QuestionnaireList from "@/components/questionnaire-list";

import { fetchTeacherPublicList } from "@/store/module/teachers";

const TeacherDetail = memo((props) => {
  // 教师页面详情
  const { detailList } = useSelector(
    (state) => ({
      detailList: state.teachers.detailList,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // 获取query参数
  const [searchParams] = useSearchParams();
  const [name, setName] = useState();
  useEffect(() => {
    setName(searchParams.get("name"));
    // 根据id 获取学生填写列表详情
    dispatch(fetchTeacherPublicList(searchParams.get("id")));
  }, [searchParams, dispatch]);

  // 当detailList发生改变赋值
  useEffect(() => {
    setDetailData(detailList);
  }, [detailList]);

  // 获取子组件搜索框值
  const [detailData, setDetailData] = useState(detailList);
  const frontRef = useRef("");
  const searchText = useCallback(
    (payload) => {
      if (payload) {
        if (payload !== frontRef) {
          const newData = [];
          detailList.forEach((item) => {
            if (item.name.includes(payload)) {
              newData.push(item);
            }
          });
          setDetailData(newData);
        }
      } else {
        setDetailData(detailList);
      }
      frontRef.current = payload;
    },
    [detailList]
  );
  return (
    <TeacherDetailStyled>
      <HomeTop
        title={'"' + name + '" 的填写详情'}
        defaultValue="总览"
        placeholderSearch="请输入问卷名"
        searchUser={searchText}
      ></HomeTop>
      <QuestionnaireList
        questions={detailData}
        isTeacherDetail={true}
      ></QuestionnaireList>
    </TeacherDetailStyled>
  );
});

export default TeacherDetail;
