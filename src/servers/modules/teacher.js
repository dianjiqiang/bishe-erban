import keyieRequest from "..";

// 获取教师列表
export function getTeachersList(class_id) {
  return keyieRequest.getRequest("/teacher/list/" + class_id);
}
// 获取学生填写的问卷详情
export function getStudentFillDetail(params) {
  return keyieRequest.getRequest("/teacher/que/student/topic", params);
}
// 获取教师字典
export function getTeacherNameList() {
  return keyieRequest.getRequest("/teacher/query/teahcer/name/list");
}
// 新增教师
export function postAddTeacher(body) {
  return keyieRequest.postRequest("/user/register/teacher", body);
}
