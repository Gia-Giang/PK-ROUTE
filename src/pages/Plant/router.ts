import { lazy } from "react";

const Plant = lazy(() => import("./index"));

const router = [
  {
    path: "/Plant",
    name: "Plant",
    component: Plant,
  },
];

export default router;
