import { lazy } from "react";

const Decor = lazy(() => import("./index"));

const router = [
  {
    path: "/Decor",
    name: "Decor",
    component: Decor,
  },
];

export default router;
