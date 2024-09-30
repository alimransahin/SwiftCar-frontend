const FAQ = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto bg-gradient-to-tr from-blue-100 to-amber-100 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#000428] mb-6 text-center">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Here are some of the most commonly asked questions about our services.
          If you have any other questions, feel free to contact us!
        </p>

        {/* FAQ Items */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div>
            <h2 className="text-xl font-semibold text-[#004e92] mb-2">
              1. What is the booking process?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To book a car, simply visit our website, choose your desired
              vehicle, select your rental dates, and follow the prompts to
              complete your booking.
            </p>
          </div>

          {/* Question 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[#004e92] mb-2">
              2. Can I cancel my booking?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Yes, you can cancel your booking within 14 days of your rental
              date for a full refund, provided the vehicle has not been picked
              up.
            </p>
          </div>

          {/* Question 3 */}
          <div>
            <h2 className="text-xl font-semibold text-[#004e92] mb-2">
              3. Are there any additional fees?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Additional fees may apply for insurance, late returns, or
              additional drivers. Please review the terms during the booking
              process.
            </p>
          </div>

          {/* Question 4 */}
          <div>
            <h2 className="text-xl font-semibold text-[#004e92] mb-2">
              4. What do I need to bring when picking up the car?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Please bring your driver's license, credit card, and the
              confirmation of your booking. Additional documentation may be
              required depending on the rental.
            </p>
          </div>

          {/* Question 5 */}
          <div>
            <h2 className="text-xl font-semibold text-[#004e92] mb-2">
              5. Do you offer roadside assistance?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Yes, we provide 24/7 roadside assistance for all our rentals. If
              you experience any issues, please contact our support team
              immediately.
            </p>
          </div>

          {/* Question 6 */}
          <div>
            <h2 className="text-xl font-semibold text-[#004e92] mb-2">
              6. How can I contact customer support?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can reach our customer support team via email at{" "}
              <a
                href="mailto:support@swiftcar.com"
                className="text-[#004e92] hover:underline"
              >
                support@swiftcar.com
              </a>{" "}
              or call us at 1-800-123-456.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
