import React, { memo, useEffect, useState, useCallback, useRef } from "react";
import { SeventhStyle } from "./style";
import { getStudentListNinth } from "@/store/module/students";

import HomeTop from "@/components/home-top";
import HomeTable from "@/components/home-table";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { dataKey } from "./data.config";

const Seventh = memo(() => {
  const dispatch = useDispatch();
  const { seven } = useSelector(
    (state) => ({
      seven: state.students.ninth,
    }),
    shallowEqual
  );

  const [options, setOptions] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [plus, setPlus] = useState([]);
  const tableDataRef = useRef(); //保存原数据

  // 发起网络请求
  useEffect(() => {
    dispatch(getStudentListNinth());
  }, [dispatch]);
  // 第一次进入
  useEffect(() => {
    setOptions(
      seven.map((item) => {
        const res = {};
        res.name = item.name;
        res.value = item.name;
        return res;
      })
    );
    setTableData(seven[0]?.students);
    tableDataRef.current = seven[0]?.students;
    const plus = [
      <span className="plus">班主任: {seven[0]?.headTeacher}</span>,
      <span className="plus">已发放问卷数: {seven[0]?.distributed}</span>,
      <span className="plus">
        已完成问卷数:
        <span
          style={{
            color:
              seven[0]?.distributed !== seven[0]?.allNumber
                ? "#f37335"
                : "auto",
          }}
        >
          {seven[0]?.allNumber}
        </span>
      </span>,
    ];
    setPlus(plus);
  }, [seven]);

  // 选项发生改变
  const changeOption = useCallback(
    (payload) => {
      seven.forEach((item) => {
        if (item.name === payload) {
          setTableData(item.students);
          tableDataRef.current = seven[0]?.students;
          const plus = [
            <span className="plus">班主任: {item.headTeacher}</span>,
            <span className="plus">已发放问卷数: {item.distributed}</span>,
            <span className="plus">
              已完成问卷数:
              <span
                style={{
                  color:
                    item.distributed !== item.allNumber ? "#f37335" : "auto",
                }}
              >
                {seven[0]?.allNumber}
              </span>
            </span>,
          ];
          setPlus(plus);
        }
      });
    },
    [seven]
  );

  // 点击了搜索
  const userRef = useRef();
  const searchUser = useCallback(
    (user) => {
      if (user) {
        if (user !== userRef.current) {
          userRef.current = user;
          const newData = [];
          tableDataRef.current.forEach((item) => {
            if (item.name.indexOf(user) !== -1) {
              newData.push(item);
            }
          });
          setTableData(newData);
          return;
        }
        const newData = [];
        tableData.forEach((item) => {
          if (item.name.indexOf(user) !== -1) {
            newData.push(item);
          }
        });
        setTableData(newData);
      } else {
        setTableData(tableDataRef.current);
      }
    },
    [tableData]
  );
  return (
    <SeventhStyle>
      <HomeTop
        title="三年级组"
        options={options}
        optionsTootip={"请选择班级"}
        changeOption={changeOption}
        defaultValue="三(1)班"
        plus={plus}
        searchUser={searchUser}
      ></HomeTop>
      <HomeTable tableData={tableData} dataKey={dataKey}></HomeTable>
    </SeventhStyle>
  );
});

export default Seventh;
