const NoCarFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f8bf304d] to-primary text-blue-900 text-center">
      <h1 className="text-4xl font-bold mb-4">No Car Found</h1>
      <p className="text-lg mb-6">
        We couldn't find any car matching your search.
      </p>
    </div>
  );
};

export default NoCarFound;
