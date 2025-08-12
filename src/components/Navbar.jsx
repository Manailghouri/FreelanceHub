import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="backdrop-blur-md bg-white/70 dark:bg-gray-900/60
                 border-b border-gray-200 dark:border-gray-700
                 shadow-md px-4 sm:px-6 py-2.5 flex justify-between items-center
                 sticky top-0 z-50 transition-all duration-500"
    >
      {/* Logo / Title */}
      <h1
        className="text-lg sm:text-2xl font-bold tracking-tight
                   bg-gradient-to-r from-blue-700 via-sky-600 to-teal-500
                   text-transparent bg-clip-text drop-shadow-sm
                   hover:drop-shadow-lg hover:scale-105 
                   transition-transform duration-300"
      >
        📊 My Smart Dashboard
      </h1>

      {/* Theme Toggle Button */}
      <ThemeToggle />
    </nav>
  );
}
