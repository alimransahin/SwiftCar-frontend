import LinkButton from "../../utils/Button";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co.com/Yjp4Kcr/about.jpg")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-white text-5xl font-bold mb-4">
            Explore the World with SwiftCar
          </h1>
          <p className="text-white text-lg mb-8">
            Affordable, Reliable, and Convenient Car Rentals at Your Fingertips
          </p>
          <LinkButton text="Book Now" href="'/" />
        </div>
      </div>

      <div className="relative  bottom-10 -mb-8 mx-auto w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg z-20">
        <form className="flex flex-wrap items-center justify-between gap-4">
          {/* Location Input */}
          <div className="w-full md:w-1/4">
            <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter location"
            />
          </div>

          {/* Pick-up Date Input */}
          <div className="w-full md:w-1/4">
            <label
              htmlFor="pickup"
              className="block text-gray-700 font-bold mb-2"
            >
              Pick-up Date
            </label>
            <input
              type="date"
              id="pickup"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Drop-off Date Input */}
          <div className="w-full md:w-1/4">
            <label
              htmlFor="dropoff"
              className="block text-gray-700 font-bold mb-2"
            >
              Drop-off Date
            </label>
            <input
              type="date"
              id="dropoff"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Search Button */}
          <div className="w-full flex justify-center md:w-auto">
            <button
              type="submit"
              className="w-full  md:w-auto border border-gray-300 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-8"
            >
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
