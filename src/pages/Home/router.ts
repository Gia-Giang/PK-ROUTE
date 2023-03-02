import { lazy } from "react";

const Home = lazy(() => import("./index"));

const router = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
];

export default router;
