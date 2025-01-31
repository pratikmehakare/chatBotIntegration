import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => navigate("/verify-email"), 500);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Register</h2>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-3">
          <input type="text" placeholder="Name" className="p-2 border rounded w-full" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" className="p-2 border rounded w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="p-2 border rounded w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">Sign Up</button>
        </form>
        <div className="mt-4 text-center">
          <button className="bg-red-600 text-white px-4 py-2 rounded w-full hover:bg-red-700 transition">Continue with Google</button>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
