import KeyieRequest from "./request";

const keyieRequest = new KeyieRequest("http://localhost:3303/", 3000);
export const keyieRequestModal = new KeyieRequest(
  "http://localhost:5555/",
  10000
);

export * from "./modules/home";
export * from "./modules/login";
export * from "./modules/student";
export * from "./modules/questionnaire";
export * from "./modules/teacher";
export * from "./modal";

export default keyieRequest;
