import { lazy } from "react";

const Light = lazy(() => import("./index"));

const router = [
  {
    path: "/Light",
    name: "Light",
    component: Light,
  },
];

export default router;
