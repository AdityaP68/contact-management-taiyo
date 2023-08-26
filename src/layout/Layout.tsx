import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
// import CreateContactModal from "../components/Contacts/CreateContactModal";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
    {/* <CreateContactModal/> */}
    <div className="h-screen h-max-screen w-screen bg-gray-200">
      <Navbar />
      <div className="flex h-full pt-16">
        <Sidebar />
        <main className="flex flex-col align-center w-full h-full overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
    </>
  );
  
}

export default Layout;
