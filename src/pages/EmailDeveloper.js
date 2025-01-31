import { useNavigate } from "react-router-dom";

const EmailDeveloper = () => {
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault(); // Prevent form submission to avoid page reload
    navigate("/chatbot-integration");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Email Instructions to Your Developer
        </h1>
        <form className="space-y-6" onSubmit={submitHandle}>
          <div>
            <label
              htmlFor="developer-email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Developer's Email
            </label>
            <input
              type="email"
              id="developer-email"
              required
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Developer's Email"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Send Instructions
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailDeveloper;
