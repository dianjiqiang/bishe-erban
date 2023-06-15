import React, { memo, useState, useCallback } from "react";
import { AddStyle } from "./style";

import Card from "@/base-ui/card";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import Fraction from "./c-cpns/fraction";
import NoFraction from "./c-cpns/nofraction";
import { useEffect } from "react";

const Add = memo(() => {
  const [radioVal, setRadioVal] = useState("");
  const handleTypeChange = useCallback((e) => {
    setRadioVal(e.target.value);
  }, []);

  //判断用户点击的什么类型问卷
  const [questionnaireRef, setQuestionnaireRef] = useState("");
  useEffect(() => {
    if (radioVal === "fraction") {
      setQuestionnaireRef(<Fraction></Fraction>);
    } else if (radioVal === "nofraction") {
      setQuestionnaireRef(<NoFraction></NoFraction>);
    } else {
      setQuestionnaireRef(undefined);
    }
  }, [radioVal]);

  return (
    <AddStyle>
      <Card maxHeight={true}>
        <div className="add-content">
          <h3 className="title">新增问卷</h3>
          <div className="group-of-options">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={radioVal}
              onChange={(e) => handleTypeChange(e)}
            >
              <FormControlLabel
                value="fraction"
                control={<Radio />}
                label="传统手动打分问卷"
              />
              <FormControlLabel
                value="nofraction"
                control={<Radio />}
                label="人工智能打分问卷"
              />
            </RadioGroup>
          </div>
          {questionnaireRef}
        </div>
      </Card>
    </AddStyle>
  );
});

export default Add;
