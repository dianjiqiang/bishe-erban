import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTeachersList } from "../../servers";
import {
  getTeacherQueryQuestionnaireList,
  getStudentFillDetail,
} from "../../servers";

export const fetchTeachersOneList = createAsyncThunk(
  "teachers/one/list",
  async (payload, { dispatch }) => {
    // 获取一年级教师列表
    const res = await getTeachersList(payload);
    res.data.forEach((item, index) => {
      item.key = index + 1;
    });
    dispatch(changeSevenAction(res.data));
  }
);
export const fetchTeachersTowList = createAsyncThunk(
  "teachers/tow/list",
  async (payload, { dispatch }) => {
    const res = await getTeachersList(payload);
    res.data.forEach((item, index) => {
      item.key = index + 1;
    });
    dispatch(changeEightAction(res.data));
  }
);
export const fetchTeachersThreeList = createAsyncThunk(
  "teachers/three/list",
  async (payload, { dispatch }) => {
    const res = await getTeachersList(payload);
    res.data.forEach((item, index) => {
      item.key = index + 1;
    });
    dispatch(changeNinthAction(res.data));
  }
);
// 获取教师发布详情页内容
export const fetchTeacherPublicList = createAsyncThunk(
  "teachers/public/list",
  async (payload, { dispatch }) => {
    const res = await getTeacherQueryQuestionnaireList(payload);
    dispatch(changeTeacherDetailListAction(res.data));
  }
);

// 教师拉取学生填写的问卷详情
export const fetchStudentFillDetail = createAsyncThunk(
  "/student/fill/detail",
  async (payload, { dispatch }) => {
    const res = await getStudentFillDetail(payload);
    dispatch(changeStudentFillDetailAction(res.data));
  }
);

const studentsSlice = createSlice({
  name: "techers",
  initialState: {
    seven: [],
    eight: [],
    ninth: [],
    detailList: [],
    studentFillDetail: {},
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
    changeTeacherDetailListAction(state, { payload }) {
      state.detailList = payload;
    },
    changeStudentFillDetailAction(state, { payload }) {
      state.studentFillDetail = payload;
    },
  },
});

export default studentsSlice.reducer;

export const {
  changeSevenAction,
  changeEightAction,
  changeNinthAction,
  changeTeacherDetailListAction,
  changeStudentFillDetailAction,
} = studentsSlice.actions;
