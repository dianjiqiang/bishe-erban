import React, { memo, useCallback, useEffect, useState } from "react";
import { TheFillStyle } from "./style";
import TextField from "@mui/material/TextField";

const TheFill = memo((props) => {
  const {
    itemData,
    theStudent,
    studentEdit,
    isQueryStudentDetail = false,
    isTeacherEdit = true,
    emitDeteteTopic,
  } = props;

  // 属性值发生改变
  const [values, setValues] = useState("");
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
    <TheFillStyle>
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
          label="请在此处书写答案"
          disabled={!theStudent}
          variant="standard"
          size="small"
          value={values}
          onChange={(e) => changeValues(e)}
        />
      </div>
    </TheFillStyle>
  );
});

export default TheFill;
