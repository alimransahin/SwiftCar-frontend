const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#004e92] mb-6"></div>
      <p className="text-xl font-semibold text-gray-600">
        Please wait, Data is loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;
