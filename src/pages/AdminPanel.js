import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaUsers, FaCog, FaChartLine, FaSignOutAlt, FaBars } from "react-icons/fa"; 

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // New state for sidebar toggle
  const navigate = useNavigate();

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleLogout = () => {
    navigate("/chatbot-integration");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-blue-600 text-white p-6 transition-all duration-300 ease-in-out md:w-80 lg:w-96`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`${
              isSidebarOpen ? "text-2xl" : "text-xl"
            } font-semibold`}
          >
            Admin Panel
          </h2>
          <button
            className="md:hidden p-2"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>
        </div>
        <nav className="space-y-4">
          <button
            className={`flex items-center space-x-3 p-3 rounded-lg w-full text-lg ${
              activeSection === "dashboard" ? "bg-blue-700" : ""
            }`}
            onClick={() => handleSectionChange("dashboard")}
          >
            <FaChartLine size={20} />
            {isSidebarOpen && <span>Dashboard</span>}
          </button>
          <button
            className={`flex items-center space-x-3 p-3 rounded-lg w-full text-lg ${
              activeSection === "users" ? "bg-blue-700" : ""
            }`}
            onClick={() => handleSectionChange("users")}
          >
            <FaUsers size={20} />
            {isSidebarOpen && <span>User Management</span>}
          </button>
          <button
            className={`flex items-center space-x-3 p-3 rounded-lg w-full text-lg ${
              activeSection === "settings" ? "bg-blue-700" : ""
            }`}
            onClick={() => handleSectionChange("settings")}
          >
            <FaCog size={20} />
            {isSidebarOpen && <span>Settings</span>}
          </button>
          <button
            className="flex items-center space-x-3 p-3 rounded-lg w-full text-lg text-red-500 mt-6"
            onClick={handleLogout}
          >
            <FaSignOutAlt size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-x-hidden">
        {activeSection === "dashboard" && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600">Total Users</h4>
                <p className="text-3xl text-gray-700">150</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-600">Active Chatbots</h4>
                <p className="text-3xl text-gray-700">75</p>
              </div>
              <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-yellow-600">Integration Status</h4>
                <p className="text-3xl text-gray-700">Successful</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "users" && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">User Management</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-lg">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Username</th>
                    <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Email</th>
                    <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">John Doe</td>
                    <td className="px-6 py-4 text-gray-700">john@example.com</td>
                    <td className="px-6 py-4 text-gray-700">Active</td>
                    <td className="px-6 py-4 text-gray-700">
                      <button className="text-red-500 hover:text-red-700">Deactivate</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Jane Smith</td>
                    <td className="px-6 py-4 text-gray-700">jane@example.com</td>
                    <td className="px-6 py-4 text-gray-700">Inactive</td>
                    <td className="px-6 py-4 text-gray-700">
                      <button className="text-green-500 hover:text-green-700">Activate</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSection === "settings" && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="siteTitle" className="block text-lg font-medium text-gray-700">
                  Site Title
                </label>
                <input
                  type="text"
                  id="siteTitle"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  defaultValue="Dummy Chatbot"
                />
              </div>
              <div>
                <label htmlFor="timezone" className="block text-lg font-medium text-gray-700">
                  Timezone
                </label>
                <select
                  id="timezone"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  defaultValue="UTC"
                >
                  <option value="UTC">UTC</option>
                  <option value="PST">PST</option>
                  <option value="EST">EST</option>
                </select>
              </div>
              <div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Save Changes</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
