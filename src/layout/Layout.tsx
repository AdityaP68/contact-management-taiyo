import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen h-max-screen w-screen bg-gray-200">
      <Navbar />
      <div className="flex h-full pt-16">
        <Sidebar />
        <main className="flex flex-col align-center w-full h-full overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
