import { Navigate } from "react-router-dom";
export default function mapRouter(routes) {
  const routeFiles = require.context("../router/modules", true, /\.js/);
  const newChildRouter = [];
  routeFiles.keys().forEach((key) => {
    const module = require("../router/modules/" + key.split("./")[1]);
    newChildRouter.push(module.default);
  });
  routes.forEach((item) => {
    if (item.path === "/home") {
      item.children.push({
        path: "/home",
        element: <Navigate to={"/home/questionnaire/summary"}></Navigate>,
      });
      newChildRouter.forEach((child) => {
        item.children.push(child);
      });
    }
  });
}
