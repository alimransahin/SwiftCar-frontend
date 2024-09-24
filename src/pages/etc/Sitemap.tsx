import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto bg-gradient-to-tr from-blue-100 to-amber-100 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#000428] mb-6 text-center">
          Sitemap
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Explore our website and easily navigate through all the available
          pages.
        </p>

        <div className="grid grid-cols-2 gap-8">
          {/* Section 1: Main Pages */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
              Main Pages
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <Link to="/" className="text-[#004e92] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#004e92] hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#004e92] hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/car" className="text-[#004e92] hover:underline">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-[#004e92] hover:underline">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Car Pages */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
              Car Pages
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <Link to="/cars/1" className="text-[#004e92] hover:underline">
                  Car Detail - Car 1
                </Link>
              </li>
              <li>
                <Link to="/cars/2" className="text-[#004e92] hover:underline">
                  Car Detail - Car 2
                </Link>
              </li>
              <li>
                <Link to="/cars/3" className="text-[#004e92] hover:underline">
                  Car Detail - Car 3
                </Link>
              </li>
              <li>
                <Link to="/cars/4" className="text-[#004e92] hover:underline">
                  Car Detail - Car 4
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Policies */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
              Policies
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-[#004e92] hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-[#004e92] hover:underline"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-[#004e92] hover:underline"
                >
                  Refund & Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Other Pages */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
              Other Pages
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <Link to="/blog" className="text-[#004e92] hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/success" className="text-[#004e92] hover:underline">
                  Success Page
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-[#004e92] hover:underline">
                  Payment Page
                </Link>
              </li>
              <li>
                <Link to="/404" className="text-[#004e92] hover:underline">
                  404 Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
