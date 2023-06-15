import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeTop from "@/components/home-top";
import HomeTable from "@/components/home-table";

import { fetchTeachersThreeList } from "@/store/module/teachers";
import { dataKey } from "./data.config";

const Seventh = memo(() => {
  const dispatch = useDispatch();
  const { seven } = useSelector(
    (state) => ({
      seven: state.teachers.ninth,
    }),
    shallowEqual
  );
  // 获取教师列表数据
  useEffect(() => {
    dispatch(fetchTeachersThreeList(12));
  }, [dispatch]);

  // 捕获最新数据
  const [tableData, setTableData] = useState();
  useEffect(() => {
    setTableData(seven);
    tableDataRef.current = seven;
  }, [seven]);

  // 点击了搜索
  const userRef = useRef();
  const tableDataRef = useRef(); //保存原数据
  const searchUser = useCallback(
    (user) => {
      if (user) {
        if (user !== userRef.current) {
          userRef.current = user;
          const newData = [];
          tableData.forEach((item) => {
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

  // 新增教师事件
  const emitAddTeacher = useCallback(() => {
    // 不管是不是 刷新列表
    dispatch(fetchTeachersThreeList(12));
    React.showMessage("新增教师成功");
  }, [dispatch]);

  return (
    <div>
      <HomeTop
        title="三年级组教师"
        searchUser={searchUser}
        isTeacherList={true}
        emitAddTeacher={emitAddTeacher}
      ></HomeTop>
      <HomeTable
        dataKey={dataKey}
        tableData={tableData}
        isTeacherDetail={true}
      ></HomeTable>
    </div>
  );
});

export default Seventh;
