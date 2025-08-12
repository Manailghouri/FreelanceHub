import { useState } from "react";
import {
  Briefcase,
  Calendar,
  Edit2,
  Trash2,
  PlusCircle,
  User,
} from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign for Client A",
      client: "Client A",
      status: "In Progress",
      deadline: "2025-08-15",
    },
    {
      id: 2,
      name: "E-commerce App Development",
      client: "Startup B",
      status: "Pending",
      deadline: "2025-09-01",
    },
  ]);

  const [newProject, setNewProject] = useState({
    name: "",
    client: "",
    status: "Pending",
    deadline: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  const statusColors = {
    "In Progress":
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-700/20 dark:text-yellow-400",
    Pending:
      "bg-gray-100 text-gray-700 dark:bg-gray-700/20 dark:text-gray-300",
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-700/20 dark:text-green-400",
  };

  const addProject = () => {
    if (!newProject.name || !newProject.deadline || !newProject.client) return;
    setProjects([...projects, { ...newProject, id: Date.now() }]);
    setNewProject({ name: "", client: "", status: "Pending", deadline: "" });
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const saveEdit = (id, updated) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, ...updated } : p)));
    setEditingId(null);
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isDeadlineClose = (deadline) => {
    const today = new Date();
    const due = new Date(deadline);
    const diffDays = (due - today) / (1000 * 60 * 60 * 24);
    return diffDays <= 3 && diffDays >= 0;
  };

  const isOverdue = (deadline) => new Date(deadline) < new Date();

  return (
    <div className="animate-fadeIn space-y-10">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3 select-none">
        <Briefcase className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        Freelance Projects & Gigs
      </h2>

      {/* Search */}
      <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <input
          type="text"
          placeholder=" Search projects or clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 w-full border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
        />
      </div>

      {/* Add Project Form */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 space-y-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 select-none">
          <PlusCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Add New Project
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <input
            type="text"
            placeholder="Project Name"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
            className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="text"
            placeholder="Client Name"
            value={newProject.client}
            onChange={(e) =>
              setNewProject({ ...newProject, client: e.target.value })
            }
            className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
          />
          <select
            value={newProject.status}
            onChange={(e) =>
              setNewProject({ ...newProject, status: e.target.value })
            }
            className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <input
            type="date"
            value={newProject.deadline}
            onChange={(e) =>
              setNewProject({ ...newProject, deadline: e.target.value })
            }
            className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <button
          onClick={addProject}
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 select-none"
          aria-label="Add Project"
          type="button"
        >
          <PlusCircle className="w-5 h-5" /> Add Project
        </button>
      </div>

      {/* Projects List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
          >
            {/* Project Name (editable) */}
            {editingId === p.id ? (
              <input
                type="text"
                value={p.name}
                onChange={(e) => saveEdit(p.id, { name: e.target.value })}
                className="p-2 mb-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600 focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
              />
            ) : (
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 select-text">
                {p.name}
              </h3>
            )}

            {/* Client */}
            <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1 select-text">
              <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              {p.client}
            </p>

            {/* Status */}
            <span
              className={`inline-block mt-1 px-3 py-1 text-sm rounded-full font-semibold select-none ${statusColors[p.status]}`}
            >
              {p.status}
            </span>

            {/* Deadline */}
            <p
              className={`mt-3 text-sm flex items-center gap-1 select-text ${
                isOverdue(p.deadline)
                  ? "text-red-600 dark:text-red-400 font-bold"
                  : isDeadlineClose(p.deadline)
                  ? "text-yellow-600 dark:text-yellow-400 font-semibold"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <Calendar className="w-4 h-4" />
              {p.deadline}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 justify-end">
              {editingId === p.id ? (
                <button
                  onClick={() => setEditingId(null)}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm transition"
                  aria-label="Save project"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setEditingId(p.id)}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition"
                  aria-label="Edit project"
                >
                  <Edit2 className="w-4 h-4" /> Edit
                </button>
              )}

              <button
                onClick={() => deleteProject(p.id)}
                className="inline-flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm transition"
                aria-label="Delete project"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
