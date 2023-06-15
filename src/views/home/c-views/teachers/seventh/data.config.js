import { formatClass } from "@/utils/format";

export const dataKey = [
  {
    title: "序号",
    dataIndex: "key",
    key: "key",
    width: "7%",
  },
  {
    title: "职工编号",
    dataIndex: "employee",
    key: "employee",
    width: "12%",
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    width: "10%",
  },
  {
    title: "所属班级",
    dataIndex: "class_id",
    key: "class_id",
    width: "15%",
    render: (text) => {
      return formatClass(text);
    },
  },
  {
    title: "是否班主任",
    dataIndex: "charge",
    key: "charge",
    width: "15%",
    render: (text) => {
      return text ? (
        <span style={{ color: "#00cad7" }}>是</span>
      ) : (
        <span>否</span>
      );
    },
  },
  {
    title: "相关问卷",
    dataIndex: "publish",
    key: "publish",
    width: "15%",
  },
  {
    title: "联系电话",
    dataIndex: "phone",
    key: "phone",
    width: "15%",
  },
];
