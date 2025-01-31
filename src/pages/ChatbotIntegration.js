import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";


const ChatbotIntegration = () => {
  const navigate = useNavigate();
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleTestChatbot = () => {
    navigate("/client-site");
    // window.open("https://client-website.com");
  };

  const handleIntegrate = () => {
    // Logic to guide integration
    setIntegrationStatus("in-progress");
  };

  const handleTestIntegration = () => {
    // Logic to test integration
    setIntegrationStatus("success");
    setShowConfetti(true); // Trigger confetti on success
  };

  const handleFailure = () => {
    // Handle failure or undetected integration
    setIntegrationStatus("failure");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Chatbot Integration & Testing
        </h1>

        {/* Main Buttons */}
        <div className="space-y-6">
          <motion.button
            className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleTestChatbot}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Test Chatbot
          </motion.button>
          <motion.button
            className="w-full py-3 bg-green-600 text-white text-lg rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleIntegrate}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Integrate on Your Website
          </motion.button>
        </div>

        {/* Optional Integration Options */}
        {integrationStatus === "in-progress" && (
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Choose Your Integration Option:
            </h3>

            {/* Option Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-blue-600 text-3xl">📄</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Easy Instructions
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Follow simple copy-paste instructions to integrate the
                      chatbot within the <code>&lt;head&gt;</code> tag of your
                      website.
                    </p>
                  </div>
                </div>
                <Link
                  to="/integration-steps"
                  className="mt-4 block text-center py-2 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  View Instructions
                </Link>
              </motion.div>

              <motion.div
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 text-3xl">✉️</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Mail Instructions to Developer
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Send detailed integration instructions to your website
                      developer.
                    </p>
                  </div>
                </div>
                <Link
                  to="/email-developer"
                  className="mt-4 block text-center py-2 px-6 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                  Send Email
                </Link>
              </motion.div>
            </div>
          </div>
        )}

        {/* Test Integration Button */}
        {integrationStatus === "in-progress" && (
          <motion.button
            className="w-full py-3 bg-indigo-600 text-white text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 mt-6"
            onClick={handleTestIntegration}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Test Integration
          </motion.button>
        )}

        {/* Confetti UI after success */}
        {integrationStatus === "success" && showConfetti && (
          <div className="relative h-[500px] w-full mt-8">
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              gravity={0.3}
              recycle={false}
            />
            <div className="text-center mt-8">
              <motion.div
                className="p-8 bg-green-100 text-green-600 rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4">
                  🎉 Integration Successful! 🎉
                </div>
              </motion.div>

              <div className="mt-6 space-x-6 flex flex-col sm:flex-row justify-center">
                <Link
                  to="/admin-panel"
                  className="py-3 px-6 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 mb-4 sm:mb-0 sm:mr-4"
                >
                  Explore Admin Panel
                </Link>
                <Link
                  to="/client-site"
                  className="py-3 px-6 bg-indigo-600 text-white text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 mb-4 sm:mb-0 sm:ml-4"
                >
                  Start Talking to Your Chatbot
                </Link>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                <button className="w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                  fb
                </button>
                <button className="w-12 h-12 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition duration-300">
                  X
                </button>

                <button className="w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition duration-300">
                  In
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Failure UI */}
        {integrationStatus === "failure" && (
          <div className="mt-8 text-center">
            <motion.div
              className="p-8 bg-red-100 text-red-600 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🚫 Integration Failed! 🚫</div>
              <p className="text-lg">
                Please try again later or contact support.
              </p>
              <motion.button
                className="mt-6 py-3 px-6 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                onClick={handleFailure}
              >
                Try Again
              </motion.button>
            </motion.div>
          </div>
        )}

        {/* Feedback Section */}
        <div className="mt-8 text-center">
          <p className="text-lg">
            Chatbot not working as intended?{" "}
            <a href="/feedback" className="text-blue-600 font-semibold">
              Share feedback
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotIntegration;
