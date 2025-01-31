import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai"; // Close icon for the chatbot

const ClientDummyPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  const toggleChat = () => setShowChat(!showChat);

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([
        ...messages,
        { text: userMessage, sender: "user" },
        { text: "I'm just a dummy bot. How can I help you?", sender: "bot" },
      ]);
      setUserMessage(""); // Clear input field
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Dummy content */}
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold text-blue-600">Client's Page</h1>
      </div>

      {/* Chatbot Button */}
      {!showChat && (
        <motion.div
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full cursor-pointer shadow-xl"
          onClick={toggleChat}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          💬 Chat with us
        </motion.div>
      )}

      {/* Chatbot Window */}
      {showChat && (
        <div className="fixed bottom-6 right-6 w-96 bg-white border-2 border-gray-300 rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">Chatbot</h3>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={toggleChat}
              size={20}
            />
          </div>
          <div className="p-4 max-h-60 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : ""}`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center p-3 border-t-2 border-gray-300">
            <input
              type="text"
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              placeholder="Type a message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <motion.button
              className="ml-2 p-2 bg-blue-600 text-white rounded-full"
              onClick={handleSendMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Send
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDummyPage;
