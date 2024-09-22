import LinkButton from "../utils/Button";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <section className="bg-gray-200 p-8 text-textDark">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">About SwiftCar</h1>
            <p className="text-lg mt-4">
              Your trusted partner for fast, reliable, and affordable car
              rentals.
            </p>
          </div>
        </section>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-6">
            <div className="lg:flex md:space-x-8">
              {/* Company History */}
              <section className="my-10 text-center lg:w-1/2">
                <h2 className="text-3xl font-semibold text-primary mb-4 border-b-2 border-primary inline-block ">
                  Company History
                </h2>
                <p className="text-lg text-textDark">
                  Founded in 2010, SwiftCar started with a simple mission: "To
                  make car rentals accessible, affordable, and convenient." Over
                  the years, we have expanded our services across multiple
                  locations and categories, from economy cars to luxury SUVs,
                  ensuring every customer's travel need is met.
                </p>
                <h3 className="text-3xl font-semibold text-primary mb-4 border-b-2 border-primary inline-block  mt-8">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 mt-2">
                  To offer high-quality, affordable car rentals that meet the
                  unique needs of our customers. We strive to deliver
                  exceptional service and create an experience that makes
                  traveling both enjoyable and worry-free.
                </p>
              </section>

              {/* Image */}
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src="https://i.ibb.co.com/Yjp4Kcr/about.jpg"
                  alt="https://www.linkedin.com/pulse/rental-car-scam-latest-attack-consumers-greg-collier/"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className=" text-center bg-white py-8">
          <h2 className="text-3xl font-semibold text-primary mb-4 border-b-2 border-primary inline-block ">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="team-member">
              <img
                src="https://i.ibb.co.com/Yjp4Kcr/about.jpg"
                alt="John Doe"
                className="rounded-full mx-auto w-32 h-32"
              />
              <h3 className="text-xl font-bold mt-4">John Doe</h3>
              <p className="text-textDark">CEO & Founder</p>
            </div>
            <div className="team-member">
              <img
                src="https://i.ibb.co.com/Yjp4Kcr/about.jpg"
                alt="Jane Smith"
                className="rounded-full mx-auto w-32 h-32"
              />
              <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
              <p className="text-textDark">Operations Manager</p>
            </div>
            <div className="team-member">
              <img
                src="https://i.ibb.co.com/Yjp4Kcr/about.jpg"
                alt="Mike Johnson"
                className="rounded-full mx-auto w-32 h-32"
              />
              <h3 className="text-xl font-bold mt-4">Mike Johnson</h3>
              <p className="text-textDark">Head of Customer Relations</p>
            </div>
          </div>
        </section>
        <div className="lg:grid lg:grid-cols-3 ">
          {/* Our Fleet */}
          <section className="my-10 text-center px-6">
            <h2 className="text-3xl font-semibold text-primary mb-4 border-b-2 border-primary inline-block ">
              Our Fleet
            </h2>
            <div className="text-start">
              <p className="text-lg text-textDark">
                At SwiftCar, we offer a variety of vehicles to cater to your
                unique travel needs:
              </p>

              <ul className="text-lg text-textDark mt-4 space-y-2">
                <li>• Economy Cars: Ideal for budget-friendly travel.</li>
                <li>
                  • Luxury Cars: Experience the pinnacle of comfort and style.
                </li>
                <li>
                  • SUVs: Perfect for family trips or off-road adventures.
                </li>
                <li>
                  • Electric Vehicles: For eco-conscious travelers looking for
                  sustainable options.
                </li>
              </ul>
            </div>
          </section>

          {/* Values & Commitment */}
          <section className="my-10 text-center px-6">
            <h2 className="text-3xl font-semibold text-primary mb-4 border-b-2 border-primary inline-block ">
              Values & Commitment
            </h2>
            <div className="text-start">
              <p className="text-lg text-textDark">
                At SwiftCar, we believe in three core values:
              </p>
              <ul className="text-lg text-textDark mt-4 space-y-2">
                <li>• Customer First: Your satisfaction is our priority.</li>
                <li>
                  • Sustainability: Committed to reducing our carbon footprint.
                </li>
                <li>
                  • Reliability: We ensure our vehicles are always in top
                  condition.
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="my-10 text-center lg:p-0 lg:px-6  p-6">
            <h2 className="text-3xl font-semibold text-primary mb-4 border-b-2 border-primary inline-block ">
              Contact Information
            </h2>
            <div className="text-start">
              <p className="text-lg text-textDark">
                If you have any questions or need assistance, feel free to reach
                out to us:
              </p>
              <p className="text-lg text-textDark mt-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-lg text-textDark">
                <strong>Email:</strong> support@swiftcar.com
              </p>
              <p className="text-lg text-textDark">
                <strong>Address:</strong> 123 SwiftCar Road, City, State, 45678
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-4 border-b-2 border-primary inline-block ">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <i className="fas fa-car text-primary text-6xl"></i>
              <h3 className="text-xl font-semibold mt-4 text-textDark">
                Reliability
              </h3>
              <p className="text-gray-600 mt-2">
                Our fleet is maintained to the highest standards, ensuring a
                smooth ride every time.
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-dollar-sign text-primary text-6xl"></i>
              <h3 className="text-xl font-semibold mt-4 text-textDark">
                Affordability
              </h3>
              <p className="text-gray-600 mt-2">
                We offer competitive pricing with no hidden fees, making car
                rentals easy and affordable.
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-heart text-primary text-6xl"></i>
              <h3 className="text-xl font-semibold mt-4 text-textDark">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600 mt-2">
                Our goal is to provide a personalized experience, ensuring that
                every customer leaves happy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 py-12  text-blue-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Ready to Rent?</h2>
          <p className="text-lg mt-4 text-gray-600">
            Experience the convenience and reliability of SwiftCar. Book your
            car today!
          </p>
          <div className="mt-6 px-6 py-3 inline-block ">
            <LinkButton text="Book Now" href="/cars" />
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
