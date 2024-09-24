import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto bg-gradient-to-tr from-blue-100 to-amber-100 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#000428] mb-6 text-center">
          Terms of Use
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Welcome to SwiftCar. By using our website and services, you agree to
          the following terms.
        </p>

        {/* Section 1: Acceptance of Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using the SwiftCar website, you agree to comply with
            these terms of use and all applicable laws and regulations. If you
            disagree with any part of these terms, you are prohibited from using
            this site.
          </p>
        </section>

        {/* Section 2: Use License */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            2. Use License
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SwiftCar grants you a limited, non-exclusive, non-transferable
            license to use the website for personal and non-commercial purposes.
            You may not:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Modify or copy any content</li>
            <li>Use materials for any commercial purpose</li>
            <li>Attempt to reverse-engineer or misuse the website</li>
            <li>Transfer content to another person without permission</li>
          </ul>
        </section>

        {/* Section 3: User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            3. User Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Users agree to provide accurate and up-to-date information when
            using our services. You are responsible for maintaining the
            confidentiality of your account and password.
          </p>
        </section>

        {/* Section 4: Termination */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            4. Termination
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SwiftCar reserves the right to suspend or terminate your access to
            the website at any time, without notice, for violating these terms
            or any applicable laws.
          </p>
        </section>

        {/* Section 5: Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SwiftCar shall not be liable for any direct, indirect, incidental,
            or consequential damages that result from the use of, or inability
            to use, the website or services.
          </p>
        </section>

        {/* Section 6: Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            6. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SwiftCar reserves the right to modify these Terms of Use at any
            time. Changes will be effective immediately upon posting to the
            website. You are encouraged to review these terms regularly.
          </p>
        </section>

        {/* Section 7: Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            7. Governing Law
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These terms are governed by and construed in accordance with the
            laws of the jurisdiction in which SwiftCar operates. Any disputes
            related to these terms will be subject to the exclusive jurisdiction
            of the courts in that region.
          </p>
        </section>

        {/* Section 8: Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#004e92] mb-4">
            8. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these terms, please contact us at{" "}
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

export default TermsOfUse;
