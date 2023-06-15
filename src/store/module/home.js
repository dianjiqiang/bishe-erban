import { createSlice } from "@reduxjs/toolkit";

import { getItem, setItem } from "@/utils/localstorage";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    role: "administrator",
    MenuItem: getItem("MenuItem") ?? [],
    userMessage: {},
  },
  reducers: {
    changeUserMessage(state, { payload }) {
      state.MenuItem = payload.MenuItem;
      if (payload.MenuItem) setItem("MenuItem", payload.MenuItem);
      state.userMessage.charge = payload?.charge;
      if (payload.charge) setItem("charge", payload.charge);
      state.userMessage.class_id = payload?.class_id;
      if (payload.class_id) setItem("class_id", payload.class_id);
      state.userMessage.employee = payload?.employee;
      if (payload.employee) setItem("employee", payload.employee);
      state.userMessage.studentId = payload?.studentId;
      if (payload.studentId) setItem("studentId", payload.studentId);
      state.userMessage.id = payload?.id;
      if (payload.id) setItem("id", payload.id);
      state.userMessage.name = payload?.name;
      if (payload.name) setItem("name", payload.name);
      state.userMessage.phone = payload?.phone;
      if (payload.phone) setItem("phone", payload.phone);
      state.userMessage.role = payload?.role;
      if (payload.role) setItem("role", payload.role);
      state.userMessage.token = payload?.token;
      if (payload.token) setItem("token", payload.token);
    },
  },
});

export default homeSlice.reducer;

export const { changeUserMessage } = homeSlice.actions;
