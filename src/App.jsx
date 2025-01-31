import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import SetupOrganization from "./pages/SetupOrganization";
import ChatbotIntegration from "./pages/ChatbotIntegration";
import IntegrationSuccess from "./pages/IntegrationSuccess";
import IntegrationFailure from "./pages/IntegrationFailure";
import EmailDeveloper from "./pages/EmailDeveloper";
import IntegrationSteps from "./pages/IntegrationSteps";
import ClientDummyPage from "./pages/ClientDummyPage";
import AdminPanel from "./pages/AdminPanel";
import FeedbackPage from "./pages/FeedbackPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/setup-organization" element={<SetupOrganization />} />
      <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
      <Route path="/integration-success" element={<IntegrationSuccess />} />
      <Route path="/integration-failure" element={<IntegrationFailure />} />
      <Route path="/integration-steps" element={<IntegrationSteps/>} />
      <Route path="/email-developer" element={<EmailDeveloper/>} />
      <Route path="/client-site" element={<ClientDummyPage/>} />
      <Route path="/admin-panel" element={<AdminPanel/>} />
      <Route path="/feedback" element={<FeedbackPage/>} />
    </Routes>
  );
}

export default App;
