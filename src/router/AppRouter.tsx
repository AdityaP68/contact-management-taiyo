import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Import lazy-loaded page components
const ContactsPage = lazy(() => import("../pages/Contacts"));
const AnalyticsPage = lazy(() => import("../pages/Analytics"));
const CreateContactsPage = lazy(() => import("../pages/CreateContact"));
const EditContactsPage = lazy(() => import("../pages/EditContact"));
const ViewContactsPage = lazy(() => import("../pages/ViewContact"));

// Define the routing structure using React Router's Routes and Route components
function AppRouter() {
  return (
    <Routes>
      {/* Root route */}
      <Route path={"/"}>
        <Route index element={<ContactsPage />} /> {/* Displayed at the root */}
        <Route path="/create-contact" element={<CreateContactsPage />} />
        <Route path="/view-contact/:id" element={<ViewContactsPage />} />
        <Route path="/edit-contact/:id" element={<EditContactsPage />} />
      </Route>
      {/* Analytics route */}
      <Route path={"/analytics"} element={<AnalyticsPage />} />
    </Routes>
  );
}

export default AppRouter;
