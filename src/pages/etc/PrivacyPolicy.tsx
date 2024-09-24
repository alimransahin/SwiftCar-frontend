const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto bg-gradient-to-tr from-blue-100 to-amber-100 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#000428] mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          At <strong>SwiftCar</strong>, your privacy is our top priority. This
          policy outlines how we handle your information.
        </p>

        {/* Section: Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect the following types of personal information to provide
            and improve our services:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Name and contact information (email, phone number, address)</li>
            <li>Vehicle preferences and booking history</li>
            <li>Payment information</li>
            <li>IP address and device information</li>
          </ul>
        </section>

        {/* Section: How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Processing bookings and providing car rental services</li>
            <li>Sending updates and notifications related to your bookings</li>
            <li>Offering customer support and addressing inquiries</li>
            <li>Improving our website and services</li>
            <li>Sending marketing communications (only if you opt-in)</li>
          </ul>
        </section>

        {/* Section: Protecting Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            3. Protecting Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use secure technologies such as encryption and limited access
            protocols to ensure your personal data is protected.
          </p>
        </section>

        {/* Section: Sharing Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not share or sell your information, except when necessary for
            service provision (e.g., payment processors) or legal obligations.
          </p>
        </section>

        {/* Section: Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            5. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or delete your data at any
            time. To exercise these rights, contact us at{" "}
            <a
              href="mailto:info@swiftcar.com"
              className="text-[#004e92] hover:underline"
            >
              info@swiftcar.com
            </a>
            .
          </p>
        </section>

        {/* Section: Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            6. Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to personalize your browsing experience. Cookies help
            us understand your preferences and improve the functionality of our
            site.
          </p>
        </section>

        {/* Section: Policy Updates */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            7. Policy Updates
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy may be updated periodically. We encourage you to
            review this page regularly for the latest information.
          </p>
        </section>

        {/* Section: Contact Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            8. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions regarding this Privacy Policy, please
            contact us at{" "}
            <a
              href="mailto:info@swiftcar.com"
              className="text-[#004e92] hover:underline"
            >
              info@swiftcar.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
