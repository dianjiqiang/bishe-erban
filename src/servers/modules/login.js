import keyieRequest from "..";

export function studentLogin(data) {
  return keyieRequest.postRequest("/user/login", data);
}
export function studentRegister(data) {
  return keyieRequest.postRequest("/user/register/student", data);
}
//修改密码
export function editPassword(data) {
  return keyieRequest.postRequest("/user/edit/password", data);
}
