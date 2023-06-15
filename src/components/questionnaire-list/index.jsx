import React, { memo, Fragment, useCallback } from "react";
import { QuestionnaireListStyle } from "./style";
import dayjs from "dayjs";
import { useNavigate, useSearchParams } from "react-router-dom";
import classNames from "classnames";

import Card from "@/base-ui/card";
import { Popconfirm } from "antd";

import { formatClass } from "@/utils/format";

const QuestionnaireList = memo((props) => {
  const {
    questions,
    isStudent = false,
    isStudentQueryDetail = false,
    isStarList = false,
    emitChangeStarClick,
    emitDeleteQue,
    isTeacherDetail = false,
  } = props;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // 填写问卷
  const goToFill = useCallback(
    (item) => {
      navigate(
        "/home/students/studentfill?id=" +
          item.id +
          "&type=" +
          item.que_type +
          "&name=" +
          item.name
      );
    },
    [navigate]
  );
  // 填写详情页面
  const goToQueDetail = useCallback(
    (item) => {
      navigate(
        `/home/questionnaire/detail?id=${item.id}&isStudentQueryDetail=${isStudentQueryDetail}&finishNumber=${item.respondents}`
      );
    },
    [isStudentQueryDetail, navigate]
  );

  // 学生填写详情界面
  const goToStudentFillDetail = useCallback(
    (item) => {
      navigate(
        "/home/student/fill/detail?queId=" +
          item.id +
          "&studentId=" +
          searchParams.get("studentId") +
          "&name=" +
          item.name
      );
    },
    [navigate, searchParams]
  );

  // 点击了收藏按钮
  const handleChangeStarClick = useCallback(
    (item) => {
      if (isStarList) {
        emitChangeStarClick(item, isStarList);
      } else {
        if (emitChangeStarClick) {
          emitChangeStarClick(item, isStarList);
        }
      }
    },
    [isStarList, emitChangeStarClick]
  );
  // 点击了删除按钮
  const handleClickDetailQue = useCallback(
    (item) => {
      if (emitDeleteQue) {
        emitDeleteQue(item);
      }
    },
    [emitDeleteQue]
  );

  return (
    <QuestionnaireListStyle>
      {questions.length ? (
        questions.map((item) => (
          <div className="ben-card" key={item.id}>
            <Card className="ben-card">
              <div className="el-card">
                <div className="top">
                  <div className="left">
                    <span className="name">{item.name}</span>
                    <span className="involve">
                      [{formatClass(item.class_id)}]
                    </span>
                  </div>
                  <div className="right">
                    <span
                      className={classNames("status", {
                        isfabu: item.status,
                      })}
                    >
                      {1 ? (
                        <span className="que-status">· 已发布</span>
                      ) : (
                        " · 未发布"
                      )}
                    </span>
                    <span className="author">
                      <span>相关教师:</span>
                      <span className="name">{item.author}</span>
                    </span>
                    <span className="reply">
                      <span className="text">答卷:</span>
                      <span className="number">{item.respondents}</span>
                    </span>
                    <span className="date">
                      {dayjs(item.createAt).format("MM月DD日HH:mm")}
                    </span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="left">
                    {!isStudent ? (
                      <Fragment>
                        {!isStudentQueryDetail ? (
                          <div
                            className="design"
                            onClick={() => goToQueDetail(item)}
                          >
                            <img
                              src={require("@/assets/image/design_icon.png")}
                              alt="填写详情"
                            />
                            <span className="text">填写详情</span>
                          </div>
                        ) : (
                          <div
                            className="design"
                            onClick={() => goToStudentFillDetail(item)}
                          >
                            <img
                              src={require("@/assets/image/design_icon.png")}
                              alt="填写详情"
                            />
                            <span className="text">填写详情</span>
                          </div>
                        )}
                      </Fragment>
                    ) : (
                      <div className="design" onClick={() => goToFill(item)}>
                        <img
                          src={require("@/assets/image/design_icon.png")}
                          alt="设计问卷"
                        />
                        <span className="text">填写问卷</span>
                      </div>
                    )}
                  </div>
                  {isTeacherDetail || isStudentQueryDetail || isStudent ? (
                    ""
                  ) : (
                    <div className="right">
                      <Popconfirm
                        title="请问您真的要删除该问卷吗? 此操作不可逆!"
                        onConfirm={() => handleClickDetailQue(item)}
                        okText="确认"
                        cancelText="取消"
                      >
                        <div className="delete">
                          <img
                            src={require("@/assets/image/delete_icon.png")}
                            alt="删除"
                          />
                          <span className="text">删除</span>
                        </div>
                      </Popconfirm>
                      <div
                        className="star"
                        onClick={() => {
                          handleChangeStarClick(item);
                        }}
                      >
                        {isStarList || item.star ? (
                          <img
                            src={require("@/assets/image/is_star.png")}
                            alt="收藏"
                          />
                        ) : (
                          <img
                            src={require("@/assets/image/star_icon.png")}
                            alt="收藏"
                          />
                        )}
                        <span className="text">
                          {isStarList || item.star ? "已" : ""}收藏
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))
      ) : (
        <div className="ben-card">
          <Card>
            <div className="is-null">没有问卷</div>
          </Card>
        </div>
      )}
    </QuestionnaireListStyle>
  );
});

export default QuestionnaireList;
