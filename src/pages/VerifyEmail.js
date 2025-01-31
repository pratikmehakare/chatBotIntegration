import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function VerifyEmail() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    setTimeout(() => navigate("/setup-organization"), 500);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Verify Email</h2>
        <p className="text-center text-gray-600 mt-2">Enter the code sent to your email</p>
        <form onSubmit={handleVerify} className="mt-4 flex flex-col space-y-3">
          <input type="text" placeholder="Verification Code" className="p-2 border rounded w-full text-center" value={code} onChange={(e) => setCode(e.target.value)} required />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition">Verify</button>
        </form>
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:underline">Resend Code</button>
        </div>
      </motion.div>
    </div>
  );
}

export default VerifyEmail;