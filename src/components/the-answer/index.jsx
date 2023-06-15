import React, { memo, useCallback, useEffect, useState } from "react";
import { TheAnswerStyle } from "./style";
import TextField from "@mui/material/TextField";

const TheAnswer = memo((props) => {
  const {
    itemData,
    theStudent,
    studentEdit,
    isQueryStudentDetail = false,
    isTeacherEdit = true,
    emitDeteteTopic,
  } = props;

  // 属性值发生改变
  const [values, setValues] = useState(undefined);
  useEffect(() => {
    if (isQueryStudentDetail) {
      setValues(itemData.value);
    }
  }, [isQueryStudentDetail, itemData]);
  const changeValues = useCallback(
    (e) => {
      setValues(e.target.value);
      if (theStudent) {
        studentEdit(itemData.qid, e.target.value);
      }
    },
    [theStudent, studentEdit, itemData]
  );
  // 删除题目
  const deleteTopic = useCallback(() => {
    emitDeteteTopic();
  }, [emitDeteteTopic]);
  return (
    <TheAnswerStyle>
      <h4 className="title">
        <span className="qid">{itemData.qid}、</span>
        <span className="text">{itemData.title}</span>
        <span className="score">
          {theStudent ? (
            ""
          ) : itemData.score ? (
            <span>
              <span>(</span>
              {itemData.score}
              <span>)分</span>
            </span>
          ) : (
            ""
          )}
        </span>
        {isTeacherEdit ? (
          <span
            style={{ marginLeft: "10px", fontSize: "12px" }}
            className="delete-topic"
            onClick={() => deleteTopic()}
          >
            删除题目
          </span>
        ) : (
          ""
        )}
      </h4>
      <div className="shuru">
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          sx={{ marginTop: "5px" }}
          disabled={!theStudent}
          size="small"
          value={values}
          onChange={(e) => changeValues(e)}
        />
      </div>
    </TheAnswerStyle>
  );
});

export default TheAnswer;
