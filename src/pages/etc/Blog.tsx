const BlogPage = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto bg-gradient-to-tr from-blue-100 to-amber-100 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#000428] mb-6 text-center">
          Our Blog
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Stay updated with the latest car rental tips, industry trends, and
          SwiftCar news.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/images/blog1.jpg"
              alt="Blog 1"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold text-[#004e92] mt-4 mb-2">
              Tips for First-Time Renters
            </h2>
            <p className="text-gray-700">
              Renting a car for the first time? Here’s everything you need to
              know to make it a smooth experience.
            </p>
            <a
              href="/blog/tips-first-time-renters"
              className="text-[#004e92] hover:underline mt-4 inline-block"
            >
              Read More
            </a>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/images/blog2.jpg"
              alt="Blog 2"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold text-[#004e92] mt-4 mb-2">
              Best Road Trips in 2024
            </h2>
            <p className="text-gray-700">
              Discover the most scenic and exciting road trips for 2024. Perfect
              for adventurers and travelers alike!
            </p>
            <a
              href="/blog/best-road-trips-2024"
              className="text-[#004e92] hover:underline mt-4 inline-block"
            >
              Read More
            </a>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/images/blog3.jpg"
              alt="Blog 3"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold text-[#004e92] mt-4 mb-2">
              Why Choose SwiftCar?
            </h2>
            <p className="text-gray-700">
              Learn more about what makes SwiftCar the best option for your car
              rental needs.
            </p>
            <a
              href="/blog/why-choose-swiftcar"
              className="text-[#004e92] hover:underline mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
