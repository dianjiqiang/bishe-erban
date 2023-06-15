import React, { memo, useCallback, useState } from "react";
import { TheChoiceStyle } from "./style";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const TheChoice = memo((props) => {
  const {
    itemData,
    theStudent,
    studentEdit,
    isTeacherEdit = true,
    emitDeteteTopic,
  } = props;

  // 属性值发生改变
  const [checkedOption, setCheckedOption] = useState([]);
  const changeItem = useCallback(
    (e) => {
      let newCheckedOption = [...checkedOption];
      if (e.target.checked) {
        newCheckedOption.push(e.target.value);
        setCheckedOption(newCheckedOption);
        studentEdit(itemData.qid, newCheckedOption);
      } else {
        const index = newCheckedOption.indexOf(e.target.value);
        newCheckedOption.splice(index, 1);
        setCheckedOption(newCheckedOption);
        studentEdit(itemData.qid, newCheckedOption);
      }
    },
    [checkedOption, studentEdit, itemData]
  );
  // 删除题目
  const deleteTopic = useCallback(() => {
    emitDeteteTopic();
  }, [emitDeteteTopic]);
  return (
    <TheChoiceStyle>
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
      <FormGroup row>
        {itemData.options?.map((item) => (
          <FormControlLabel
            key={item.label}
            value={item.value}
            disabled={!theStudent}
            checked={item.checked}
            onChange={(e) => changeItem(e)}
            control={<Checkbox sx={{ fontSize: "14px" }} size="small" />}
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
      </FormGroup>
    </TheChoiceStyle>
  );
});

export default TheChoice;
