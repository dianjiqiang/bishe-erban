import { keyieRequestModal } from "..";

export function getScoreNotFractionQue(params) {
  return keyieRequestModal.getRequest("/test/" + params);
}
// 训练接口
export function postScoreFractionQue(body) {
  return keyieRequestModal.postRequest("/train", body);
}
