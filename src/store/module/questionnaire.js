import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTeacherQueryQuestionnaireList,
  getQueryQueDetail,
  getQueryStarList,
  getQueryStudentNeedList,
  getQueryQueTopic,
} from "../../servers";

export const fetchQueryQuestionnaireList = createAsyncThunk(
  "/questionnaire/list",
  async (payload, { dispatch }) => {
    // 请求问卷列表
    const res = await getTeacherQueryQuestionnaireList(payload);
    // 请求收藏列表
    const res2 = await getQueryStarList();
    // 查询相同的数组
    res2.data?.forEach?.((item) => {
      res.data?.forEach?.((item2) => {
        if (item.id === item2.id) {
          item2.star = 1;
        }
      });
    });
    dispatch(changeQuestionsAction(res.data));
  }
);

// 请求问卷详情
export const fetchQueryQueDetail = createAsyncThunk(
  "/query/que/detail",
  async (payload, { dispatch }) => {
    // 请求问卷详情
    const res = await getQueryQueDetail(payload);
    dispatch(changeQuestionsDetailDataAction(res.data));
  }
);
// 请求问卷收藏列表
export const fetchQueryStarList = createAsyncThunk(
  "query/star/list",
  async (_, { dispatch }) => {
    const res = await getQueryStarList();
    dispatch(changeQuestionsStarList(res.data));
  }
);
// 请求学生需要填写的问卷列表
export const fetchStudentNeedList = createAsyncThunk(
  "query/need/que",
  async (_, { dispatch }) => {
    const res = await getQueryStudentNeedList();
    dispatch(changeQuestionsAction(res.data));
  }
);
// 拉取学生问卷题目
export const fetchQueryQueTopic = createAsyncThunk(
  "query/que/topic",
  async (payload, { dispatch }) => {
    const res = await getQueryQueTopic(payload);
    dispatch(changeStudentTopicList(res.data));
  }
);

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState: {
    questions: [],
    questionsDetailData: {},
    questionsStarList: [],
    studentTopicList: [],
  },
  reducers: {
    changeQuestionsAction(state, { payload }) {
      state.questions = payload;
    },
    changeQuestionsDetailDataAction(state, { payload }) {
      state.questionsDetailData = payload;
    },
    changeQuestionsStarList(state, { payload }) {
      state.questionsStarList = payload;
    },
    changeStudentTopicList(state, { payload }) {
      state.studentTopicList = payload;
    },
  },
});

export default questionnaireSlice.reducer;
export const {
  changeQuestionsAction,
  changeQuestionsDetailDataAction,
  changeQuestionsStarList,
  changeStudentTopicList,
} = questionnaireSlice.actions;
