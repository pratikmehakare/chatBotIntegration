import { Link } from "react-router-dom";

const IntegrationSteps = () => (
  <div className="bg-gray-50 min-h-screen flex items-center justify-center">
    <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Easy Integration Instructions
      </h1>

      {/* Instructions Box */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          1. Copy the following code:
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          &lt;script src="https://chatbot-script-url.js"&gt;&lt;/script&gt;
        </pre>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          2. Paste it within the &lt;head&gt; tag of your website.
        </h2>
      </div>

      {/* Navigation Button */}
      <div className="text-center">
      
        <Link
          to="/admin-panel"
          className="py-3 px-6 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 mt-6"
        >
          Explore Admin Panel
        </Link>
      </div>
    </div>
  </div>
);

export default IntegrationSteps;
