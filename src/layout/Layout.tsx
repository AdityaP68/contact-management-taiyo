import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="h-screen h-max-screen w-screen bg-gray-200">
      {isMenuOpen && (
        <div className="h-screen w-screen bg-black absolute opacity-90 z-[10000]">
          <ul className="mt-20 text-white w-full p-10 py-10 flex flex-col gap-10">
            <li className="border-b-2 border-slate-600 py-3 px-2">
              <Link to={"/"}>Contacts</Link>
            </li>
            <li className="border-b-2 border-slate-600 py-3 px-2">
              <Link to={"/analytics"}>Analytics</Link>
            </li>
          </ul>
        </div>
      )}
      <Navbar setIsMenuOpen={setIsMenuOpen} />
      <div className="flex h-full pt-16">
        <Sidebar />
        <main className="flex flex-col align-center w-full h-full overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
