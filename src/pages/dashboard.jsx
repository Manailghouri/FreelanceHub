import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaUsers,
  FaDollarSign,
  FaFileContract,
  FaBriefcase,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Dashboard() {
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

  // Chart data (Monthly Earnings)
  const data = [
    { name: "Jan", sales: 1200 },
    { name: "Feb", sales: 1800 },
    { name: "Mar", sales: 2400 },
    { name: "Apr", sales: 2000 },
    { name: "May", sales: 3100 },
    { name: "Jun", sales: 4200 },
  ];

  // Stat Cards
  const statCards = [
    {
      icon: <FaUsers className="text-sky-600 text-4xl" />,
      label: "New Clients",
      value: "12",
    },
    {
      icon: <FaDollarSign className="text-emerald-600 text-4xl" />,
      label: "This Month's Earnings",
      value: "$4,200",
    },
    {
      icon: <FaFileContract className="text-cyan-600 text-4xl" />,
      label: "Active Contracts",
      value: "5",
    },
  ];

  // Info Cards
  const infoCards = [
    {
      title: "Pending Proposals",
      desc: "You have 3 proposals awaiting client responses.",
      icon: <FaEnvelopeOpenText className="text-amber-500 text-2xl" />,
    },
    {
      title: "Upcoming Deadlines",
      desc: "2 projects are due within the next 5 days.",
      icon: <FaBriefcase className="text-orange-500 text-2xl" />,
    },
    {
      title: "Top Client",
      desc: "Acme Corp - $2,500 earned this month.",
      icon: <FaUsers className="text-sky-600 text-2xl" />,
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 animate-fadeIn">
      
      {/* Header */}
      <div className="mb-10 animate-slideUp">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 text-transparent bg-clip-text drop-shadow-sm">
              Freelancer Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track your clients, contracts, and earnings in one place 
            </p>
          </div>
          <div className="bg-gradient-to-r from-sky-600 to-emerald-500 text-white px-5 py-2 rounded-full shadow-md font-medium select-none hover:shadow-lg hover:scale-105 transition-all">
            {currentDate}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {statCards.map((card, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl shadow-lg bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 flex items-center gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {card.icon}
            <div>
              <p className="text-gray-600 dark:text-gray-400">{card.label}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {infoCards.map((card, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl shadow-md bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              {card.icon}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {card.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="p-6 rounded-2xl shadow-lg bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 h-96 hover:shadow-2xl transition-all duration-300">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Monthly Earnings Trend
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "#444"
                  : "#ccc"
              }
            />
            <XAxis
              dataKey="name"
              stroke={
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "#ddd"
                  : "#555"
              }
            />
            <YAxis
              stroke={
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "#ddd"
                  : "#555"
              }
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                color: "#fff",
                borderRadius: "0.5rem",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#0ea5e9" // Sky-500
              strokeWidth={3}
              dot={{ r: 5, fill: "#0ea5e9" }}
              activeDot={{ r: 8 }}
              isAnimationActive
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
