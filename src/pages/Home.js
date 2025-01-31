import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold">Welcome to BeyondChats</h1>
      <p className="text-lg mt-2">Set up your chatbot for your business effortlessly.</p>
      <Link to="/register" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Get Started</Link>
    </div>
  );
}

export default Home;