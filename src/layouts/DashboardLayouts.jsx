import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import NotificationDropdown from "../components/NotificationDropdown";
import { useState, useEffect } from "react";

export default function DashboardLayout() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(date.toLocaleDateString(undefined, options));
  }, []);

  return (
    <div
      className="flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 
                 text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header
          className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 
                     bg-white/80 dark:bg-gray-800/60 backdrop-blur-lg 
                     sticky top-0 z-50 shadow-md"
        >
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Heading + Subtitle */}
            <div className="animate-fadeIn">
              <h1
                className="text-3xl sm:text-4xl font-bold tracking-tight 
                           bg-gradient-to-r from-blue-700 to-teal-500 
                           text-transparent bg-clip-text drop-shadow-sm"
              >
                Freelancer Admin Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Manage your projects, earnings, and performance with ease
              </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 animate-fadeIn">
              {/* Date Badge */}
<span
  className="px-4 py-2 rounded-full text-sm font-semibold shadow-sm
             text-white bg-gradient-to-r from-blue-600 to-teal-500
             dark:from-teal-400 dark:to-blue-500
             transition-all duration-300 transform hover:scale-105"
>
  {currentDate}
</span>

              <NotificationDropdown />
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1 animate-fadeIn">
          <div
            className="card-gradient rounded-2xl shadow-lg p-6 
                        border border-transparent 
                        hover:border-blue-300 dark:hover:border-teal-500 
                        hover:shadow-blue-200/30 dark:hover:shadow-teal-900/30 
                        transition-all duration-500"
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
