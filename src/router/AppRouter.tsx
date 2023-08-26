import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ContactsPage = lazy(() => import("../pages/Contacts"));
const AnalyticsPage = lazy(() => import("../pages/Analytics"));
const CreateContactsPage = lazy(() => import("../pages/CreateContact"));
const EditContactsPage = lazy(() => import("../pages/EditContact"));
const ViewContactsPage = lazy(() => import("../pages/ViewContact"));

function AppRouter() {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<ContactsPage />} />
        <Route path="/create-contact" element={<CreateContactsPage />} />
        <Route path="/view-contact/:id" element={<ViewContactsPage />} />
        <Route path="/edit-contact/:id" element={<EditContactsPage />} />
      </Route>
      <Route path={"/analytics"} element={<AnalyticsPage />} />
    </Routes>
  );
}

export default AppRouter;
