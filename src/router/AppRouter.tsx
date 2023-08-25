import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ContactsPage = lazy(()=>import("../pages/Contacts"))
const AnalyticsPage = lazy(()=>import("../pages/Analytics"))

function AppRouter() {
  return (
    <Routes>
      <Route path={"/"} element={<ContactsPage/>} />
      <Route path={"/analytics"} element={<AnalyticsPage/>} />
    </Routes>
  );
}

export default AppRouter;
