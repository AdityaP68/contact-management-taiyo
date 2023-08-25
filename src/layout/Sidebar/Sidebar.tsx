import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type LinkItem = {
  path: string;
  name: string;
};

function Sidebar() {
  const [activeLink, setActiveLocation] = useState("");
  const location = useLocation();

  const links: LinkItem[] = [
    { path: "/", name: "Contacts" },
    { path: "/analytics", name: "Analytics" },
  ];

  useEffect(() => {
    setActiveLocation(location.pathname);
  }, [location]);

  console.log(activeLink);

  return (
    <aside className="w-60 bg-white pt-6">
      <ul className="py-2 pl-2 pr-4 ml-2 flex flex-col gap-3 ">
        {links.map((link: LinkItem) => (
          <li
            className={` py-2 px-5 font-medium text-sm ${
              activeLink === link.path ? `bg-gray-100 rounded ` : ``
            }`}
          >
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
