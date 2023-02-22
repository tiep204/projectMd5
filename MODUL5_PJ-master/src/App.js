import React from "react";
import { Route, Routes } from "react-router-dom";
import AppAdmin from "./component/admin/AppAdmin";
const App = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AppAdmin />} />
      <Route path="*" element={<AppAdmin />} />
    </Routes>
  );
};

export default App;
