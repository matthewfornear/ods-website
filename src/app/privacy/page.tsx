import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />
      <main className="main-container relative z-10 flex-grow pt-20 px-4 max-w-2xl mx-auto w-full fade-up">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Effective Date</h2>
          <p>May 5th, 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
          <p>Omnidata Solutions LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share your personal information when you access or use our services, including our website, platform, or any applications provided by us (collectively, the "Service").</p>
          <p>By accessing or using our Service, you agree to the collection and use of your information in accordance with this Privacy Policy.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect the following types of information:</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">A. Publicly Available Information</h3>
          <p>We collect and process data that is publicly available on the internet, including business listings, websites, social media, review platforms, and other publicly accessible sources. This may include:</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Business name</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Website URL</li>
            <li>Operating hours</li>
            <li>Menu or service listings</li>
            <li>Reviews and ratings</li>
            <li>Photos and media</li>
            <li>Price ranges</li>
            <li>Amenities and features</li>
            <li>Geographic coordinates</li>
            <li>Categories and tags</li>
            <li>Owner responses</li>
            <li>Metadata and structured data</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">B. Information You Provide Voluntarily</h3>
          <p>If you sign up, contact us, or use features that require personal information, we may collect:</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Phone number</li>
            <li>Billing or payment information</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">C. OAuth and Third-Party Integrations</h3>
          <p>When you opt in to connect third-party accounts (e.g., Google, Microsoft, LinkedIn, Yelp, Meta, X.com, Amazon, or any other supported service) using OAuth or similar login methods, you authorize us to access and use all data that the platform makes available. This may include, but is not limited to:</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Account profile information (name, username, email, profile picture)</li>
            <li>Contact lists and connections</li>
            <li>Calendar events and reminders</li>
            <li>Business pages and listings</li>
            <li>Posts, comments, and engagement metrics</li>
            <li>Uploaded content and files</li>
            <li>Reviews and business responses</li>
            <li>Location data and device metadata</li>
            <li>Purchase or order history</li>
            <li>Advertisements and analytics</li>
            <li>Account activity logs</li>
            <li>Permission scopes defined by the OAuth or platform API</li>
          </ul>
          <p>We only access data that you explicitly authorize and use it solely to provide or improve the Service.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">D. Automatically Collected Information</h3>
          <p>We collect certain data automatically, such as:</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device identifiers</li>
            <li>Operating system</li>
            <li>Referring pages</li>
            <li>Pages visited</li>
            <li>Session timestamps</li>
            <li>Usage and behavior analytics</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>To provide and maintain our Service</li>
            <li>To improve performance and functionality</li>
            <li>To analyze and aggregate business insights</li>
            <li>To communicate with users</li>
            <li>To ensure security and prevent fraud</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Sharing</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Service providers who assist in operating our platform (under confidentiality agreements)</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>Business partners (with user consent or in anonymized/aggregated form)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Retention</h2>
          <p>We retain personal and usage data indefinitely unless you request deletion. You may request data removal at any time by contacting us at <a href="mailto:dataretention@omnidata-solutions.com" className="text-blue-400 underline">dataretention@omnidata-solutions.com</a>. Deletion will be processed within a reasonable timeframe.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent to data processing</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:dataretention@omnidata-solutions.com" className="text-blue-400 underline">dataretention@omnidata-solutions.com</a>.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to improve user experience. You can manage your cookie preferences through your browser settings.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
          <p>Our Service is not intended for children under 13. We do not knowingly collect data from anyone under this age. If we become aware of such data, we will delete it immediately.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Material changes will be communicated via email or notice on our website. Continued use of our Service after changes constitutes acceptance of the updated policy.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
          <p>For any questions about this Privacy Policy or to exercise your rights, contact us at:</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Omnidata Solutions LLC</li>
          </ul>
          <div className="mt-2 text-gray-300">
            182c Mahanoy St, Nuremberg, Pa, 18241<br />
            Email: <a href="mailto:contact@omnidata-solutions.com" className="text-blue-400 underline">contact@omnidata-solutions.com</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 