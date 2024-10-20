const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-t-transparent"></div>
        <span className="ml-4 text-white text-lg">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
