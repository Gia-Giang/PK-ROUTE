import { lazy } from "react";

const Chair = lazy(() => import("./index"));

const router = [
  {
    path: "/Chair",
    name: "Chair",
    component: Chair,
  },
];

export default router;
