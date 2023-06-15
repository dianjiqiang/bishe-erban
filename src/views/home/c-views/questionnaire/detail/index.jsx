import React, { memo, useCallback, useEffect, useState } from "react";
import { QuestionnaireDetailStyled } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { LinearProgress } from "@mui/material";

import { fetchQueryQueDetail } from "@/store/module/questionnaire";

const index = memo((props) => {
  const { questionsDetailData } = useSelector(
    (state) => ({
      questionsDetailData: state.questionnaire.questionsDetailData,
    }),
    shallowEqual
  );
  const [searchParams] = useSearchParams();
  const [finishNumber, setFinishNumber] = useState("");
  const dispatch = useDispatch();
  // 获取问卷详情数据
  useEffect(() => {
    // 获取问卷id
    const id = searchParams.get("id");
    setFinishNumber(searchParams.get("finishNumber"));
    dispatch(fetchQueryQueDetail(id));
  }, [dispatch, searchParams]);

  // 根据题目类型渲染不同的内容
  const switchTopic = useCallback(
    (item) => {
      switch (item.type) {
        case "choice":
        case "radio":
          return item.option.map((item, index) => {
            const optionsKey = "option" + (index + 1) + "_number";
            return (
              <div key={index} className="topic-peripheral">
                <span className="xuanx">
                  选项{index + 1}、“{item.label}”(选择人数: {item[optionsKey]} /
                  选择占比: {item.proportion ?? 0}%)
                </span>
                <div className="topic-list">
                  <LinearProgress
                    variant="determinate"
                    value={item.proportion}
                    sx={{
                      height: "7px",
                      borderRadius: "3.5px",
                      width: "600px",
                    }}
                  />
                  {item.score !== undefined ? (
                    <span className="fens">
                      选项分值 (<span className="value">{item.score}</span>)
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          });
        default:
          return (
            <div className="topic-peripheral">
              <span className="xuanx">
                问答题、(填写人数: {finishNumber} / 填写占比: 100%)
              </span>
              <div className="topic-list">
                <LinearProgress
                  variant="determinate"
                  value={100}
                  sx={{
                    height: "7px",
                    borderRadius: "3.5px",
                    width: "600px",
                  }}
                />
                {item.score !== undefined ? (
                  <span className="fens">
                    题目分值 (<span className="value">{item.score}</span>)
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
      }
    },
    [finishNumber]
  );
  return (
    <QuestionnaireDetailStyled>
      <div className="bone-nail">
        <h2 className="title">{questionsDetailData.name}</h2>
        <div className="score">
          {questionsDetailData.overallAvg !== undefined ? (
            <h5>
              问卷平均得分:
              <span className="score-value">
                {questionsDetailData.overallAvg}
              </span>
            </h5>
          ) : (
            ""
          )}
          {questionsDetailData.robotAvg !== undefined ? (
            <h5>
              人工智能评分:
              <span className="score-value">
                {questionsDetailData.robotAvg}
              </span>
            </h5>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="que-content">
        {questionsDetailData?.detail?.map((item) => (
          <div key={item.qid} className="topic">
            <div className="topic-name">
              <span className="qid">{item.qid}、</span>
              <span className="name">{item.title}</span>
              {item.score !== undefined ? (
                <span className="topic-score">({item.score})</span>
              ) : (
                ""
              )}
            </div>
            <div className="topic-content">
              {/* 根据题目类型来渲染不同的内容 */}
              <div className="topic-value">{switchTopic(item)}</div>
            </div>
          </div>
        ))}
      </div>
    </QuestionnaireDetailStyled>
  );
});

index.propTypes = {};

export default index;
