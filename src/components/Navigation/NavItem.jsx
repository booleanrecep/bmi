import { NavLink } from "react-router-dom";
import { Icon } from "../Icon/Icon";

export const NavItem = ({ title, desc, to, icon }) => {
  return (
    <NavLink
      to={to}
      className="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden border-x-2 min-h-[100px]"
    >
      <div className="flex justify-between flex-row sm:flex-col">
        <Icon icon={icon} />
        <div className="w-4/6">
          <p className="text-gray-900 text-lg font-medium mb-2">{title}</p>
          <p className="text-gray-800 text-xs">{desc}</p>
        </div>
      </div>
    </NavLink>
  );
};
