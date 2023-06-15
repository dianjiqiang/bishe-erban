import { lazy } from "react";

const FillDetail = lazy(() =>
  import("@/views/home/c-views/students/fill-detail")
);

const router = {
  path: "/home/student/fill/detail",
  element: <FillDetail />,
};

export default router;
