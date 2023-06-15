import dayjs from "dayjs";

export const dataKey = [
  {
    title: "序号",
    dataIndex: "key",
    key: "key",
    width: "7%",
  },
  {
    title: "学号",
    dataIndex: "studentId",
    key: "studentId",
    width: "12%",
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    width: "10%",
  },
  {
    title: "完成问卷数量",
    dataIndex: "finish_que",
    key: "finish_que",
    width: "15%",
  },
  {
    title: "最近填写问卷时间",
    dataIndex: "updateAt",
    key: "updateAt",
    width: "28%",
    render(text) {
      return dayjs(text).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  {
    title: "问卷质量评定",
    dataIndex: "quality",
    key: "quality",
    render: (text) => {
      if (text === "差") {
        return <span style={{ color: "#f37335" }}>{text}</span>;
      } else if (text === "中") {
        return <span style={{ color: "#fdbf2f" }}>{text}</span>;
      } else {
        return <span>{text}</span>;
      }
    },
    width: "15%",
  },
];
