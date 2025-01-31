import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

function SetupOrganization() {
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState([]);
  const [isFetchingPages, setIsFetchingPages] = useState(false);
  const [metaFetched, setMetaFetched] = useState(false); // New state for meta description fetch status
  const navigate = useNavigate();

  const fetchMetaDescription = async () => {
    try {
      const response = await fetch(websiteURL);
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      const meta = doc.querySelector("meta[name='description']");
      setDescription(meta ? meta.getAttribute("content") : "No description found. Enter manually.");
      setMetaFetched(true); 
    } catch (error) {
      setDescription("Failed to fetch meta description. Enter manually.");
      setMetaFetched(true); 
    }
  };

  const fetchDetectedPages = async () => {
    setIsFetchingPages(true);

    setPages([
      { url: `${websiteURL}/about`, status: "pending", data: [] },
      { url: `${websiteURL}/contact`, status: "pending", data: [] },
      { url: `${websiteURL}/services`, status: "pending", data: [] },
    ]);

    setTimeout(() => {
      setPages((prevPages) =>
        prevPages.map((page) =>
          page.url === `${websiteURL}/about`
            ? { ...page, status: "scraped", data: ["About us section", "Company history"] }
            : page
        )
      );
    }, 2000); 

    setTimeout(() => {
      setPages((prevPages) =>
        prevPages.map((page) =>
          page.url === `${websiteURL}/contact`
            ? { ...page, status: "scraped", data: ["Contact information"] }
            : page
        )
      );
    }, 9000); 

    setTimeout(() => {
      setPages((prevPages) =>
        prevPages.map((page) =>
          page.url === `${websiteURL}/services`
            ? { ...page, status: "scraped", data: ["Service offerings", "Pricing details"] }
            : page
        )
      );
      setIsFetchingPages(false); 
    }, 8000);
  };

  const handleNext = () => {
    if (companyName && websiteURL && description) {
      navigate("/chatbot-integration");
    } else {
      toast.error("Please fill in all required fields before proceeding.");
    }
  };

  useEffect(() => {
    if (metaFetched) {
      fetchDetectedPages(); // Fetch pages only after meta description is fetched
    }
  }, [metaFetched]); // Depend on metaFetched status

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700">Setup Organization</h2>
        <form className="mt-4 flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Company Name"
            className="p-2 border rounded w-full"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Website URL"
            className="p-2 border rounded w-full"
            value={websiteURL}
            onChange={(e) => setWebsiteURL(e.target.value)}
            required
          />
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
            onClick={fetchMetaDescription}
          >
            Fetch Meta Description
          </button>
          <textarea
            placeholder="Company Description"
            className="p-2 border rounded w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </form>

        {/* Display Detected Webpages after meta description is fetched */}
        {metaFetched && !isFetchingPages && (
          <div>
            <h3 className="text-xl font-semibold mt-6">Detected Webpages</h3>
            <ul className="mt-2">
              {pages.map((page, index) => (
                <li key={index} className="flex justify-between items-center p-2 border rounded mb-2">
                  <a href={page.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {page.url}
                  </a>
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
          </div>
        )}

        {/* Loading state for fetching pages */}
        {isFetchingPages && (
          <div className="flex justify-center items-center p-4">
            <FaSpinner className="animate-spin text-blue-600" size={24} />
          </div>
        )}

        <button
          onClick={handleNext}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SetupOrganization;
