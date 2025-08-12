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
  Users,
  DollarSign,
  ShoppingBag,
  TrendingUp,
  Activity,
} from "lucide-react";

export default function Overview() {
  const chartData = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 450 },
    { name: "May", sales: 600 },
    { name: "Jun", sales: 700 },
  ];

  const kpis = [
    {
      label: "Total Clients",
      value: "1,245",
      icon: <Users className="w-7 h-7" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      label: "Earnings",
      value: "$12,300",
      icon: <DollarSign className="w-7 h-7" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Projects",
      value: "356",
      icon: <ShoppingBag className="w-7 h-7" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Conversion Rate",
      value: "4.8%",
      icon: <TrendingUp className="w-7 h-7" />,
      color: "from-orange-500 to-red-500",
    },
    {
      label: "Active Sessions",
      value: "892",
      icon: <Activity className="w-7 h-7" />,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Dashboard Overview
      </h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-3 
            hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
          >
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${kpi.color} text-white shadow-lg`}
            >
              {kpi.icon}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              {kpi.label}
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Monthly Sales Performance
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
              className="dark:stroke-gray-700"
            />
            <XAxis
              dataKey="name"
              stroke="#9CA3AF"
              tick={{ fill: "#6B7280" }}
              className="dark:stroke-gray-400"
            />
            <YAxis
              stroke="#9CA3AF"
              tick={{ fill: "#6B7280" }}
              className="dark:stroke-gray-400"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                borderRadius: "8px",
                border: "none",
                color: "#fff",
              }}
              labelStyle={{ color: "#E5E7EB" }}
              itemStyle={{ color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
