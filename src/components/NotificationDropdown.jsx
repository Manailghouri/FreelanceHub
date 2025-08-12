import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const notifications = [
    { id: 1, text: "Project 'Website Redesign' marked as completed", time: "2h ago" },
    { id: 2, text: "New task added to 'Mobile App'", time: "5h ago" },
    { id: 3, text: "Payment of $500 received", time: "1d ago" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 relative"
      >
        <Bell size={22} className="text-gray-700 dark:text-gray-300" />
        {/* Notification badge */}
        {notifications.length > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full shadow-md">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fadeIn z-50">
          {/* Header */}
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-200">
            Notifications
          </div>

          {/* Notification list */}
          <ul className="max-h-64 overflow-y-auto">
            {notifications.map((n) => (
              <li
                key={n.id}
                className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <p className="text-sm text-gray-800 dark:text-gray-200">{n.text}</p>
                <span className="text-xs text-gray-500">{n.time}</span>
              </li>
            ))}
          </ul>

          {/* Footer link */}
          <div className="px-4 py-2 text-center text-blue-600 dark:text-blue-400 text-sm hover:underline cursor-pointer">
            View all
          </div>
        </div>
      )}
    </div>
  );
}
