import NotificationDropdown from "./NotificationDropdown";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header
      className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 
                 border-b border-gray-200 dark:border-gray-700
                 shadow-md px-4 py-2 sm:py-3 flex flex-wrap sm:flex-nowrap justify-between items-center sticky top-0 z-50 gap-3"
    >
      {/* Dashboard Title */}
      <div
        className="text-lg sm:text-2xl font-bold tracking-tight 
                   bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-500
                   text-transparent bg-clip-text drop-shadow-sm 
                   text-center sm:text-left w-full sm:w-auto"
      >
        📊 My Smart Dashboard
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <NotificationDropdown />

        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 sm:p-2.5 rounded-full transition-all duration-300 
                     bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 
                     hover:scale-105 shadow-sm text-white text-base sm:text-lg"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
