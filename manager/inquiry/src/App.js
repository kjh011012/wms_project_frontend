import React from "react";
import { Routes, Route } from "react-router-dom";

import Base from "./components/Base";
import Notices from "./pages/Notices";
import Inquiries from "./pages/Inquiries";
import EmployeeManagement from "./pages/EmployeeManagement";

const App = () => {
  return (
    <Base>
      <Routes>
        <Route path="/admin/Notices" element={<Notices />} />
        <Route path="/admin/Inquiries" element={<Inquiries />} />
        <Route path="/admin/Employees" element={<EmployeeManagement />} />
      </Routes>
    </Base>
  );
};

export default App;
