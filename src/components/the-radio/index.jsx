import React, { memo, useCallback } from "react";
import { TheRadioStyle } from "./style";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const TheRadio = memo((props) => {
  const {
    itemData,
    theStudent,
    studentEdit,
    // isQueryStudentDetail = false,
    isTeacherEdit = true,
    emitDeteteTopic,
  } = props;

  // 属性值发生改变
  const changeValues = useCallback(
    (e) => {
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
    <TheRadioStyle>
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
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {itemData.options?.map((item) => (
          <FormControlLabel
            key={item.label}
            value={item.value}
            checked={item.checked}
            disabled={!theStudent}
            control={<Radio sx={{ fontSize: "14px" }} size="small" />}
            onChange={(e) => changeValues(e)}
            label={
              item.label +
              (theStudent
                ? ""
                : item.score !== undefined
                ? `(${item.score}分)`
                : "")
            }
          />
        ))}
      </RadioGroup>
    </TheRadioStyle>
  );
});

export default TheRadio;
