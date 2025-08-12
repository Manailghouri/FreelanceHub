import { useState } from "react";
import {
  FaStar,
  FaTasks,
  FaDollarSign,
  FaMapMarkerAlt,
  FaPlus,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    password: "",
    bio: "I help startups and small businesses build scalable, modern websites and web apps that convert visitors into customers.",
    skills: ["React", "Node.js", "Tailwind CSS", "Next.js", "UI/UX Design"],
    rating: 4.9,
    projects: 120,
    hourlyRate: "$40/hr",
    location: "Remote",
    profileImg: profileImg,
  });

  const [editProfile, setEditProfile] = useState({
    name: profile.name,
    email: profile.email,
    password: "",
    bio: profile.bio,
    skills: [...profile.skills],
    newSkill: "",
  });

  const handleChange = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    const skill = editProfile.newSkill.trim();
    if (skill && !editProfile.skills.includes(skill)) {
      setEditProfile({
        ...editProfile,
        skills: [...editProfile.skills, skill],
        newSkill: "",
      });
    }
  };

  const removeSkill = (skillToRemove) => {
    setEditProfile({
      ...editProfile,
      skills: editProfile.skills.filter((s) => s !== skillToRemove),
    });
  };

  const handleSave = () => {
    if (!editProfile.name.trim() || !editProfile.email.trim()) {
      alert("Name and Email cannot be empty");
      return;
    }

    setProfile({
      ...profile,
      name: editProfile.name,
      email: editProfile.email,
      password: editProfile.password ? editProfile.password : profile.password,
      bio: editProfile.bio,
      skills: editProfile.skills,
    });

    setEditProfile((prev) => ({ ...prev, password: "" }));

    alert("Profile saved!");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 animate-fadeIn">
      
      {/* Left Profile Card */}
      <aside className="lg:w-1/3 p-8 bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center rounded-b-3xl lg:rounded-b-none lg:rounded-tr-3xl lg:rounded-br-3xl">
        <div className="relative w-44 h-44">
          <img
            src={profile.profileImg}
            alt={profile.name}
            className="w-44 h-44 rounded-full border-4 border-blue-500 shadow-xl object-cover"
          />
        </div>

        <h1 className="mt-6 text-3xl font-bold">{profile.name}</h1>
        <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
          <FaMapMarkerAlt className="text-blue-500" /> {profile.location}
        </p>
        <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2">
          {profile.hourlyRate}
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 w-full text-center">
          <StatCard
            icon={<FaStar className="mx-auto text-yellow-400 text-xl" />}
            value={profile.rating.toFixed(1)}
            label="Rating"
          />
          <StatCard
            icon={<FaTasks className="mx-auto text-green-500 text-xl" />}
            value={profile.projects}
            label="Projects"
          />
          <StatCard
            icon={<FaDollarSign className="mx-auto text-blue-500 text-xl" />}
            value={profile.hourlyRate}
            label="Rate"
          />
        </div>
      </aside>

      {/* Right Panel - Edit Form */}
      <main className="flex-1 p-8 lg:p-12 overflow-auto">
        <h2 className="text-3xl font-bold mb-8">Edit Profile Settings</h2>

        <div className="space-y-6 max-w-3xl">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField label="Name" name="name" type="text" value={editProfile.name} onChange={handleChange} />
            <InputField label="Email" name="email" type="email" value={editProfile.email} onChange={handleChange} />
          </div>

          {/* Password */}
          <InputField
            label="Password"
            name="password"
            type="password"
            value={editProfile.password}
            onChange={handleChange}
            placeholder="Enter new password"
            helper="Leave blank to keep current password"
          />

          {/* Bio */}
          <TextareaField
            label="Bio"
            name="bio"
            value={editProfile.bio}
            onChange={handleChange}
            placeholder="Write a brief bio"
          />

          {/* Skills */}
          <div>
            <label className="block mb-2 font-semibold">Skills</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {editProfile.skills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 dark:from-blue-900 dark:to-blue-800 dark:text-blue-300 shadow-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="hover:text-red-500 font-bold"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="newSkill"
                placeholder="Add a skill"
                value={editProfile.newSkill}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill();
                  }
                }}
                className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold flex items-center gap-2 shadow-md transition transform hover:scale-105"
              >
                <FaPlus /> Add
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSave}
              className="px-10 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold transition transform hover:scale-105 shadow-md"
            >
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Small Reusable Components */
function InputField({ label, name, type, value, onChange, placeholder, helper }) {
  return (
    <div>
      <label className="block mb-1 font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
      />
      {helper && <p className="text-xs text-gray-500 mt-1">{helper}</p>}
    </div>
  );
}

function TextareaField({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block mb-1 font-semibold" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 resize-none"
      />
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="p-4 rounded-lg bg-blue-100 dark:bg-blue-900 shadow-sm">
      {icon}
      <p className="text-lg font-bold mt-1">{value}</p>
      <span className="text-xs">{label}</span>
    </div>
  );
}
