function IntegrationFailure() {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600">Integration Failed</h2>
        <p>We couldn't detect the chatbot on your website.</p>
      </div>
    );
  }
  
  export default IntegrationFailure;