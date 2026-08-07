import {
  LayoutDashboard,
  Megaphone,
  Users,
  BarChart3,
  Mail,
  Calendar,
  Settings,
} from "lucide-react";

import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const menu = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Campaigns", icon: Megaphone, path: "/campaigns" },
  { title: "Social Media", icon: Users, path: "/social-media" },
  { title: "Email Marketing", icon: Mail, path: "/email" },
  { title: "Analytics", icon: BarChart3, path: "/analytics" },
  { title: "Calendar", icon: Calendar, path: "/calendar" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#FCFAF5] border-r border-[#E7DBC6] flex flex-col justify-between shadow-sm shrink-0">

      {/* Logo */}
      <div>
        <div className="px-6 pt-8 pb-4 flex justify-center">
          <img
            src={logo}
            alt="IC27"
            className="w-40 object-contain"
          />
        </div>

        <div className="px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#8C7454] font-semibold">
            Marketing Command Center
          </p>
        </div>

        {/* Menu */}
        <nav className="mt-10 px-4">
          {menu.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `group flex w-full items-center gap-3 rounded-xl px-4 py-3 mb-2 transition-all duration-200 ${
                  isActive
                    ? "bg-[#17462F] text-white shadow-md font-semibold"
                    : "text-[#3A3A3A] hover:bg-[#EFE5D3] hover:text-[#17462F]"
                }`
              }
            >
              <item.icon size={19} />
              <span className="font-medium">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-[#E7DBC6] p-6">
        <p className="text-sm font-semibold text-[#17462F]">
          International Congress
        </p>

        <p className="text-xs text-[#8C7454] mt-1">
          Tunisia 2027
        </p>

        <div className="mt-5 rounded-xl bg-[#17462F] p-4 text-white">
          <p className="text-xs opacity-80">
            Campaign Goal
          </p>

          <h3 className="text-2xl font-bold mt-1">
            1,000
          </h3>

          <p className="text-xs mt-2 opacity-80">
            Delegate registrations
          </p>

          <div className="mt-3 h-2 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full w-[74%] rounded-full bg-[#D8B16A]" />
          </div>

          <p className="mt-2 text-xs">
            742 / 1000 completed
          </p>
        </div>
      </div>

    </aside>
  );
}