import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Home, Folder, User, Menu, LogOut } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Overview", path: "/", icon: <Home size={20} /> },
    { name: "Projects", path: "/projects", icon: <Folder size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
  ];

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/login");
  };

  return (
    <aside
      className={`backdrop-blur-md bg-white/70 dark:bg-gray-900/60 
                  border-r border-gray-200 dark:border-gray-800
                  shadow-lg transition-all duration-300 ease-in-out
                  ${collapsed ? "w-20" : "w-64"} sticky top-0 h-screen flex flex-col justify-between`}
    >
      {/* Sidebar Header */}
      <div>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto transition-all duration-300" // ⬅ Always big
            />
            {!collapsed && (
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Dashboard
              </span>
            )}
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={18} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-3 gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
                      : "hover:bg-gray-100/70 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                  }`}
              >
                <span
                  className={`transition-transform duration-200 ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                </span>
                {!collapsed && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full p-2 rounded-lg transition-all duration-200
                     hover:bg-red-600 hover:text-white text-red-600 dark:text-red-400 dark:hover:bg-red-700"
        >
          <LogOut size={20} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
