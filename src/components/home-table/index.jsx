import React, { memo, useCallback } from "react";
import { HomeTableStyle } from "./style";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const HomeTable = memo((props) => {
  const { tableData = [], dataKey = [], isTeacherDetail = false } = props;
  const newTableDataKey = [...dataKey];
  const navigate = useNavigate();
  const goToDetail = useCallback(
    (_, record) => {
      // 判断是不是教师页面点击了查看详情
      if (isTeacherDetail) {
        // 是教师 就进入教师页面详情
        navigate(
          `/home/teachers/detail?id=${record.employee}&name=${record.name}`
        );
      } else {
        navigate(
          `/home/students/detail?id=${record.id}&studentId=${record.studentId}&name=${record.name}`
        );
      }
    },
    [navigate, isTeacherDetail]
  );
  newTableDataKey.push({
    title: "更多操作",
    dataIndex: "studentId",
    key: "studentId",
    render: (text, record) => {
      return (
        <span className="tianxiexq" onClick={() => goToDetail(text, record)}>
          <span className="cz">
            <img
              className="image"
              src={require("@/assets/image/search.png")}
              style={{ width: "20px", height: "20px" }}
              alt=""
            />
            <span className="text">填写详情</span>
          </span>
        </span>
      );
    },
    width: "15%",
  });

  return (
    <HomeTableStyle>
      <Table
        className="tabs"
        dataSource={tableData}
        columns={newTableDataKey}
        pagination={{
          pageSize: 10,
        }}
      ></Table>
    </HomeTableStyle>
  );
});

export default HomeTable;
