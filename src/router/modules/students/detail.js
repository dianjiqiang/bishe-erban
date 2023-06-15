import { lazy } from "react";

const Detail = lazy(() => import("@/views/home/c-views/students/detail"));

const router = {
  path: "/home/students/detail",
  element: <Detail />,
};

export default router;
