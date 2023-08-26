import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

// Define the props for the Layout component
type LayoutProps = {
  children: React.ReactNode;
};

// Layout: A functional component to create the layout structure of the app
function Layout({ children }: LayoutProps) {
  // State to control the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen h-max-screen w-screen bg-gray-200">
      {/* Render the menu overlay */}
      {isMenuOpen && (
        <div className="h-screen w-screen bg-black absolute opacity-90 z-[10000]">
          <ul className="mt-20 text-white w-full p-10 py-10 flex flex-col gap-10">
            {/* Menu items */}
            <li className="border-b-2 border-slate-600 py-3 px-2">
              <Link to={"/"} onClick={()=>setIsMenuOpen(prev=>!prev)}>Contacts</Link>
            </li>
            <li className="border-b-2 border-slate-600 py-3 px-2" onClick={()=>setIsMenuOpen(prev=>!prev)}>
              <Link to={"/analytics"}>Analytics</Link>
            </li>
          </ul>
        </div>
      )}
      {/* Render the Navbar */}
      <Navbar setIsMenuOpen={setIsMenuOpen} />
      <div className="flex h-full pt-16">
        {/* Render the Sidebar */}
        <Sidebar />
        <main className="flex flex-col align-center w-full h-full overflow-y-auto p-8">
          {/* Render the children components */}
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
