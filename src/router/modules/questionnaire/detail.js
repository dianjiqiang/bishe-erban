import { lazy } from "react";

const Detail = lazy(() => import("@/views/home/c-views/questionnaire/detail"));

const router = {
  path: "/home/questionnaire/detail",
  element: <Detail />,
};

export default router;
