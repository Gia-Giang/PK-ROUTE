import React, { Suspense } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import route from "./router";
import Layouts from "../layouts";

const RootRouter = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <BrowserRouter>
        <Layouts />
        <Routes>
          {route.map((item) => (
            <Route path={item.path} element={<item.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RootRouter;
