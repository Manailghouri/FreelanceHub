import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle Dark Mode"
      className="px-4 py-2 rounded-full transition-all duration-300 ease-in-out
                 bg-gradient-to-r from-blue-600 to-teal-500 text-white
                 dark:from-teal-400 dark:to-blue-500
                 hover:opacity-90 shadow-lg
                 flex items-center gap-2 select-none
                 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {dark ? (
        <>
          <span className="text-xl">🌙</span> Dark Mode
        </>
      ) : (
        <>
          <span className="text-xl">☀️</span> Light Mode
        </>
      )}
    </button>
  );
}
