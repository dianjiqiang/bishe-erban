import React, { memo, useCallback, useEffect } from "react";
import { FillDetailStyled } from "./styled";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchStudentFillDetail } from "@/store/module/teachers";

import TheRadio from "@/components/the-radio";
import TheChoice from "@/components/the-choice";
import TheAnswer from "@/components/the-answer";
import TheFill from "@/components/the-fill";

import Button from "@mui/material/Button";

const StudentFill = memo(() => {
  const { studentFillDetail } = useSelector(
    (state) => ({
      studentFillDetail: state.teachers.studentFillDetail,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // 获取学生填写的问卷列表
  useEffect(() => {
    // 获取id
    const queId = searchParams.get("queId");
    const studentId = searchParams.get("studentId");
    dispatch(fetchStudentFillDetail({ queId, studentId }));
  }, [dispatch, searchParams]);

  //返回
  const handleClickCallBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <FillDetailStyled>
      <div className="content-fill">
        <div className="title">
          <h3 style={{ textAlign: "center", paddingTop: "30px" }}>
            {searchParams.get("name")}
          </h3>
          <div className="score">
            {studentFillDetail.score !== undefined ? (
              <h5>
                问卷得分:
                <span className="score-value">
                  {studentFillDetail.robotScore}
                </span>
              </h5>
            ) : (
              ""
            )}
            {studentFillDetail.robotScore !== undefined ? (
              <h5>
                智能评分:
                <span className="score-value">
                  {studentFillDetail.robotScore}
                </span>
              </h5>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="topic">
          {studentFillDetail?.options?.map?.((item) => {
            switch (item.type) {
              case "answer":
                return (
                  <TheAnswer
                    key={item.qid}
                    itemData={item}
                    isQueryStudentDetail={true}
                    isTeacherEdit={false}
                  />
                );
              case "radio":
                return (
                  <TheRadio
                    key={item.qid}
                    itemData={item}
                    isQueryStudentDetail={true}
                    isTeacherEdit={false}
                  ></TheRadio>
                );
              case "fill":
                return (
                  <TheFill
                    key={item.qid}
                    itemData={item}
                    isQueryStudentDetail={true}
                    isTeacherEdit={false}
                  ></TheFill>
                );
              case "choice":
                return (
                  <TheChoice
                    key={item.qid}
                    itemData={item}
                    isQueryStudentDetail={true}
                    isTeacherEdit={false}
                  ></TheChoice>
                );
              default:
                return <span key={item.qid}></span>;
            }
          })}
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Button variant="contained" onClick={() => handleClickCallBack()}>
            返回
          </Button>
        </div>
      </div>
    </FillDetailStyled>
  );
});

export default StudentFill;
