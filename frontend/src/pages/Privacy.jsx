import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-16 px-6 md:px-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">🔒 Privacy Policy</h1>
        <p className="text-gray-600 mb-12 text-lg">
          At EduGenius AI, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data. By accessing or using our website, you agree to the terms of this policy.
        </p>

        {/* Sections of the Privacy Policy */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600">
              We collect information from you when you use our services. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li><strong>Personal Information:</strong> When you register for an account or contact us, we may collect personal details such as your name, email address, and other contact information.</li>
              <li><strong>Account Information:</strong> Details about your account activity, including course enrollments, learning progress, and user preferences.</li>
              <li><strong>Usage Data:</strong> Information regarding how you interact with our platform, including page views, search queries, device details, and other usage patterns.</li>
              <li><strong>Payment Information:</strong> If you make purchases, we collect payment details like billing information and transaction history, which is processed securely by our payment partners.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600">
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li>To provide and manage your access to our platform and services.</li>
              <li>To personalize your learning experience based on your preferences and activity.</li>
              <li>To communicate with you regarding account activity, course updates, and promotional offers (if you opt-in).</li>
              <li>To analyze usage trends and improve the overall platform and services.</li>
              <li>To process payments and manage any financial transactions securely.</li>
              <li>To ensure the security of our platform and prevent fraud or unauthorized access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Security</h2>
            <p className="text-gray-600">
              We take data protection seriously and have implemented reasonable security measures to safeguard your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption technologies, secure payment processing systems, and regular security audits.
            </p>
            <p className="text-gray-600 mt-4">
              Despite our efforts to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-600">
              We do not sell or rent your personal data to third parties. However, we may share your information in the following cases:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li><strong>Service Providers:</strong> We may share your data with trusted third-party vendors who assist in operating our platform (e.g., hosting providers, payment processors, email services).</li>
              <li><strong>Legal Compliance:</strong> We may disclose your information if required by law, such as complying with a subpoena, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to the terms of this Privacy Policy.</li>
            </ul>
          </section>
        
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights and Choices</h2>
            <p className="text-gray-600">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li><strong>Access:</strong> You have the right to request access to the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You may request corrections to any inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> You may request that we delete your personal data, subject to legal retention requirements.</li>
              <li><strong>Withdrawal of Consent:</strong> You may withdraw your consent for receiving marketing communications at any time.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise any of these rights, please contact us at support@edugenius.ai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and improve our services. Cookies help us personalize content, remember your preferences, and analyze traffic.
            </p>
            <p className="text-gray-600 mt-4">
              You can control cookies through your browser settings. Please note that disabling cookies may affect your ability to use certain features on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Retention</h2>
            <p className="text-gray-600">
              We will retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and the "Last Updated" date at the top will be revised accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Email:</strong> support@edugenius.ai
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
