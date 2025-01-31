import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

function SetupOrganization() {
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState([
    { url: "https://example.com/about", status: "scraped", data: ["About us section", "Company history"] },
    { url: "https://example.com/contact", status: "pending", data: [] },
    { url: "https://example.com/services", status: "scraped", data: ["Service offerings", "Pricing details"] },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPages((prevPages) =>
        prevPages.map((page) =>
          page.status === "pending" ? { ...page, status: "scraped" } : page
        )
      );
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const fetchMetaDescription = async () => {
    try {
      const response = await fetch(websiteURL);
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      const meta = doc.querySelector("meta[name='description']");
      setDescription(meta ? meta.getAttribute("content") : "No description found. Enter manually.");
    } catch (error) {
      setDescription("Failed to fetch meta description. Enter manually.");
    }
  };

  const handleNext = () => {
    if (companyName && websiteURL && description) {
      navigate("/chatbot-integration");
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700">Setup Organization</h2>
        <form className="mt-4 flex flex-col space-y-3">
          <input type="text" placeholder="Company Name" className="p-2 border rounded w-full" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
          <input type="url" placeholder="Website URL" className="p-2 border rounded w-full" value={websiteURL} onChange={(e) => setWebsiteURL(e.target.value)} required />
          <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition" onClick={fetchMetaDescription}>Fetch Meta Description</button>
          <textarea placeholder="Company Description" className="p-2 border rounded w-full" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </form>
        <h3 className="text-xl font-semibold mt-6">Detected Webpages</h3>
        <ul className="mt-2">
          {pages.map((page, index) => (
            <li key={index} className="flex justify-between items-center p-2 border rounded mb-2">
              <a href={page.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{page.url}</a>
              {page.status === "scraped" ? (
                <span className="text-green-600 flex items-center">✅ <span className="ml-1">Scraped</span></span>
              ) : (
                <div className="flex items-center text-yellow-600">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <FaSpinner />
                  </motion.div>
                  <span className="ml-1">Pending</span>
                </div>
              )}
            </li>
          ))}
        </ul>
        <button onClick={handleNext} className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition">Next</button>
      </div>
    </div>
  );
}

export default SetupOrganization;