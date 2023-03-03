import { lazy } from "react";

const Shop = lazy(() => import("./index"));

const router = [
  {
    path: "/Shop",
    name: "Shop",
    component: Shop,
  },
];

export default router;
