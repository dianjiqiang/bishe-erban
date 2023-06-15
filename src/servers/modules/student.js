import keyieRequest from "..";

// 查看学生列表
export function getStudentList(class_id) {
  return keyieRequest.getRequest("/student/list/" + class_id);
}
// 查看班级班主任
export function getQueryCharge(class_id) {
  return keyieRequest.getRequest("/teacher/charge/class/" + class_id);
}
// 查看班级需要填写的问卷数量
export function getQueryCount(class_id) {
  return keyieRequest.getRequest("/teacher/que/count/" + class_id);
}
// 获取学生填写问卷详情列表
export function getQueryQuestionnaireList(id) {
  return keyieRequest.getRequest("/student/que/already/list/" + id);
}
