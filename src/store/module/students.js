import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getStudentList,
  getQueryCharge,
  getQueryCount,
  getQueryQuestionnaireList,
  getNeedStudentList,
} from "@/servers";
import { formatStudentListData } from "@/utils/format";

// 获取一年级组数据
export const getStudentListSeven = createAsyncThunk(
  "get/studentlist",
  async (_, store) => {
    // 获取班级数据 班主任数据 班级已发放问卷 和已完成问卷
    const list = await getStudentList(5);
    const charge = await getQueryCharge(5);
    const count = await getQueryCount(5);
    const data = formatStudentListData(
      list.data,
      charge.data[0]?.name,
      count.data[0]?.count,
      5
    );
    const list2 = await getStudentList(6);
    const charge2 = await getQueryCharge(6);
    const count2 = await getQueryCount(6);
    const data2 = formatStudentListData(
      list2.data,
      charge2.data[0]?.name,
      count2.data[0]?.count,
      6
    );
    const list3 = await getStudentList(7);
    const charge3 = await getQueryCharge(7);
    const count3 = await getQueryCount(7);
    const data3 = formatStudentListData(
      list3.data,
      charge3.data[0]?.name,
      count3.data[0]?.count,
      7
    );
    store.dispatch(changeSevenAction([data, data2, data3]));
  }
);
// 获取二年级组数据
export const getStudentListEight = createAsyncThunk(
  "get/studentlist",
  async (_, store) => {
    // 获取班级数据 班主任数据 班级已发放问卷 和已完成问卷
    const list = await getStudentList(8);
    const charge = await getQueryCharge(8);
    const count = await getQueryCount(8);
    const data = formatStudentListData(
      list?.data,
      charge?.data?.[0]?.name,
      count?.data?.[0]?.count,
      8
    );

    const list2 = await getStudentList(9);
    const charge2 = await getQueryCharge(9);
    const count2 = await getQueryCount(9);
    const data2 = formatStudentListData(
      list2?.data,
      charge2?.data[0]?.name,
      count2?.data[0]?.count,
      9
    );
    const list3 = await getStudentList(10);
    const charge3 = await getQueryCharge(10);
    const count3 = await getQueryCount(10);
    const data3 = formatStudentListData(
      list3?.data,
      charge3?.data[0]?.name,
      count3?.data[0]?.count,
      10
    );
    store.dispatch(changeEightAction([data, data2, data3]));
  }
);
// 获取三级组数据
export const getStudentListNinth = createAsyncThunk(
  "get/studentlist",
  async (_, store) => {
    // 获取班级数据 班主任数据 班级已发放问卷 和已完成问卷
    const list = await getStudentList(11);
    const charge = await getQueryCharge(11);
    const count = await getQueryCount(11);
    const data = formatStudentListData(
      list?.data,
      charge?.data?.[0]?.name,
      count?.data?.[0]?.count,
      11
    );
    const list2 = await getStudentList(12);
    const charge2 = await getQueryCharge(12);
    const count2 = await getQueryCount(12);
    const data2 = formatStudentListData(
      list2?.data,
      charge2?.data[0]?.name,
      count2?.data[0]?.count,
      12
    );
    const list3 = await getStudentList(13);
    const charge3 = await getQueryCharge(13);
    const count3 = await getQueryCount(13);
    const data3 = formatStudentListData(
      list3?.data,
      charge3.data[0]?.name,
      count3.data[0]?.count,
      13
    );
    store.dispatch(changeNinthAction([data, data2, data3]));
  }
);
// 根据学生id获取对应的问卷
export const getStudentQueryDetail = createAsyncThunk(
  "/get/student/detail",
  async (payload, { dispatch }) => {
    const data = await getQueryQuestionnaireList(payload);
    // 分配数据
    dispatch(changeStudentEditDetailList(data.data));
  }
);
// 获取学生需要填写的问卷
export const fetchNeedStudentList = createAsyncThunk(
  "/get/sutdent/need/list",
  async (_, { dispatch }) => {
    const data = await getNeedStudentList();
    dispatch(changeNeedStudentQue(data.data));
  }
);

const studentsSlice = createSlice({
  name: "student",
  initialState: {
    seven: [
      {
        name: "",
        headTeacher: "",
        distributed: 0,
        allNumber: 0,
        students: [],
      },
      {
        name: "",
        headTeacher: "",
        distributed: 0,
        allNumber: 0,
        students: [],
      },
      {
        name: "",
        headTeacher: "",
        distributed: 0,
        allNumber: 0,
        students: [],
      },
    ],
    eight: [
      {
        name: "",
        headTeacher: "",
        distributed: 0,
        allNumber: 0,
        students: [],
      },
      {
        name: "",
        headTeacher: "",
        distributed: 0,
        allNumber: 0,
        students: [],
      },
      {
        name: "",
        headTeacher: "",
        distributed: 0,
        allNumber: 0,
        students: [],
      },
    ],
    ninth: [
      {
        name: "",
        headTeacher: "",
        distributed: 0,
        allNumber: 0,
        students: [],
      },
      {
        name: "",
        headTeacher: "",
        distributed: 0,
        allNumber: 0,
        students: [],
      },
      {
        name: "",
        headTeacher: "",
        distributed: 0,
        allNumber: 0,
        students: [],
      },
    ],
    detailList: [],
    needStudentQue: [],
  },
  reducers: {
    changeSevenAction(state, { payload }) {
      state.seven = payload;
    },
    changeEightAction(state, { payload }) {
      state.eight = payload;
    },
    changeNinthAction(state, { payload }) {
      state.ninth = payload;
    },
    changeStudentEditDetailList(state, { payload }) {
      state.detailList = payload;
    },
    changeNeedStudentQue(state, { payload }) {
      state.needStudentQue = payload;
    },
  },
});

export default studentsSlice.reducer;

export const {
  changeSevenAction,
  changeEightAction,
  changeNinthAction,
  changeStudentEditDetailList,
  changeNeedStudentQue,
} = studentsSlice.actions;
