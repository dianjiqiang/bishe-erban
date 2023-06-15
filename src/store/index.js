import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./module/home";
import questionnaireReducer from "./module/questionnaire";
import studentsReducer from "./module/students";
import teachersReducer from "./module/teachers";

const store = configureStore({
  reducer: {
    home: homeReducer,
    students: studentsReducer,
    questionnaire: questionnaireReducer,
    teachers: teachersReducer,
  },
});

export default store;
