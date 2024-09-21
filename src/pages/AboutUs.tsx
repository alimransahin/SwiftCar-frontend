import LinkButton from "../utils/Button";

const AboutUs = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-200 p-8 text-textDark">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">About SwiftCar</h1>
          <p className="text-lg mt-4">
            Your trusted partner for fast, reliable, and affordable car rentals.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="md:flex md:space-x-8">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-textDark">Who We Are</h2>
              <p className="text-lg text-gray-700 mt-4">
                At SwiftCar, we believe in providing a seamless and hassle-free
                car rental experience. With a wide range of vehicles to choose
                from and flexible rental options, we are committed to making
                your journey smooth and enjoyable. Whether you're planning a
                road trip, need a car for business travel, or just want to get
                around the city, SwiftCar is your go-to rental service. Our
                dedicated team ensures that every vehicle is maintained to the
                highest standards, offering safety, comfort, and reliability.
              </p>
              <h3 className="text-2xl font-semibold text-textDark mt-8">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                To offer high-quality, affordable car rentals that meet the
                unique needs of our customers. We strive to deliver exceptional
                service and create an experience that makes traveling both
                enjoyable and worry-free.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://i.ibb.co.com/Yjp4Kcr/about.jpg"
                alt="https://www.linkedin.com/pulse/rental-car-scam-latest-attack-consumers-greg-collier/"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-textDark">
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
          <p className="text-lg mt-4">
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
