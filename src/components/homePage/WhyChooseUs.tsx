const WhyChooseUs = () => {
  const chooses = [
    {
      head: "Best Prices",
      details:
        "We offer the most competitive prices in the market, ensuring you get the best value for your money.",
    },
    {
      head: "Wide Selection",
      details:
        "Choose from a diverse range of vehicles that meet your needs and preferences, all in one place.",
    },
    {
      head: "24/7 Support",
      details:
        " Our dedicated support team is available around the clock to assist you with any questions or concerns.",
    },
  ];
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-center text-[#004e92] mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {chooses.map((choose) => (
            <div
              key={choose.head}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-[#004e92]">
                {choose.head}
              </h3>
              <p className="mt-2 text-gray-600">{choose.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
