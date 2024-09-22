const SomethingWrong = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f8bf304d] to-primary text-blue-900 text-center">
      <h1 className="text-5xl font-bold mb-4">Oops!</h1>
      <h2 className="text-2xl mb-4">Something Went Wrong</h2>
      <p className="text-lg mb-6">
        We're sorry, but an unexpected error has occurred.
      </p>
      <a
        href="/"
        className="bg-white text-[#000428] px-6 py-2 rounded font-semibold hover:bg-gray-200"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default SomethingWrong;
