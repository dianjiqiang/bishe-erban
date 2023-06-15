import React, { memo, useState } from "react";
import { EditFillStyle } from "./style";

import { Button, Input } from "antd";
import { useCallback } from "react";
import classNames from "classnames";

const EditFill = memo((props) => {
  const { handleSubmitClick, noFraction } = props;

  //修改了标题
  const [titleVal, setTitleVal] = useState("");
  const changeTitle = useCallback((e) => {
    setTitleVal(e.target.value);
  }, []);

  // 修改了分值
  const [scoreVal, setScoreVal] = useState(0);
  const changeScore = useCallback((e) => {
    setScoreVal(e.target.value);
  }, []);

  // 点击了添加选项

  //提交了表单
  const handleClick = useCallback(() => {
    let newObj = {};
    if (noFraction) {
      newObj = {
        title: titleVal,
        type: "fill",
      };
    } else {
      newObj = {
        title: titleVal,
        score: scoreVal,
        type: "fill",
      };
    }
    handleSubmitClick(newObj);
  }, [titleVal, scoreVal, handleSubmitClick, noFraction]);
  return (
    <EditFillStyle>
      <div className="title">
        <label>
          <span>题目 : </span>
          <Input
            className={classNames({ inputs: !noFraction, input: noFraction })}
            placeholder="请输入题目"
            value={titleVal}
            onChange={(e) => changeTitle(e)}
          />
        </label>
        {!noFraction ? (
          <label>
            <span style={{ paddingLeft: "20px" }}>分值 : </span>
            <Input
              className="inputs-scro"
              type="number"
              value={scoreVal}
              onChange={(e) => changeScore(e)}
            />
          </label>
        ) : (
          ""
        )}
      </div>
      <div className="qd">
        <Button onClick={() => handleClick()}>确定添加</Button>
      </div>
    </EditFillStyle>
  );
});

export default EditFill;
