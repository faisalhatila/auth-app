import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Tokens from "../Pages/Tokens/Tokens";
import AddToken from "../Pages/AddToken/AddToken";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Settings from "../Pages/Settings/Settings";

const Router = () => {
  //   const base = document.getElementsByTagName("base")[0].getAttribute("href");
  //   const routes = (
  //     <BrowserRouter basename={base}>
  //       <Routes>
  //         <Route path="/" element={<Tokens />} />
  //         <Route path="/add-token" element={<AddToken />} />
  //         <Route path="*" element={<Navigate to="/" replace />} />
  //         <Route path="/404" element={<PageNotFound />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tokens />} />
        <Route path="/add-token" element={<AddToken />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
