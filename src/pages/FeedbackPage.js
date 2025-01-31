import { useState } from "react";
import { FaStar, FaUser, FaComment } from "react-icons/fa"; // Icons for the feedback form
import { useNavigate } from "react-router-dom";

const FeedbackPage = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setMessage("");
    setRating(0);
    setFeedback(""); 
    navigate("/chatbot-integration")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Share Your Feedback
        </h2>

        <form onSubmit={handleSubmit}>
          {/* User Name */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                id="name"
                className="w-full outline-none"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="rating">
              Rating
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((rate) => (
                <FaStar
                  key={rate}
                  className={`cursor-pointer ${
                    rating >= rate ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => handleRating(rate)}
                  size={30}
                />
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">
              Your Feedback
            </label>
            <div className="flex items-start border-2 border-gray-300 rounded-lg px-3 py-2">
              <FaComment className="text-gray-400 mr-2 mt-1" />
              <textarea
                id="message"
                className="w-full h-32 outline-none resize-none"
                placeholder="Write your feedback here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
