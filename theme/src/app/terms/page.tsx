"use client";

import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 lg:p-12 transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to{" "}
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bodhify.tech
            </span>
            . By accessing or using our services, you agree to the following
            terms and conditions.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We provide professional services including website development,
              maintenance, deployment, DevOps, analytics, e-commerce solutions,
              and consulting. The scope of work for each service will be defined
              in a mutual agreement before the project begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. Pricing
            </h2>
            <p className="text-gray-600 mb-3 leading-relaxed">
              All prices mentioned on our website are indicative.{" "}
              <span className="font-semibold text-gray-800">
                Final pricing may vary
              </span>{" "}
              depending on factors such as:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Market demand and technology trends</li>
              <li>Cloud service and hosting provider charges</li>
              <li>Level of customization required</li>
              <li>Project size and complexity</li>
              <li>Urgency or accelerated delivery timelines</li>
              <li>Third-party integrations or tools required</li>
            </ul>
            <p className="text-gray-600 mt-3 leading-relaxed">
              A detailed quotation will be provided after project requirements
              are finalized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. Payments
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Payments must be made as per the agreed milestones in the project
              contract. For subscription-based services (such as website
              maintenance), fees will be billed monthly or annually depending on
              the chosen plan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Revisions & Support
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Each project includes a limited number of revisions as specified
              in the service agreement. Ongoing support and maintenance will be
              provided as long as the relevant subscription plan remains active.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Upon full payment, the final deliverables will be transferred to
              the client. However, Bodhify.tech reserves the right to showcase
              the project as part of our portfolio unless otherwise agreed in
              writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              6. Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              While we ensure the highest standards in our services, we are not
              liable for downtime, security breaches, or performance issues
              caused by third-party services, hosting providers, or external
              factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              7. Amendments
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bodhify.tech reserves the right to update or amend these terms at
              any time. Clients will be notified of significant changes via
              email or on our website.
            </p>
          </section>
        </div>

        {/* Contact + Closing Note */}
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            If you have any questions about these Terms & Conditions, please
            contact us at{" "}
            <a
              href="mailto:contact@bodhify.tech"
              className="text-blue-600 font-medium hover:underline"
            >
              admin@bodhify.tech
            </a>
            .
          </p>
          <p className="mt-6 text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            We always strive to deliver our services at a reasonable cost while
            ensuring quality and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
