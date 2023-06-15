import { lazy } from "react";

const Detail = lazy(() => import("@/views/home/c-views/teachers/detail"));

const router = {
  path: "/home/teachers/detail",
  element: <Detail />,
};

export default router;
