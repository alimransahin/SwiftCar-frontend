const Newsletter = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-[#004e92] to-[#000428] text-white ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated!</h2>
        <p className="text-lg mb-6 px-4">
          Subscribe to our newsletter for the latest updates on new products,
          deals, and exclusive offers.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col md:flex-row justify-center items-center px-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 w-full md:w-1/3 text-black rounded-md mb-4 md:mb-0 md:mr-4 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md text-white border border-white rounded-lg hover:bg-opacity-30 transition-all hover:bg-gradient-to-br hover:from-[#000428] hover:to-[#004e92] hover:border-transparent"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
