import keyieRequest from "..";

export function getQyestionnaireFuture() {
  return keyieRequest.getRequest("/future");
}

// 请求问卷列表
export function getTeacherQueryQuestionnaireList(id) {
  return keyieRequest.getRequest("/teacher/que/list/" + id);
}
// 请求问卷详情
export function getQueryQueDetail(id) {
  return keyieRequest.getRequest("/teacher/que/detail/" + id);
}
// 获取收藏夹列表
export function getQueryStarList(id) {
  return keyieRequest.getRequest("/teacher/que/starlist");
}
// 收藏与取消收藏
export function getQuestionnaireStar(id) {
  return keyieRequest.getRequest("/teacher/que/star/" + id);
}
// 执行删除问卷操作
export function deleteQuestionnaire(id) {
  return keyieRequest.deleteRequest("/teacher/que/delete/" + id);
}
// 查询学生需要填写的问卷列表
export function getQueryStudentNeedList() {
  return keyieRequest.getRequest("/student/que/list");
}
// 拉取问卷题目
export function getQueryQueTopic(params) {
  return keyieRequest.getRequest("/student/que/fill", params);
}
// 提交问卷
export function postQueSubmit(body, type) {
  if (type) {
    return keyieRequest.postRequest("/student/que/submit/score", body);
  } else {
    console.log(body);
    return keyieRequest.postRequest("/student/que/submit", body);
  }
}
// 新增问卷
export function postAddQue(body, type) {
  return keyieRequest.postRequest("/teacher/que/issue/" + type, body);
}
// 获取学生需要填写的问卷列表
export function getNeedStudentList() {
  return keyieRequest.getRequest("/student/que/list");
}
