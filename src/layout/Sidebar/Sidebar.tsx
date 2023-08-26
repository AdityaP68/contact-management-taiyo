import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Type definition for each link item
type LinkItem = {
  path: string;
  name: string;
};

function Sidebar() {
  // State to track the active link
  const [activeLink, setActiveLocation] = useState("");

  // Get the current location using React Router's 'useLocation' hook
  const location = useLocation();

  // Array of link items
  const links: LinkItem[] = [
    { path: "/", name: "Contacts" },
    { path: "/analytics", name: "Analytics" },
  ];

  // Update the active link based on the current location
  useEffect(() => {
    setActiveLocation(location.pathname);
  }, [location]);

  console.log(activeLink);

  return (
    // Sidebar container
    <aside className="hidden md:block md:w-44 lg:w-52 xl:w-60 bg-white pt-6">
      {/* List of links */}
      <ul className="py-2 pl-2 pr-4 ml-2 flex flex-col gap-3">
        {/* Map over link items */}
        {links.map((link: LinkItem, key: number) => (
          // List item for each link
          <li
            key={key}
            className={`py-2 px-5 font-medium text-sm ${
              // Apply styling if link is active
              activeLink === link.path ? `bg-slate-100 rounded` : ``
            }`}
          >
            {/* Link to the specified path */}
            <Link to={link.path} key={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
