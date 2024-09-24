const RefundAndReturnPolicy = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto bg-gradient-to-tr from-blue-100 to-amber-100 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#000428] mb-6 text-center">
          Refund & Return Policy
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Your satisfaction is important to us. Please review our refund and
          return policies below.
        </p>

        {/* Section 1: Refunds */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            1. Refunds
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SwiftCar offers refunds under certain conditions. If your booking
            has been canceled within the applicable cancellation period or if
            you are unsatisfied with our service, you may be eligible for a
            refund. All refund requests are subject to review.
          </p>
        </section>

        {/* Section 2: Eligibility for Refund */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            2. Eligibility for Refund
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To be eligible for a refund, you must meet the following criteria:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Submit a refund request within 14 days of the rental start date.
            </li>
            <li>
              Provide valid documentation supporting the cancellation or issue
              with the service.
            </li>
            <li>The vehicle must not have been picked up or used.</li>
          </ul>
        </section>

        {/* Section 3: Return Process */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            3. Return Process
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you wish to cancel a booking and return the vehicle (if already
            picked up), please contact our support team as soon as possible. The
            following steps will be taken:
          </p>
          <ul className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>
              Contact our support at{" "}
              <a
                href="mailto:support@swiftcar.com"
                className="text-[#004e92] hover:underline"
              >
                support@swiftcar.com
              </a>{" "}
              or call our 24/7 helpline.
            </li>
            <li>
              Provide your booking reference number and details of the issue.
            </li>
            <li>
              We will process your request and communicate the next steps,
              including vehicle return instructions (if applicable).
            </li>
          </ul>
        </section>

        {/* Section 4: Refund Processing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            4. Refund Processing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Refunds will be processed within 7-14 business days after your
            request is approved. The refund will be credited to your original
            payment method. Please note that processing times may vary depending
            on your financial institution.
          </p>
        </section>

        {/* Section 5: Non-Refundable Items */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            5. Non-Refundable Items
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The following services and fees are non-refundable:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Booking fees for reservations made within 24 hours of the rental
              date.
            </li>
            <li>Insurance and additional protection services.</li>
            <li>Administrative fees for processing late cancellations.</li>
          </ul>
        </section>

        {/* Section 6: Changes to Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            6. Changes to Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SwiftCar reserves the right to modify this Refund & Return Policy at
            any time. Changes will be effective upon posting to our website, and
            we encourage you to review the policy regularly.
          </p>
        </section>

        {/* Section 7: Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            7. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions regarding this policy, please contact us
            at{" "}
            <a
              href="mailto:support@swiftcar.com"
              className="text-[#004e92] hover:underline"
            >
              support@swiftcar.com
            </a>{" "}
            or call our support team at 1-800-123-456.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundAndReturnPolicy;
